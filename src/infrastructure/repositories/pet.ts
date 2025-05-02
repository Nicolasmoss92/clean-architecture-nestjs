import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Pet } from 'src/core/entities/pet';
import { IPetRepository } from 'src/core/ports/pet.repository';

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(
    @Inject('KnexConnection') private readonly knex: Knex
  ) {}

  async create(body: Pet): Promise<string> {
    const [inserted] = await this.knex('pets')
      .insert(body)
      .returning('id');
  
    return inserted.toString();
  }

  async getPetById(id: string): Promise<Pet> {
      return this.knex('pets')
      .where('id', id)
      .first();
  }

  async deleteById(id: string): Promise<void> {
    await this.knex('pets')
      .where('id', id)
      .delete();
  }
}
