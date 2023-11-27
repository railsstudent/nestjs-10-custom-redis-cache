import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { env } from './env.config';

export const globalCacheConfig = RedisCacheModule.register({
  host: env.REDIS.HOST,
  port: env.REDIS.PORT,
  ttl: env.REDIS.TTL,
  isGlobal: true,
});
