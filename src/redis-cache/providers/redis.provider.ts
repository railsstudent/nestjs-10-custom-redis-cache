import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { REDIS_TOKEN } from '../constants/redis.constant';
import { RedisConfig } from '../interfaces/redis-config.interface';

export const RedisProvider: Provider<Redis> = {
  provide: REDIS_TOKEN,
  useFactory: (configService: ConfigService) => {
    const { host, port } = configService.get<RedisConfig>('redis');
    return new Redis({
      host: host || 'localhost',
      port: port || 6379,
    });
  },
  inject: [ConfigService],
};
