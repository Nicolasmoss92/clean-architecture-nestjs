import { IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from "class-validator";

export class CreatePetDto {
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    species: string;

    @IsInt()
    @Min(0)
    @Max(20)
    age: number;

    @IsUUID()
    ownerId: string;
}
