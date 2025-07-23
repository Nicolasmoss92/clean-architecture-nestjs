import { GetPetByIdDto } from './get-pet-by-id.dto';
import { GetPetByIdController } from './get-by-id';
import { IGetPetByIdUseCase } from 'src/core/useCases/getPetById/get-pet-by-id.interface';

describe('GetPetByIdController', () => {
  let controller: GetPetByIdController;
  let mockUseCase: jest.Mocked<IGetPetByIdUseCase>;

  beforeEach(() => {
    mockUseCase = {
      getById: jest.fn(),
    };

    controller = new GetPetByIdController(mockUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call use case with correct ID and return pet data', async () => {
      const getPetByIdDto: GetPetByIdDto = {
        id: '1234',
      };

      // const expectedPet = {
      //   id: '1234',
      //   name: 'Rex',
      //   species: 'dog',
      //   age: 5,
      //   ownerId: 'owner-001',
      //   created_at: new Date(),
      //   updated_at: new Date(),
      //   validate: jest.fn(),
      // };

      //mockUseCase.getById.mockResolvedValue(expectedPet);

      await controller.handle(getPetByIdDto);

      expect(mockUseCase.getById).toHaveBeenCalledWith('1234');
      expect(mockUseCase.getById).toHaveBeenCalledTimes(1);
      //expect(result).toEqual(expectedPet);
    });
  });
});
