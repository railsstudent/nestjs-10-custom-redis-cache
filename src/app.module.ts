import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { AppController } from './app.controller';
import { GlobalCacheModule } from './configs/cache.config';
import { GlobalConfigModule } from './configs/config.config';

@Module({
  imports: [GlobalCacheModule, GlobalConfigModule, AnimalModule],
  controllers: [AppController],
})
export class AppModule {}
