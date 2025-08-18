import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
  entities: ['src/entities/*.ts'], //  エンティティファイル
  migrations: ['src/migrations/*.ts'], // マイグレーションファイル
});

export default AppDataSource;
