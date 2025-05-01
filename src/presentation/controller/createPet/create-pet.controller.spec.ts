import { CreatePetController } from "./create-pet.controller";
import { PetMapper } from "./pet.mapper";

describe('CreatePetController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call use case with mapped pet entity', async () => {
      const createPetDto = {
        id: "e5d325ca-641e-4ad8-a8de-14677d2abbcc",
        name: "salame",
        species: "dog",
        age: 20,
        ownerId: "bcbdfb97-bef9-4b53-94b6-78f9972d0f2e",
        created_at: new Date(),
      };

      const petEntity = PetMapper.fromCreateDtoToEntity(createPetDto);

      const mockUseCase = {
        create: jest.fn().mockResolvedValue(undefined),
      };

      const controller = new CreatePetController(mockUseCase as any);

      await controller.handle(createPetDto as any);

      expect(mockUseCase.create).toHaveBeenCalledWith(petEntity);
    });
  });
});
