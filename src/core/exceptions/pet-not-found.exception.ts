import { NotFoundException } from '@nestjs/common';

export class PetNotFoundException extends NotFoundException {
  constructor() {
    super(`Pet not found.`);
  }
}
