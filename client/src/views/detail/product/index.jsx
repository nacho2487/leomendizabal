import React from 'react';
import Button from '../../../components/button';
import { 
    getFormattedPrice,
    getFormattedDecimals,
    formattedCurrency,
    statusValues
} from '../../../utils/formatter';

import './product.scss';

const Product = ({ detail }) => {
    const { title, price: { amount, currency, decimals }, picture, condition, sold_quantity, description } = detail;
    const status = `${statusValues[condition]} - ${sold_quantity} vendidos`;
    //TODO: CREATE PRICE COMPONENT TO BE USED HERE & IN DESCRIPTION COMPONENT
    const formattedPrice = getFormattedPrice(amount);
    const formattedDecimals = getFormattedDecimals(decimals); 
    const priceComponent = (
        <span>
            <span className={"product__info__price"}>{formattedCurrency[currency]}</span>
            {formattedPrice}
            <sup>{formattedDecimals}</sup>
        </span>
    );

	return (
        <React.Fragment>
            <div>
                <div className="product__image">
                    <img src={picture} alt="product" />
                </div>
                <div className="product__info">
                    <h1 className="product__info__status">{status}</h1>
                    <h2 className="product__info__name">{title}</h2>
                    <h3 className="product__info__price">{priceComponent}</h3>
                    <Button className="product__info__buy-button" value="Comprar" />
                </div>
            </div>
            <div className="product__description">
                <h1 className="product__description__title">Descripción del producto</h1>
                <p className="product__description__text">
                    {description}
                </p>
            </div>
        </React.Fragment>
	);
}

export default Product;