import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import redisConfig from './redis.config';

export const GlobalConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [redisConfig],
  validationSchema: Joi.object({
    REDIS_HOST: Joi.string(),
    REDIS_PORT: Joi.number(),
    REDIS_TTL: Joi.number(),
  }),
});
