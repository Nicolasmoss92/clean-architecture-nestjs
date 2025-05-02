import { Body, Controller, Delete, HttpCode, Inject } from "@nestjs/common";
import { DeletePetByIdDto } from "./delete-pet-by-id.dto";
import { DeletePetByIdUseCase } from "src/core/useCases/deletePetById/delete-pet-by-id.usecase";

@Controller()
export class DeletePetController {
    constructor(
        @Inject('DeletePetByIdUseCase') private deletePetByIdUseCase: DeletePetByIdUseCase,
    ) { }

    @Delete()
    @HttpCode(204)
    async handle(@Body() deletePetById: DeletePetByIdDto): Promise<any>{
        return;
    }
}