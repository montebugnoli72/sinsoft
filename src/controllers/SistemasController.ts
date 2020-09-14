import { Request, Response } from 'express';
import knex from '../database/connection'

class SistemasController{

    async index(request: Request, response: Response)  
    {
        const { municipio } = request.params;

        const items = await knex('SISTEMAS_APP').select('*').where('municipio',municipio);
    
        const serializedItems  = items.map(item=>{
            return {
            id: item.ID,
            municipio: item.MUNICIPIO,
            sistema: item.SISTEMA,
            endereco: item.ENDERECO 
            };
        }); 
        return response.json(serializedItems); 
    } 
}

export default SistemasController;