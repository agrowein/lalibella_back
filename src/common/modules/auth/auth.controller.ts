import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data.email, data.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() data: RegisterDto) {
    return await this.authService.register(data);
  }
}
