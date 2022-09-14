import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string) {
    const user = await this.validateCredentials(username, password);

    if (user) {
      const payload = { username: user.username, sub: user.id };
      return this.jwtService.sign(payload);
    }

    return null;
  }

  async validateCredentials(document: string, password: string) {
    const user = await User.findOne({ where: { document } });

    if (user && bcrypt.compareSync(password, user.password)) return user;

    return null;
  }
}
