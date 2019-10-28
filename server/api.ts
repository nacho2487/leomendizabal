import axios from 'axios';

export const getItem = async (id: String) => {
	try {
		const url = `https://api.mercadolibre.com/items/${id}`;
		const item = await APIGet(url);
		return item;
	} catch (error) {
		console.error(error);
	}
}

export const getItemDescription = async (id: String) => {
	try {
		const url = `https://api.mercadolibre.com/items/${id}/description`;
		const description = await APIGet(url);
		return description.plain_text;
	} catch (error) {
		console.error(error);
	}
}

export const getItems = async (query: String, limit: Number) => {
	try {
		const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`;
		return APIGet(url);
	} catch (error) {
		console.error(error);
	}
}

export const getCategories = async (categoryId) => {
	const url = `https://api.mercadolibre.com/categories/${categoryId}`;
	const { path_from_root: path } = await APIGet(url);
	const categories = path.map((category) => category.name);
	return categories;
}

const APIGet = (url) => {
	return axios
		.get(url)
		.then((response) => response.data);
}