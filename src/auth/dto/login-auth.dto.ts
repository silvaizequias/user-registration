import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class LoginAuthDto {
  @ApiProperty({ description: 'E-mail de autenticação' })
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty({ description: 'Senha de autenticação' })
  @IsString()
  @MinLength(8, { message: 'A senha precisa conter no mínimo 8 caracteres' })
  @MaxLength(18, { message: 'A senha precisa conter no máximo 18 caracteres' })
  password: string
}
