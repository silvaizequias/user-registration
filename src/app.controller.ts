import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  homePage(): string {
    return 'Home Page'
  }

  @Get('login')
  loginPage(): string {
    return 'Login Page'
  }

  @Get('/signup')
  signup(): string {
    return 'Register Page'
  }

  @Get('reset-password')
  resetPassword(): string {
    return 'Reset Password Page'
  }
}
