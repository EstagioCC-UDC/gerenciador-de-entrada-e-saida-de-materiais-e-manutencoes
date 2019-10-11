require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_MIGRATION_HOST,
  username: process.env.DB_MIGRATION_USER,
  password: process.env.DB_MIGRATION_PASS,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
