import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class ResetPasswordAuthDto {
  @ApiProperty({ description: 'E-mail de recuperação de senha' })
  @IsString()
  @IsEmail()
  email: string
}
