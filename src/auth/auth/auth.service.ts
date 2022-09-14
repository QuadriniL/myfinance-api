import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const users = [
  {
    id: 1,
    username: 'john',
    document: '123456789',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', // 123456
  },
  {
    id: 2,
    username: 'jane',
    document: '987654321',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', // 123456
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    const user = this.validateCredentials(username, password);

    if (user) {
      const payload = { username: user.username, sub: user.id };
      return this.jwtService.sign(payload);
    }

    return null;
  }

  validateCredentials(document: string, password: string) {
    const user = users.find(
      (user) =>
        user.document === document &&
        bcrypt.compareSync(password, user.password)
    );

    if (user) {
      return user;
    }
    return null;
  }
}
