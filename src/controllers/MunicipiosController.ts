import { Request, Response } from 'express';
import knex from '../database/connection'

class MunicipiosController{

    async index(request: Request, response: Response)  
    {
        const items = await knex('SISTEMAS_APP').select('MUNICIPIO').distinct();
    
        const serializedItems  = items.map(item=>{
            return {
                municipio: item.MUNICIPIO,
            };
        }); 
        return response.json(serializedItems); 
    } 
}

export default MunicipiosController;