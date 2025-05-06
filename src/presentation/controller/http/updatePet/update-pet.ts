import { Body, Controller, HttpCode, Inject, Put } from "@nestjs/common";
import { UpdatePetDTO } from "./update-pet.dto";
import { IUpdatePetUseCase } from "src/core/useCases/updatePet/update-pet-by-id.interface";

@Controller('v1')
export class UpdatePetByIdController {
    constructor(
      @Inject('UpdatePetByIdUseCase') private readonly updatePetByIdUseCase: IUpdatePetUseCase,
    ) {}
  
    @Put('/update/pet/:id')
    @HttpCode(204)
    async handle(@Body() body: UpdatePetDTO): Promise<void> {

      await this.updatePetByIdUseCase.update(body);
    }
}