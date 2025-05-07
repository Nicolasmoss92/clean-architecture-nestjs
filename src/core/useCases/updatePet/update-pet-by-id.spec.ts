import { UpdatePetUseCase } from './update-pet-by-id.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from '../../../core/entities/pet';

describe('UpdatePetUseCase', () => {
  let useCase: UpdatePetUseCase;
  let mockRepository: jest.Mocked<IPetRepository>;

  beforeEach(() => {
    mockRepository = {
      update: jest.fn(),
    } as unknown as jest.Mocked<IPetRepository>;

    useCase = new UpdatePetUseCase(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update a pet', async () => {
    const updatedPet = new Pet({
      id: 'pet-001',
      name: 'Toby',
      species: 'dog',
      age: 4,
      ownerId: 'owner-123',
      created_at: new Date(),
      updated_at: new Date(),
    });

    await useCase.update(updatedPet);

    expect(mockRepository.update).toHaveBeenCalledWith(updatedPet);
    expect(mockRepository.update).toHaveBeenCalledTimes(1);
  });
});
