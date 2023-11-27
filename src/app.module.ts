import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { globalCacheConfig } from './configs/cache.config';

@Module({
  imports: [globalCacheConfig, AnimalModule],
  controllers: [AppController],
})
export class AppModule {}
