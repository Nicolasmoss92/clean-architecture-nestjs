import { ValueObject } from './base-value-object';

export class Age extends ValueObject {
  constructor(protected value: number) {
    super();
    this.validate();
  }

  getValue(): number {
    return this.value;
  }

  protected validate() {
    if (this.value < 0 || this.value > 20) {
      throw new Error('Pet age must be between 0 and 20.');
    }
  }
}
