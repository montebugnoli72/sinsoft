import knex from 'knex';

/* Conexão local
const connection = knex({
    client:'mssql', 
    connection: { 
        port: 1433,
        server: 'THIAGO-PC',
        database : 'RICARDO',
        user : 'sa',
        password : '1',        
        options: {
            enableArithAbort: true,
            instanceName: 'SQLEXPRESS',
            encrypt: false
        }
    },
    useNullAsDefault: true,
});
*/

const connection = knex({
    client:'mssql', 
    connection: { 
        port: 1433,
        server: 'sinsoft-db-02.ckqdetzeq1zm.sa-east-1.rds.amazonaws.com', 
        database : 'BANCO_DEMONSTRACAO', 
        user : 'sinsoft', 
        password : 'softsin2012',
        options: {
            enableArithAbort: true,
            encrypt: false
        }      
    },
    useNullAsDefault: true,
});

export default connection;