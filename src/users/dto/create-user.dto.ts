import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: 'Nome completo' })
  @IsString()
  @MinLength(5, { message: 'Precisa ser o nome completo' })
  @MaxLength(50, { message: 'O nome não pode ter mais de 50 caracteres' })
  name: string

  @ApiProperty({ description: 'E-mail válido' })
  @IsString()
  @IsEmail()
  email: string

  @ApiPropertyOptional({ description: 'Data de verificação do e-mail' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  emailVerified: Date

  @ApiProperty({ description: 'Senha criptografada' })
  @IsString()
  passHash: string

  @ApiProperty({ description: 'CEP com 8 caracteres' })
  @IsString()
  @MaxLength(8, { message: 'Precisa ter 8 caracteres numéricos' })
  @MinLength(8, { message: 'Precisa ter 8 caracteres numéricos' })
  zipCode: string

  @ApiProperty({ description: 'Logradouro' })
  @IsString()
  street: string

  @ApiPropertyOptional({
    description: 'Complemento - número ou ponto de referênia',
  })
  @IsString()
  @IsOptional()
  complement: string

  @ApiProperty({ description: 'Bairro' })
  @IsString()
  district: string

  @ApiProperty({ description: 'Cidade' })
  @IsString()
  city: string

  @ApiProperty({ description: 'Estado' })
  @IsString()
  state: string
}
