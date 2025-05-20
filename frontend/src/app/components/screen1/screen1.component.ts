import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component {

  // Campos del formulario
  datos: Datos = {
    nombre: '',
    edad: 0,
    ciudad: '',
    genero: '',
    ocupacion: '',
    comentario: ''
  };

  // Estado del modal
  mostrarConfirmacion: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  // Muestra el modal de confirmación
  abrirConfirmacion(): void {
    if (this.datos.edad < 0) return; // Protección doble por si bypass
    this.mostrarConfirmacion = true;
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion = false;
  }

  // Acción al confirmar en el modal y guardar datos de esta pantalla (nombre y edad)
  confirmar(): void {
    this.dataService.setDatos({
      nombre: this.datos.nombre,
      edad: this.datos.edad
    });
    this.mostrarConfirmacion = false;
    this.router.navigate(['/screen2']);
  }

}

