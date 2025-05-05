import { ListPetsUseCase } from './list-pets.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from '../../../core/entities/pet';
import { NotFoundException } from '@nestjs/common';

describe('ListPetsUseCase', () => {
  let useCase: ListPetsUseCase;
  let mockRepository: jest.Mocked<IPetRepository>;

  beforeEach(() => {
    mockRepository = {
      all: jest.fn(),
      getPetById: jest.fn(),
      create: jest.fn(),
    } as unknown as jest.Mocked<IPetRepository>;

    useCase = new ListPetsUseCase(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of pets when pets exist', async () => {
    const pets: Pet[] = [
      new Pet({
        id: '1',
        name: 'Bolota',
        species: 'dog',
        age: 3,
        ownerId: 'owner-xyz',
        created_at: new Date(),
        updated_at: new Date(),
      }),
    ];

    mockRepository.all.mockResolvedValue(pets);

    const result = await useCase.list();

    expect(mockRepository.all).toHaveBeenCalledTimes(1);
    expect(result).toEqual(pets);
  });

  it('should throw NotFoundException when no pets are found', async () => {
    mockRepository.all.mockResolvedValue(null);

    await expect(useCase.list()).rejects.toThrow(NotFoundException);
    expect(mockRepository.all).toHaveBeenCalledTimes(1);
  });
});
