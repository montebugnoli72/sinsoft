"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
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
var connection = knex_1.default({
    client: 'mssql',
    connection: {
        port: 1433,
        server: 'sinsoft-db-02.ckqdetzeq1zm.sa-east-1.rds.amazonaws.com',
        database: 'BANCO_DEMONSTRACAO',
        user: 'sinsoft',
        password: 'softsin2012',
        options: {
            enableArithAbort: true,
            encrypt: false
        }
    },
    useNullAsDefault: true,
});
exports.default = connection;
