import express, { request, response } from 'express';
import MunicipiosController from  './controllers/MunicipiosController';
import SistemasController from  './controllers/SistemasController';

const routes = express.Router(); 
const municipiosController = new MunicipiosController();
const sistemasController = new SistemasController();

routes.get('/municipios', municipiosController.index);

routes.get('/sistemas/:municipio', sistemasController.index);

export default routes;
