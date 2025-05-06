import { ListPetsController } from "./list-pets";
import { IListPetsUseCase } from "../../../../core/useCases/listPets/list-pets.interface";

describe('ListPetsController', () => {
  let controller: ListPetsController;
  let mockUseCase: jest.Mocked<IListPetsUseCase>;

  beforeEach(() => {
    mockUseCase = {
      list: jest.fn(),
    };

    controller = new ListPetsController(mockUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handle', () => {
    it('should call list pets use case and return the list', async () => {
      const pets = [
        {
          id: 'e5d325ca-641e-4ad8-a8de-14677d2abbcc',
          name: 'salame',
          species: 'dog',
          age: 20,
          ownerId: 'bcbdfb97-bef9-4b53-94b6-78f9972d0f2e',
          created_at: new Date('2025-05-03T15:57:08.148Z'),
          updated_at: new Date('2025-05-03T15:57:08.148Z'),
          validate: jest.fn(), 
        }
      ];
  
      //mockUseCase.list.mockResolvedValue();
  
      const result = await controller.handle();
  
      expect(mockUseCase.list).toHaveBeenCalledTimes(1);
      expect(result).toEqual(pets);
    });
  });  
});
