import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsOptional } from 'class-validator'

export class RemoveUserDto {
  @ApiPropertyOptional({ default: false, description: 'Remoção definitiva' })
  @IsBoolean()
  @IsOptional()
  definitely: boolean
}
