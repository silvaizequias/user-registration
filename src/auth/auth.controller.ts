import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginAuthDto } from './dto/login-auth.dto'
import { ResetPasswordAuthDto } from './dto/reset-password-auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto)
  }

  @Post()
  resetPassword(@Body() resetPasswordAuthDto: ResetPasswordAuthDto) {
    return this.authService.resetPassword(resetPasswordAuthDto)
  }
}
