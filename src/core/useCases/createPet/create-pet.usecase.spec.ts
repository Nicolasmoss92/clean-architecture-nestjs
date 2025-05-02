import { CreatePetUsecase } from './create-pet.usecase';
import { Pet } from '../../../core/entities/pet';
import { PetAlreadyExistsException } from '../../../core/exceptions/pet-already-exists.exception';

describe('CreatePetUsecase', () => {
  let useCase: CreatePetUsecase;
  const mockPetRepository = {
    create: jest.fn(),
    getPetById: jest.fn(),
  };

  beforeEach(() => {
    useCase = new CreatePetUsecase(mockPetRepository as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve chamar petRepository.create com a entidade Pet', async () => {
    const pet: Pet = new Pet({
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Rex',
      species: 'dog',
      age: 5,
      ownerId: '321e4567-e89b-12d3-a456-426614174000',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockPetRepository.getPetById.mockResolvedValue(null);

    await useCase.create(pet);

    expect(mockPetRepository.create).toHaveBeenCalledWith(pet);
  });

  it('deve lançar PetAlreadyExistsException se o pet já existir', async () => {
    const pet: Pet = new Pet({
      id: '123e4567-e89b-12d3-a456-426614174000',
      name: 'Rex',
      species: 'dog',
      age: 5,
      ownerId: '321e4567-e89b-12d3-a456-426614174000',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockPetRepository.getPetById.mockResolvedValue(pet);

    await expect(useCase.create(pet)).rejects.toThrow(PetAlreadyExistsException);
    expect(mockPetRepository.create).not.toHaveBeenCalled();
  });
});
