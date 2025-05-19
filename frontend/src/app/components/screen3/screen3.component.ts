import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {
  ocupacion: string = '';
  comentario: string = '';

  datosPrevios: Partial<Datos> = {};

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private dataService: DataService,
    //private router: Router
  ) {}

  ngOnInit(): void {
    this.datosPrevios = this.dataService.getDatos();
  }

  enviar(): void {
    // Guardar datos de esta pantalla (ocupacion y comentario)
    this.dataService.setDatos({
      ocupacion: this.ocupacion,
      comentario: this.comentario
    });

    const datosFinales: Datos = this.dataService.getDatos();

    this.dataService.enviarDatos(datosFinales).subscribe({
      next: (res) => {
        this.mensajeExito = '¡Datos enviados con éxito!';
        this.mensajeError = '';
        console.log('Enviado al backend:', res);
      },
      error: (err) => {
        this.mensajeError = 'Error al enviar los datos.';
        this.mensajeExito = '';
        console.error(err);
      }
    });
  }
}
