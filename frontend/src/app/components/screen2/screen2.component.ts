import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  // Campos del formulario
  ciudad: string = '';
  genero: string = '';

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

  // Muestra el modal de confirmación
  abrirConfirmacion(): void {
    this.mostrarConfirmacion = true;
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
  }

  // Acción al confirmar en el modal y guardar datos de esta pantalla (ciudad y genero)
  confirmar(): void {
    this.dataService.setDatos({
      ciudad: this.ciudad,
      genero: this.genero
    });
    this.mostrarConfirmacion = false;
    this.router.navigate(['/screen3']);
  }

}
