import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string | undefined;

  public name: string;
  public email: string;
  public password: string;
  
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    /**
     * substitui isso:
     * this.email = props.email;
     */

    this.email = props.email;
    this.name = props.name;
    this.password = props.password;

    if (!id) {
      this.id = uuid();
    }
  }

}