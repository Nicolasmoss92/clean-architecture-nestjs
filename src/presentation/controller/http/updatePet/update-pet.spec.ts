
import { IUpdatePetUseCase } from 'src/core/useCases/updatePet/update-pet-by-id.interface';
import { UpdatePetDTO } from './update-pet.dto';
import { UpdatePetByIdController } from './update-pet';

describe('UpdatePetByIdController', () => {
  let controller: UpdatePetByIdController;
  let mockUseCase: jest.Mocked<IUpdatePetUseCase>;

  beforeEach(() => {
    mockUseCase = {
      update: jest.fn(),
    };

    controller = new UpdatePetByIdController(mockUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call use case with the update DTO', async () => {
      const updateDto: UpdatePetDTO = {
        id: 'abc-123',
        name: 'Rex',
        age: 6,
        species: 'dog',
      };

      await controller.handle(updateDto);

      expect(mockUseCase.update).toHaveBeenCalledWith(updateDto);
      expect(mockUseCase.update).toHaveBeenCalledTimes(1);
    });
  });
});
