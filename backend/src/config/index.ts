require("dotenv").config;

export default {
  database: {
    host: String(process.env.DB_HOST),
    database: String(process.env.DB_DATABASE),
    user: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    timezone: String(process.env.DB_TIMEZONE),
    dialect: String(process.env.DB_HOST),
    pool: {
      min: 0,
      max: 5,
      idle: 20000,
      acquire: 20000,
    },
  },
};
