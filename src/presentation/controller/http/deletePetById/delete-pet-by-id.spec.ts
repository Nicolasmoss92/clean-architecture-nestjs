import { DeletePetController } from './delete-pet-by-id';
import { IDeletePetByIdUseCase } from '../../../../core/useCases/deletePetById/delete-pet-by-id.interface';
import { DeletePetByIdDto } from './delete-pet-by-id.dto';

describe('DeletePetController', () => {
  let controller: DeletePetController;
  let mockUseCase: jest.Mocked<IDeletePetByIdUseCase>;

  beforeEach(() => {
    mockUseCase = {
      deleteById: jest.fn(),
    };

    controller = new DeletePetController(mockUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call deleteById use case with the given id', async () => {
      const deleteDto: DeletePetByIdDto = {
        id: 'abc-123',
      };

      await controller.handle(deleteDto);

      expect(mockUseCase.deleteById).toHaveBeenCalledWith(deleteDto.id);
      expect(mockUseCase.deleteById).toHaveBeenCalledTimes(1);
    });
  });
});
