import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdatePetByIdDto{
    @IsUUID()
    @IsNotEmpty()
    id: string;
}