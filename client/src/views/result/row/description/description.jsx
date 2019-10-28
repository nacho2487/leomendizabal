import React from 'react';
import Image from '../../../../components/image';
import freeShipping from '../../../../assets/icons/ic_shipping.png';
import freeShippingHD from '../../../../assets/icons/ic_shipping@2x.png.png';
import { getFormattedPrice, formattedCurrency, statusValues } from '../../../../utils/formatter';

const Description = ({ className, data }) => {
    const { city, condition, free_shipping, price: { amount, currency }, title } = data;
    const formattedPrice = getFormattedPrice(amount);
    const priceComponent = (
        <span>
            <span className={`${className}__price-currency`}>{formattedCurrency[currency]}</span>
            {formattedPrice}
        </span>
    );

	return (
        <div className={className}>
            <div className={`${className}__price`}>
                { priceComponent }
                { free_shipping && <Image className={`${className}__shipping-icon`} src={freeShippingHD} fallback={freeShipping} icon />}
                <div className={`${className}__city`}>
                    <span>{ city }</span>
                </div>
            </div>
            <span></span>
            <span className={`${className}__title`}>{ title }</span>
            <span className={`${className}__condition`}>{ statusValues[condition] }</span>
        </div>
	);
}

export default Description;