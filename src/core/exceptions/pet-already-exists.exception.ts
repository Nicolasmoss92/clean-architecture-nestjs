import { ConflictException } from '@nestjs/common';

export class PetAlreadyExistsException extends ConflictException {
  constructor() {
    super(`Pet already exists.`);
  }
}
