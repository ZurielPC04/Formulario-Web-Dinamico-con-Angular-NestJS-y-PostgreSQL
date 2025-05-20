import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosRecabadoDto } from './create-datos_recabados.dto';
import { IsEnum } from 'class-validator';
import { Genero } from '../entities/datos_recabados.entity';

export class UpdateDatosRecabadoDto extends PartialType(CreateDatosRecabadoDto) {
  @IsEnum(Genero)
  genero?: Genero;
}
