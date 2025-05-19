import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Datos } from '../../services/data.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
  ciudad: string = '';
  genero: string = '';

  datosPrevios: Partial<Datos> = {};

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.datosPrevios = this.dataService.getDatos();
  }

  guardarYContinuar(): void {
    // Guardar datos de esta pantalla (ciudad y genero)
    this.dataService.setDatos({
      ciudad: this.ciudad,
      genero: this.genero
    });

    // Navegar a pantalla 3
    this.router.navigate(['/screen3']);
  }
}
