import { Controller, Post, Body, Get, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { DatosRecabadosService } from './datos_recabados.service';
import { DatosRecabados } from './entities/datos_recabados.entity';
import { CreateDatosRecabadoDto } from './dto/create-datos_recabados.dto';
import { UpdateDatosRecabadoDto } from './dto/update-datos_recabados.dto';

@Controller('datos')
export class DatosRecabadosController {
  constructor(private readonly datosService: DatosRecabadosService) {}

  @Post()
  async create(@Body() datos: CreateDatosRecabadoDto): Promise<DatosRecabados> {
    return this.datosService.create(datos);
  }

  @Get()
  async findAll(): Promise<DatosRecabados[]> {
    return this.datosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DatosRecabados> {
    const resultado = await this.datosService.findOne(id);
    if (!resultado) throw new NotFoundException(`No se encontró el registro con ID ${id}`);
    return resultado;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateDatosRecabadoDto,
  ): Promise<DatosRecabados> {
    const actualizado = await this.datosService.update(id, updateDto);
    if (!actualizado) throw new NotFoundException(`No se pudo actualizar el registro con ID ${id}`);
    return actualizado;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const existente = await this.datosService.findOne(id);
    if (!existente) throw new NotFoundException(`No se encontró el registro con ID ${id}`);
    return this.datosService.remove(id);
  }
}
