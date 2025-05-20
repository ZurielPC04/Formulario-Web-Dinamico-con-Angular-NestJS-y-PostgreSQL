
# Restauración de Base de Datos PostgreSQL

Este documento explica cómo restaurar la base de datos del proyecto en PostgreSQL desde un archivo `.backup`, utilizando la CLI (línea de comandos).

---

## Ruta del archivo `.backup`
Asegúrate de tener tu archivo `.backup` en la siguiente ruta:

```
C:\Users\RzVel\OneDrive\Desktop\proyecto-completo\database\backup_base_datos.backup
```

---

## Requisitos

- PostgreSQL instalado
- Acceso a la terminal o consola `psql`

---

## Credenciales por defecto

- **Usuario**: `postgres`
- **Contraseña**: `12345678`

---

## Pasos para restaurar la base de datos

### 1. Abrir terminal PostgreSQL

En Windows, puedes abrir:

```
SQL Shell (psql)
```

O usar la terminal normal (cmd o PowerShell) si tienes `pg_restore` disponible.

### 2. Crear una base de datos vacía

```sql
CREATE DATABASE pagina_web_zuriel;
```

### 3. Restaurar el archivo `.backup` con `pg_restore`

```bash
pg_restore -U postgres -d pagina_web_zuriel "C:\Users\RzVel\OneDrive\Desktop\proyecto-completo\database\backup_base_datos.backup"
```

> Si pide contraseña, escríbela aunque no se vea (no se muestran caracteres). Luego presiona Enter.

---

## Verificar que se restauró correctamente

Desde `psql` puedes conectarte:

```bash
\c pagina_web_zuriel
\dt
```

Y deberías ver la tabla `datos_recabados`.

---

## Estructura sugerida del proyecto

```
proyecto-completo/
├── frontend/           → Proyecto Angular
├── backend/            → Proyecto NestJS
└── database/           → Archivos .sql o .backup
```

---

**Autor**: Zuriel  
**Propósito**: Proyecto completo con Frontend, Backend y BD.
