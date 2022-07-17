import { Knex } from "knex";

const TABLE = "posts";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE, (table: Knex.TableBuilder) => {
    table.increments();
    table.string("name").notNullable();
    table.string("description").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE);
}
