import { Global, Module } from '@nestjs/common';
import { RedisProvider } from './providers/redis.provider';
import { RedisTtlSecondsProvider } from './providers/redis-ttl-seconds.provider';

@Global()
@Module({
  providers: [RedisProvider, RedisTtlSecondsProvider],
  exports: [RedisProvider, RedisTtlSecondsProvider],
})
export class RedisCacheModule {}
