import * as bodyParser from 'body-parser';
import * as express from 'express';
import { ItemRoutes } from './routes/items';

class App {
	public app: express.Application;
	private itemRoutes: ItemRoutes = new ItemRoutes();
	
	constructor() {
		this.app = express();
		this.app.use(bodyParser.json());
		this.itemRoutes.routes(this.app);
	}
}

export default new App().app