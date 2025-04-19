import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('pets').del();

  await knex('pets').insert([
    { id: "16ddb281-dcd0-4224-be59-26d3462d11b5", name: 'Rex', age: 3, species: 'Cachorro'  },
    { id: "e5dd2dcb-b4d8-4230-a49d-7a09d1969393", name: 'Mia', age: 2, species: 'Gato'  },
    { id: "ed12c883-e182-4d19-b468-d8550f001db4", name: 'Bolota', age: 5, species: 'Coelho' },
  ]);
}
