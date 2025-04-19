import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { IPetRepository } from 'src/core/ports/pet.repository';

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(
    @Inject('KnexConnection') private readonly knex: Knex
  ) {}

  async create(): Promise<any> {
    return await this.knex('pets');
  }
}
