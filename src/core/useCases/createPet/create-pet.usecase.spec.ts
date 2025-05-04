import { CreatePetUsecase } from './create-pet.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from '../../../core/entities/pet';
import { PetAlreadyExistsException } from '../../../core/exceptions/pet-already-exists.exception';

describe('CreatePetUsecase', () => {
  let useCase: CreatePetUsecase;
  let mockRepository: jest.Mocked<IPetRepository>;

  beforeEach(() => {
    mockRepository = {
      getPetById: jest.fn(),
      create: jest.fn(),
    } as unknown as jest.Mocked<IPetRepository>;

    useCase = new CreatePetUsecase(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new pet if it does not already exist', async () => {
    const newPet = new Pet({
      id: '123',
      name: 'Bolota',
      species: 'dog',
      age: 3,
      ownerId: 'owner-xyz',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockRepository.getPetById.mockResolvedValue(null);

    await useCase.create(newPet);

    expect(mockRepository.getPetById).toHaveBeenCalledWith('123');
    expect(mockRepository.create).toHaveBeenCalledWith(newPet);
    expect(mockRepository.create).toHaveBeenCalledTimes(1);
  });

  it('should throw PetAlreadyExistsException if pet already exists', async () => {
    const existingPet = new Pet({
      id: '123',
      name: 'Bolota',
      species: 'dog',
      age: 3,
      ownerId: 'owner-xyz',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockRepository.getPetById.mockResolvedValue(existingPet);

    await expect(useCase.create(existingPet)).rejects.toThrow(PetAlreadyExistsException);
    expect(mockRepository.getPetById).toHaveBeenCalledWith('123');
    expect(mockRepository.create).not.toHaveBeenCalled();
  });
});
