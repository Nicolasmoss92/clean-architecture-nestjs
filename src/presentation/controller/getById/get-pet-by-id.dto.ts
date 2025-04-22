import { IsNotEmpty, IsUUID } from "class-validator";
import uuidv4 from "uuidv4";

export class GetPetByIdDto{
    @IsUUID()
    @IsNotEmpty()
    id: string;
}