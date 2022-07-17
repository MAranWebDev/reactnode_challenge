import { knex } from "../../db/knex";

const TABLE = "posts";

const postsQueries = () => {
  return {
    getRecords: async () => await knex(TABLE).select("*"),

    addRecord: async (values: Object) =>
      await knex(TABLE).insert(values).returning("*"),

    deleteRecord: async (id: number) =>
      await knex(TABLE).delete().returning("*").where({ id }),
  };
};

export { postsQueries };
