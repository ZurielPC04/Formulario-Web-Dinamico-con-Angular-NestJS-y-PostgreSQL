import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component {
  datos: Datos = {
    nombre: '',
    edad: 0,
    ciudad: '',
    genero: '',
    ocupacion: '',
    comentario: ''
  };

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  guardarYContinuar(): void {
    // Guardar datos de esta pantalla (nombre y edad)
    this.dataService.setDatos({
      nombre: this.datos.nombre,
      edad: this.datos.edad
    });

    // Navegar a pantalla 2
    this.router.navigate(['/screen2']);
  }
}
