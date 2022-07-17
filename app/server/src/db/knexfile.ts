const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const knexfile = {
  client: "pg",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
};

export default knexfile; /* must be a default export for migrations */
