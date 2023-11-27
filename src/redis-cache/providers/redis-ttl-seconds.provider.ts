import { Provider } from '@nestjs/common';
import { REDIS_TTL_TOKEN } from '../constants/redis.constant';
import { RedisCacheModuleOptions } from '../interfaces/redis-cache-options.interface';
import { MODULE_OPTIONS_TOKEN } from '../interfaces/redis-cache.module-definition';

export const RedisTtlSecondsProvider: Provider<number | undefined> = {
  provide: REDIS_TTL_TOKEN,
  useFactory: (options: RedisCacheModuleOptions) => options.ttl,
  inject: [MODULE_OPTIONS_TOKEN],
};
