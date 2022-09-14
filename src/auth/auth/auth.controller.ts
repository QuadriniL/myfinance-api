import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: { document: string; password: string }) {
    return {
      token: this.authService.login(body.document, body.password),
    };
  }
}
