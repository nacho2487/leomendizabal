export interface IItem {
    id: String
    title: String
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    category_id: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
}

export default class Item {
    readonly id: String
    readonly title: String
    readonly price: {
        currency: String
        amount: Number
        decimals: Number
    }
    readonly picture: String
    readonly condition: String
    readonly category_id: String
    readonly free_shipping: Boolean
    readonly sold_quantity: Number
    readonly description: String

    constructor({id, title, price, picture, condition, category_id, free_shipping, sold_quantity, description}:IItem) {
        this.id = id;
        this.title = title;
        this.price = {
            currency: price.currency,
            amount: price.amount,
            decimals: price.decimals
        }
        this.picture = picture;
        this.condition = condition;
        this.category_id = category_id;
        this.free_shipping = free_shipping;
        this.sold_quantity = sold_quantity;
        this.description = description;
    }
}