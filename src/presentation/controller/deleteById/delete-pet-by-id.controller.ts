import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { DeletePetByIdDto } from "./get-pet-by-id.dto";

@Controller()
export class DeletePetController {
    constructor(
        @Inject('DeletePetByIdUseCase') private deletPetById: DeletePetByIdUsecase,
    ) { }

    @Delete()
    @HttpCode(204)
    async handle(@Body() deletePetById: DeletePetByIdDto): Promise<any>{
        return;
    }
}