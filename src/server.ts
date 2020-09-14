import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); //entender o json
app.use(routes);
app.listen(1234);