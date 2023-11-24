import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REDIS_TTL_TOKEN } from '../constants/redis.constant';
import { RedisConfig } from '../interfaces/redis-config.interface';

export const RedisTtlSecondsProvider: Provider<number | undefined> = {
  provide: REDIS_TTL_TOKEN,
  useFactory: (configService: ConfigService) => configService.get<RedisConfig>('redis').ttl,
  inject: [ConfigService],
};
