# Formulario Web Dinámico con Angular, NestJS y PostgreSQL 🚀

Este proyecto es una aplicación web full-stack que permite recolectar, visualizar y almacenar datos de usuarios mediante formularios interactivos. Utiliza **Angular** para el frontend, **NestJS** para la lógica del backend y **PostgreSQL** como base de datos relacional.

---

## Características

- Diseño modular y atractivo (Bootstrap + CSS con metodología BEM)
- Arquitectura Angular con múltiples componentes y servicios
- API REST desarrollada con NestJS
- Conexión a base de datos PostgreSQL con validaciones y persistencia
- Uso de directivas Angular como `*ngIf`, `[(ngModel)]`, y control de rutas
- Confirmaciones de envío con modales animados
- Código limpio, reutilizable y documentado

---

## 🛠Tecnologías utilizadas

| Frontend     | Backend     | Base de datos |
|--------------|-------------|----------------|
| Angular      | NestJS      | PostgreSQL     |
| TypeScript   | TypeORM     | pgAdmin        |
| Bootstrap 5  | ExpressJS   | SQL            |

---

## Cómo ejecutar el proyecto localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Inicia el backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
```

### 3. Inicia el frontend (Angular)

```bash
cd ../frontend
npm install
ng serve
```

### 4. Restaura la base de datos (si es necesario)

```bash
cd ../database
psql -U postgres -d tu_base_de_datos -f base_de_datos.sql
```

---

## Estructura del proyecto

```
proyecto-completo/
│
├── backend/         → API NestJS (controladores, servicios, entidades)
├── frontend/        → Aplicación Angular (pantallas, estilos, servicios)
└── database/        → Scripts SQL + instrucciones de restauración
```

---

## Autor

**Zuriel Palafox**  
[GitHub](https://github.com/ZurielPC04) 
