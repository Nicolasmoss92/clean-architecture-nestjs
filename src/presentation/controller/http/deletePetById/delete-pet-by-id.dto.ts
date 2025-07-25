import { IsNotEmpty, IsUUID } from 'class-validator';
export class DeletePetByIdDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
