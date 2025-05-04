import { applyDecorators } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from 'class-validator';

export function ApiPetCreate() {
  return applyDecorators(
    ApiTags('pets'), 
    ApiOperation({ summary: 'Cria um novo pet' }),
    ApiResponse({ status: 204 }),  
  );
}

export class CreatePetDto {
    @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
    @IsUUID()
    @IsNotEmpty()
    id: string;
  
    @ApiProperty({ example: 'Rex' })
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({ example: 'Dog' })
    @IsString()
    @IsNotEmpty()
    species: string;
  
    @ApiProperty({ example: 5, minimum: 0, maximum: 20 })
    @IsInt()
    @Min(0)
    @Max(20)
    age: number;
  
    @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440111' })
    @IsUUID()
    ownerId: string;
  }