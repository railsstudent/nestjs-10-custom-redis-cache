import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_TOKEN } from '../constants/redis.constant';
import { MODULE_OPTIONS_TOKEN } from '../interfaces/redis-cache.module-definition';
import { RedisCacheModuleOptions } from '../interfaces/redis-cache-options.interface';

export const RedisProvider: Provider<Redis> = {
  provide: REDIS_TOKEN,
  useFactory: (options: RedisCacheModuleOptions) =>
    new Redis({
      host: options.host || 'localhost',
      port: options.port || 6379,
    }),
  inject: [MODULE_OPTIONS_TOKEN],
};
