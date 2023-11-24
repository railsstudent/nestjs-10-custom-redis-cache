import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';

interface RedisConfig {
  host: string;
  port: number;
  ttl: number;
}

// https://github.com/dabroek/node-cache-manager-redis-store/issues/40
export const GlobalCacheModule = CacheModule.registerAsync<RedisClientOptions>({
  useFactory: (configService: ConfigService) => {
    const { host, port, ttl } = configService.get<RedisConfig>('redis');
    return {
      store: redisStore,
      socket: {
        host,
        port,
      },
      ttl,
    };
  },
  inject: [ConfigService],
  isGlobal: true,
});
