import { Body, Controller, HttpCode, Inject, Injectable, Post } from "@nestjs/common";
import { GetPetByIdDto } from "./get-pet-by-id.dto";
import { GetPetByIdResponse } from "./get-pet-by-id-reposnse.dto";
import { GetPetByIdUseCase } from "src/core/useCases/getPetById/get-pet-by-id.usecase";

@Controller('petServiceGetById')
export class GetPetByIdController {
    constructor(
      @Inject('GetPetB4yIdUseCase') private readonly getPetByIdUseCase: GetPetByIdUseCase,
    ) {}
  
    @Post()
    @HttpCode(200)
    async handle(@Body() getPetById: GetPetByIdDto): Promise<GetPetByIdResponse> {
      const { id } = getPetById;
      const petId = await this.getPetByIdUseCase.getById(id);

      return petId;
    }
}