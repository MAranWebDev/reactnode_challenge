import connection from "knex";
import knexfile from "./knexfile";

const knex = connection(knexfile);

export { knex };
