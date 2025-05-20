import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosRecabadosService } from './datos_recabados.service';
import { DatosRecabadosController } from './datos_recabados.controller';
import { DatosRecabados } from './entities/datos_recabados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosRecabados])], 
  controllers: [DatosRecabadosController],
  providers: [DatosRecabadosService],
})
export class DatosRecabadosModule {}
