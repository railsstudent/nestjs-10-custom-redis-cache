import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './interfaces/redis-cache.module-definition';
import { RedisTtlSecondsProvider } from './providers/redis-ttl-seconds.provider';
import { RedisProvider } from './providers/redis.provider';

@Module({
  providers: [RedisProvider, RedisTtlSecondsProvider],
  exports: [RedisProvider, RedisTtlSecondsProvider],
})
export class RedisCacheModule extends ConfigurableModuleClass {}
