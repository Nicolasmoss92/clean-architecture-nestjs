export abstract class ValueObject {
  protected abstract value: any;

  protected abstract getValue(): any;

  protected abstract validate(): void;
}
