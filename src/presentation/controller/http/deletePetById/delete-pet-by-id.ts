import { Controller, Delete, HttpCode, Inject, Param } from '@nestjs/common';
import { DeletePetByIdDto } from './delete-pet-by-id.dto';
import { IDeletePetByIdUseCase } from '../../../../core/useCases/deletePetById/delete-pet-by-id.interface';

@Controller('v1')
export class DeletePetController {
  constructor(
    @Inject('DeletePetByIdUseCase') private deletePetByIdUseCase: IDeletePetByIdUseCase,
  ) {}

  @Delete('/delete/pet/:id')
  @HttpCode(204)
  async handle(@Param() deleteById: DeletePetByIdDto): Promise<any> {
    const { id } = deleteById;

    return await this.deletePetByIdUseCase.deleteById(id);
  }
}
