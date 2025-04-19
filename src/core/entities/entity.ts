export abstract class Entity<T> {
  constructor(props: Partial<T>) {
    this.validate(props);
    Object.assign(this, props);
  }

  protected abstract validate(props: Partial<T>): void;
}
