import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { GlobalConfigModule } from './configs/config.config';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [GlobalConfigModule, RedisCacheModule, AnimalModule],
  controllers: [AppController],
})
export class AppModule {}
