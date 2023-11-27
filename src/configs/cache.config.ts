import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import dotenv from 'dotenv';

dotenv.config();

export const GlobalCacheModule = RedisCacheModule.register({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  ttl: parseInt(process.env.REDIS_TTL, 10) || 300,
  isGlobal: true,
});
