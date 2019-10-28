import React from 'react';
import { mount } from 'enzyme';
import Detail from '../../views/detail';
import * as actions from '../../store/actions';
import { StoreProvider } from '../../store/store';

describe('View', () => {
    let wrapper;
    describe('Product detail', () => {
        it('render', () => {
            const product = getProducts(1);
            const mockResponse = new Promise((resolve, reject) => {
                resolve({ categories, itemDetail, isLoading, hasBeenFetched });
            });
            jest.spyOn(actions, 'getItemDetailAction').mockImplementation(() => mockResponse);

            wrapper = mount(
                <StoreProvider>
                    <Detail product={product} />
                </StoreProvider>
            );
            // expect(wrapper.hasClass('detail')).toBe(true);
            // expect(wrapper.exists('Header')).toBe(true);
            // expect(wrapper.exists('Breadcrum')).toBe(true);
            // expect(wrapper.exists('Container')).toBe(true);
        });
    });
});

const getProducts = (quantity) => {
    return [...Array(quantity)].forEach(() => {
		return {
            id: "_01",
            title: "Deco Reverse Sombrero Oxford",
            price: {
                currency: "$",
                amount: "1980",
                decimals: "0",
            },
            picture: "https://mlstaticquic-a.akamaihd.net/celular-lg-phoenix-4-5-16gb-2gb-cam-85mp-nuevo-barato-p-m-D_NQ_NP_764953-MLU31240996281_062019-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 234,
            description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    });
}
