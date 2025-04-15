import { Knex } from 'knex';
import { injectable, inject } from 'tsyringe';
import { Repository } from './repository';
import { Pet } from 'src/core/entities/pet';
import { IPetRepository } from 'src/core/ports/pet.repository';

@injectable()
export class PetRepository
  extends Repository<Pet>
  implements IPetRepository
{
  protected properties = [
    'id',
    'name',
    'created_at',
    'updated_at',
  ];

  constructor(@inject('mysql_database') protected database: Knex) {
    super();
  }
}
