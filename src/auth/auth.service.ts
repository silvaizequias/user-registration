import { Injectable } from '@nestjs/common'
import { LoginAuthDto } from './dto/login-auth.dto'
import { ResetPasswordAuthDto } from './dto/reset-password-auth.dto'

@Injectable()
export class AuthService {
  async login(loginAuthDto: LoginAuthDto) {
    return loginAuthDto
  }

  async resetPassword(resetPasswordAuthDto: ResetPasswordAuthDto) {
    return resetPasswordAuthDto
  }
}
