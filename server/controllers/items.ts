import { NextFunction, Request, Response } from 'express';
import { getItem as getItemAPI, getItemDescription, getItems, getCategories} from '../api';
import Item, { IItem } from '../models/item';
import { DEFAULT_LIMIT } from '../constants/pagination';
import { SUCCESSFUL } from '../constants/statusCode';

export const searchItem = async (req: Request, res: Response, next: NextFunction) => {
	const itemId = req.params.id;
	const item = await getItem(itemId);
	const categories = await getCategories(item.category_id);

	res.status(SUCCESSFUL).send({ ...item, categories });
	next();
}

export const searchItems = async (req: Request, res: Response, next: NextFunction) => {
	const query = req.query.q;
	const limit = req.query.limit || DEFAULT_LIMIT;
	const { results: itemsData } = await getItems(query, limit);
	let categories = [];
	
	if(itemsData.length > 0) {
		const { category_id: categoryId } = itemsData[0];
		categories = await getCategories(categoryId);
	}
	
	const items = mapItems(itemsData);

	res.status(SUCCESSFUL).send({ items, categories });
	next();
}

const getItem = async (itemId) => {
	const item = await getItemAPI(itemId);
	const description = await getItemDescription(itemId);

	return { ...itemMapping({ ...item, description }) };
}

const mapItems = (items) => {
	return items.map((item) => {
		const { id, title, price, currency_id, condition, category_id, shipping, sold_quantity, thumbnail } = item;
		const pictures = [{ url: thumbnail }];

		return itemMapping({ id, title, price, currency_id, pictures, condition, category_id, shipping, sold_quantity });
	});
}

// TODO: use this mapping before returning the results on api.
const itemMapping = ({ id, title, price, currency_id, pictures, condition, category_id, shipping, sold_quantity, description='' }):IItem => {
	return new Item({
		id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: 0
        },
        picture: pictures[0] ? pictures[0].url : '',
		condition,
		category_id,
        free_shipping: shipping ? shipping.free_shipping : false,
        sold_quantity,
        description: description ? description : ''
	});
}