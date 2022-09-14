import * as bcrypt from 'bcrypt';

export class CreateUserDto {
  constructor(
    private _props: {
      username: string;
      document: string;
      password: string;
    }
  ) {}

  get password(): string {
    return bcrypt.hashSync(this._props.password, 10);
  }

  get props(): { username: string; document: string } {
    return {
      username: this._props.username,
      document: this._props.document,
    };
  }
}
