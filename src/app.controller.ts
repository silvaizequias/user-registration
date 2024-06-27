import { Controller, Get, Render } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  homePage() {
    return { title: 'Home Page' }
  }

  @Get('login')
  @Render('login')
  loginPage() {
    return { title: 'Login Page' }
  }

  @Get('register')
  @Render('register')
  signup() {
    return { title: 'Register Page' }
  }

  @Get('reset-password')
  @Render('reset-password')
  resetPassword() {
    return { title: 'Reset Password Page' }
  }
}
