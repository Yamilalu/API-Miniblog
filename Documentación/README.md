\# API MiniBlog



API REST desarrollada para el proyecto integrador de DevSpark.



\## Tecnologías



\- Node.js

\- Express

\- PostgreSQL

\- Jest

\- Supertest



\## Funcionalidades



La API permite realizar operaciones CRUD sobre:



\- Autores

\- Posts



\### Autores



\- GET `/authors`

\- GET `/authors/:id`

\- POST `/authors`

\- PUT `/authors/:id`

\- DELETE `/authors/:id`



\### Posts



\- GET `/posts`

\- GET `/posts/:id`

\- GET `/posts/author/:authorId`

\- POST `/posts`

\- PUT `/posts/:id`

\- DELETE `/posts/:id`



\## Validaciones



\- El nombre y email del autor son obligatorios.

\- El email del autor debe ser único.

\- El título, contenido y autor de un post son obligatorios.

\- Se valida la existencia del autor al crear o actualizar un post.

\- Se utilizan códigos HTTP adecuados para cada operación.



\## Base de datos



El proyecto utiliza PostgreSQL.



La estructura y los datos iniciales se encuentran en:



\- `sql/setup.sql`

\- `sql/seed.sql`



\## Configuración



1\. Instalar Node.js y PostgreSQL.

2\. Crear una base de datos llamada `miniblog`.

3\. Ejecutar `sql/setup.sql`.

4\. Ejecutar `sql/seed.sql`.

5\. Crear un archivo `.env` con las variables necesarias.



Ejemplo:



```env

DB\_HOST=localhost

DB\_PORT=5432

DB\_NAME=miniblog

DB\_USER=postgres

DB\_PASSWORD=tu\_contraseña

PORT=3000

## Deployment en Railway

Para desplegar la API en Railway:

1. Crear un nuevo proyecto en Railway.
2. Conectar el repositorio de GitHub.
3. Seleccionar el proyecto `API-Miniblog`.
4. Configurar las variables de entorno necesarias:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_NAME`
   - `DB_USER`
   - `DB_PASSWORD`
   - `PORT`
5. Configurar la conexión con PostgreSQL.
6. Ejecutar los scripts `sql/setup.sql` y `sql/seed.sql` sobre la base de datos.
7. Railway proporciona una URL interna para la comunicación entre servicios.
8. Generar una URL pública para acceder a la API desde Internet.
9. Verificar el funcionamiento de los endpoints mediante la URL pública.

### Variables de entorno

Las credenciales y datos de conexión se configuran mediante variables de entorno y no se incluyen en el repositorio.

El archivo `.env.example` contiene un ejemplo de las variables necesarias.

### URLs
**Internal URL:** proporcionada por Railway para la comunicación interna entre servicios.

**Public URL:** https://api-miniblog-production-a269.up.railway.app/

La API se encuentra desplegada y accesible mediante la URL pública.
