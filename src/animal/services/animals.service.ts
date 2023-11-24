import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { AnimalColorDto } from '../dtos/animal-color.dto';

@Injectable()
export class AnimalsService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheService: Cache) {}

  async cacheValue({ name, color }: AnimalColorDto): Promise<void> {
    await this.cacheService.set(name, color);
  }

  async getValue(key: string): Promise<string> {
    const value = await this.cacheService.get<string>(key);
    return value || 'No key';
  }
}
