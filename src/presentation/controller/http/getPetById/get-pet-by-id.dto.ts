import { IsNotEmpty, IsUUID } from 'class-validator';
export class GetPetByIdDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
