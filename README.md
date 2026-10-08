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

