import { searchItem, searchItems } from '../controllers/items';

export class ItemRoutes {
	public routes(app): void {
		app
			.route('/api/items')
			.get(searchItems);
		app
			.route('/api/items/:id')
			.get(searchItem);
	}
}