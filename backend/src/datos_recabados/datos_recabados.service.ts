// src/datos_recabados/datos_recabados.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DatosRecabados } from './entities/datos_recabados.entity';
import { CreateDatosRecabadoDto } from './dto/create-datos_recabados.dto';
import { UpdateDatosRecabadoDto } from './dto/update-datos_recabados.dto';

export class DatosRecabadosService {
  constructor(
    @InjectRepository(DatosRecabados)
    private readonly repo: Repository<DatosRecabados>,
  ) {}

  async create(createDto: CreateDatosRecabadoDto): Promise<DatosRecabados> {
    const nuevo = this.repo.create(createDto);
    return this.repo.save(nuevo);
  }

  async findAll(): Promise<DatosRecabados[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<DatosRecabados | null> {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateDatosRecabadoDto): Promise<DatosRecabados> {
    await this.repo.update(id, updateDto);
    const actualizado = await this.repo.findOneBy({ id });
    if (!actualizado) {
      throw new Error('Registro no encontrado');
    }
    return actualizado;
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
