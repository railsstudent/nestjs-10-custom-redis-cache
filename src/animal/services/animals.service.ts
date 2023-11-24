import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_TOKEN, REDIS_TTL_TOKEN } from '../../redis-cache';
import { AnimalColorDto } from '../dtos/animal-color.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @Inject(REDIS_TOKEN) private readonly redis: Redis,
    @Inject(REDIS_TTL_TOKEN) private readonly ttlInSeconds?: number,
  ) {}

  async cacheValue({ name, color }: AnimalColorDto): Promise<void> {
    if (this.ttlInSeconds) {
      await this.redis.set(name, color, 'EX', this.ttlInSeconds);
    } else {
      await this.redis.set(name, color);
    }
  }

  async getValue(key: string): Promise<string> {
    const value = await this.redis.get(key);
    return value || 'No key';
  }
}
