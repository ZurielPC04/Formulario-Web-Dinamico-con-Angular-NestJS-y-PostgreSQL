import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Genero {
  Masculino = 'masculino',
  Femenino = 'femenino',
  Otro = 'otro',
}

@Entity()
export class DatosRecabados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  ciudad: string;

  @Column({
    type: 'enum',
    enum: Genero,
  })
  genero: Genero;

  @Column()
  ocupacion: string;

  @Column('text')
  comentario: string;
}

