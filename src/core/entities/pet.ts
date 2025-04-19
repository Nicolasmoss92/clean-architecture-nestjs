import { Age } from "../valueObjects/age";
import { Entity } from "./entity";

export class Pet extends Entity<Pet> {
  public readonly id: string;
  public name: string;
  public species: string;
  public age: number;
  public ownerId: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(props: Partial<Pet>) {
    super(props);
  }

  protected validate(props: Partial<Pet>): void {
    const { age } = props;
    if (!props.name) {
      throw new Error("Pet must have a name.");
    }

    if (!props.species) {
      throw new Error("Pet must have a species.");
    }

    if (age) {
      this.age = new Age(age).getValue();
    }

    if (!props.ownerId) {
      throw new Error("Pet must have an ownerId.");
    }
  }
}
