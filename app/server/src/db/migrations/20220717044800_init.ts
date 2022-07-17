import { Knex } from "knex";

const postsTable = "posts";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(postsTable, (table: Knex.TableBuilder) => {
    table.increments();
    table.string("post_name").notNullable();
    table.string("post_description").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(postsTable);
}
