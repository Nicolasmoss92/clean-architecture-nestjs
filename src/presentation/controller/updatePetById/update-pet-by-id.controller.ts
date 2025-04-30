import { Body, Controller, HttpCode, Inject, Put } from "@nestjs/common";
import { UpdatePetByIdDto } from "./update-pet-by-id.dto";
import { UpdatePetByIdUseCase } from "src/core/useCases/updatePetById/update-pet-by-id.usecase";

@Controller('petServiceUpdateById')
export class UpdatePetByIdController {
    constructor(
      @Inject('UpdatePetByIdUseCase') private readonly updatePetByIdUseCase: UpdatePetByIdUseCase,
    ) {}
  
    @Put()
    @HttpCode(204)
    async handle(@Body() updatePetById: UpdatePetByIdDto): Promise<void> {
      const { id } = updatePetById;
      await this.updatePetByIdUseCase.updateById(id);
    }
}