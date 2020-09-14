"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MunicipiosController_1 = __importDefault(require("./controllers/MunicipiosController"));
var SistemasController_1 = __importDefault(require("./controllers/SistemasController"));
var routes = express_1.default.Router();
var municipiosController = new MunicipiosController_1.default();
var sistemasController = new SistemasController_1.default();
routes.get('/municipios', municipiosController.index);
routes.get('/sistemas/:municipio', sistemasController.index);
exports.default = routes;
