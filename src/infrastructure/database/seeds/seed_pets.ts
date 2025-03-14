import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Remove todos os registros existentes
  await knex('pets').del();

  // Insere novos registros
  await knex('pets').insert([
    { name: 'Rex', age: 3, species: 'Cachorro' },
    { name: 'Mia', age: 2, species: 'Gato' },
    { name: 'Bolota', age: 5, species: 'Coelho' },
  ]);
}
