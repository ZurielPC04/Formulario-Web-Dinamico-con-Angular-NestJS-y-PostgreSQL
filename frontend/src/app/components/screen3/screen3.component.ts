import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  // Campos del formulario
  ocupacion: string = '';
  comentario: string = '';

  // Estado del modal
  mostrarConfirmacion: boolean = false;

  // Datos recopilados previamente
  datosPrevios: Partial<Datos> = {};

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.datosPrevios = this.dataService.getDatos();
  }

  abrirConfirmacion(): void {
    this.mostrarConfirmacion = true;
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
  }

  mensajeExito: string = '';
  mensajeError: string = '';

  // Guardar datos de esta pantalla (ocupacion y comentario)
  confirmar(): void {
    this.dataService.setDatos({
      ocupacion: this.ocupacion,
      comentario: this.comentario
    });

    this.dataService.enviarDatos(this.dataService.getDatos()).subscribe({
      next: () => {
      this.mensajeExito = 'Datos enviados correctamente.';
      this.mensajeError = '';
      this.mostrarConfirmacion = false;
      },
      error: () => {
        this.mensajeError = 'Hubo un error al enviar los datos.';
        this.mensajeExito = '';
        this.mostrarConfirmacion = false;
      }
    });
  }
}

