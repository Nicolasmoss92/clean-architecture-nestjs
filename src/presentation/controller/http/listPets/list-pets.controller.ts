import { Controller, Get, HttpCode, Inject } from "@nestjs/common";
import { ListPetsResponse } from "./list-pets.response";
import { IListPetsUseCase } from "src/core/useCases/listPets/list-pets.interface";

@Controller('v1')
export class ListPetsController {
  constructor(
    @Inject('ListPetsUseCase') private readonly listPetsUseCase: IListPetsUseCase,
  ) { }

  @Get('/pets')
  @HttpCode(200)
  async handle(): Promise<ListPetsResponse[]> {
    return await this.listPetsUseCase.list();
  }
}