import { Controller, Get, HttpCode, Inject } from "@nestjs/common";
import { GetPetByIdResponse } from "../http/getPetById/get-pet-by-id-reposnse.dto";

@Controller('petServiceGetAll')
export class GetAllPetController {
    constructor(
      @Inject('GetAllPetUseCase') private readonly getAllPetUseCase: GetAllPetUseCase,
    ) {}
  
    @Get()
    @HttpCode(200)
    async handle(): Promise<GetPetByIdResponse[]> {
      const petId = await this.getAllPetUseCase.getAll();

      return petId;
    }
}