import Knex from 'knex';

export async function up(knex: Knex) 
{
    return knex.schema.createTable('clientes',table=>
    {
        table.increments('id').primary(),
        table.string('razaosocial').notNullable();
        table.string('endereco').notNullable();
        table.string('cidade').notNullable();
        table.string('estado',2).notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
    });
}


export async function down(knex: Knex)
{
    return knex.schema.dropTable('clientes')
};