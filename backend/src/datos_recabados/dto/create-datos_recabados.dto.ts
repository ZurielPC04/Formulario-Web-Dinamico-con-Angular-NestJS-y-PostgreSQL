import { IsEnum, IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';
import { Genero } from '../entities/datos_recabados.entity';

export class CreateDatosRecabadoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  @Min(0)
  @Max(150)
  edad: number;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsEnum(Genero)
  genero: Genero;

  @IsString()
  @IsNotEmpty()
  ocupacion: string;

  @IsString()
  @IsNotEmpty()
  comentario: string;
}

