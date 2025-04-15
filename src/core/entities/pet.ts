import { Entity } from './entity';

export class Pet extends Entity<Pet> {
  public readonly id: string;

  public name: string;

  public created_at: Date;

  public updated_at: Date;

  constructor(props: Partial<Pet>) {
    super(props);

    const { created_at, updated_at } = props;

    if (created_at) {
      this.created_at = new Date(created_at);
    }

    if (updated_at) {
      this.updated_at = new Date(updated_at);
    }
  }

  protected validate(props: Partial<Pet>): void {
  }
}
