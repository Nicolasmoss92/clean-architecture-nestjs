import { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/infrastructure/database/migrations',
  },
  seeds: {
    directory: './src/infrastructure/database/seeds',
  },
};

export default config;
