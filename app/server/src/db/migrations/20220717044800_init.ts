import { Knex } from "knex";

const POSTS_TABLE = "posts";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(POSTS_TABLE, (table: Knex.TableBuilder) => {
    table.increments();
    table.string("post_name").notNullable();
    table.string("post_description").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(POSTS_TABLE);
}
