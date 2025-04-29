import { Body, Controller, HttpCode, Inject, Injectable, Post } from "@nestjs/common";

@Controller('petServiceUpdateById')
export class UpdatePetByIdController {
    constructor(
      @Inject('UpdatePetByIdUseCase') private readonly updatePetByIdUseCase: UpdatePetByIdUseCase,
    ) {}
  
    @Update()
    @HttpCode(200)
    async handle(@Body() updatePetById: UpdatePetByIdDto): Promise<UpdatePetByIdResponse> {
      const { id } = updatePetById;
      const petId = await this.updatePetByIdUseCase.getById(id);

      return petId;
    }
}