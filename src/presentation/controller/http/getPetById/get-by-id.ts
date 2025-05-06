import { Body, Controller, Get, HttpCode, Inject } from "@nestjs/common";
import { GetPetByIdDto } from "./get-pet-by-id.dto";
import { GetPetByIdResponse } from "./get-pet-by-id-response.dto";
import { GetPetByIdUseCase } from "src/core/useCases/getPetById/get-pet-by-id.usecase";

@Controller('petServiceGetById')
export class GetPetByIdController {
    constructor(
      @Inject('GetPetByIdUseCase') private readonly getPetByIdUseCase: GetPetByIdUseCase,
    ) {}
  
    @Get()
    @HttpCode(200)
    async handle(@Body() getPetById: GetPetByIdDto): Promise<GetPetByIdResponse> {
      const { id } = getPetById;
      const pet = await this.getPetByIdUseCase.getById(id);
      return pet;
    }
}