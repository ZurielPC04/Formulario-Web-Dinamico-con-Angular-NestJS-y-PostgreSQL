import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Datos {
  nombre: string;
  edad: number;
  ciudad: string;
  genero: string;
  ocupacion: string;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private datos: Datos = {
    nombre: '',
    edad: 0,
    ciudad: '',
    genero: '',
    ocupacion: '',
    comentario: ''
  };

  private apiUrl = 'http://localhost:3000/datos'; // Endpoint del backend

  constructor(private http: HttpClient) {}

  // Guardar una parte de los datos desde cada pantalla
  setDatos(parte: Partial<Datos>): void {
    this.datos = { ...this.datos, ...parte };
  }

  // Obtener todos los datos actuales
  getDatos(): Datos {
    return this.datos;
  }

  // Enviar al backend
  enviarDatos(datos: Datos): Observable<Datos> {
    return this.http.post<Datos>(this.apiUrl, datos);
  }
}
