import { CreatePetController } from "./create-pet.controller";
import { PetMapper } from "./pet.mapper";
import { CreatePetDto } from "./create-pet.dto";
import { ICreatePetUseCase } from "../../../../core/useCases/createPet/create-pet.interface";

describe('CreatePetController', () => {
  let controller: CreatePetController;
  let mockUseCase: jest.Mocked<ICreatePetUseCase>;

  beforeEach(() => {
    mockUseCase = {
      create: jest.fn(),
    };

    controller = new CreatePetController(mockUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call use case with mapped pet entity', async () => {
      const createPetDto: CreatePetDto = {
        id: "e5d325ca-641e-4ad8-a8de-14677d2abbcc",
        name: "salame",
        species: "dog",
        age: 10,
        ownerId: "bcbdfb97-bef9-4b53-94b6-78f9972d0f2e", 
      };

      const expectedEntity = PetMapper.fromCreateDtoToEntity(createPetDto);

      expectedEntity.created_at = expect.any(Date);
      expectedEntity.updated_at = expect.any(Date);

      await controller.handle(createPetDto);

      expect(mockUseCase.create).toHaveBeenCalledWith(expectedEntity);
      expect(mockUseCase.create).toHaveBeenCalledTimes(1);
    });
  });
});
