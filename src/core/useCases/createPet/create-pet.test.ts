import { Test, TestingModule } from '@nestjs/testing';
import { CreatePetUsecase } from './create-pet.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from 'src/core/entities/pet';

describe('CreatePetUsecase', () => {
  let createPetUsecase: CreatePetUsecase;
  let petRepositoryMock: jest.Mocked<IPetRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePetUsecase,
        {
          provide: 'PetRepository',
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    createPetUsecase = module.get<CreatePetUsecase>(CreatePetUsecase);
    petRepositoryMock = module.get('PetRepository');
  });

  it('should call petRepository.create with the correct arguments', async () => {
    const pet = { id: '1', name: 'Buddy', age: 3, species: 'Dog', ownerId: 'owner1', created_at: new Date(), updated_at: new Date() };
    await createPetUsecase.create(pet);
    expect(petRepositoryMock.create).toHaveBeenCalledWith(pet);
  });

  it('should throw an error if petRepository.create fails', async () => {
    const pet: Pet = { id: '1', name: 'Buddy', age: 3, species: 'Dog' };
    petRepositoryMock.create.mockRejectedValue(new Error('Database error'));

    await expect(createPetUsecase.create(pet)).rejects.toThrow('Database error');
  });
});