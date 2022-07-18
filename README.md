# Project ReactNode Challenge

Nota: Sólo este archivo estará en español para su mayor entendimiento.

## Uso

- descarga, instala y arranca docker desktop: https://www.docker.com/get-started/
- link: http://localhost/
- prueba la aplicación con los siguientes comandos:

      iniciar app - `docker-compose up -d app`

      crear base de datos - `docker exec --user=node reactnode_server_1 bash -c "npm run migrate:latest"`

      detener app - `docker-compose down`

      destruir app - `docker-compose down -v`

## Requerimientos

#### Descripción

ok - El trabajo consiste en crear una pequeña aplicación en react, con Redux, que maneje Posts.
IMPORTANTE: Solo se debe llamar al endpoint que entrega la lista completa de posts una sola vez por cada vez que se cargue la vista.

#### Ejemplo Visual

![visual sample](/readme.png)

#### Los Posts deben tener

ok - Nombre
ok - Descrpición

#### Buenas prácticas

ok - JSON camel-case
ok - JS camel-case

#### Funcionalidades aplicación web hecha con React y Redux

ok - Insertar posts
ok - Eliminar posts
ok - Listar posts
ok - Filtrar posts por nombre localmente

#### Estructura

ok - Formulario
ok - Filtro
ok - Lista

#### Backend (API JSON) en Node.js

ok - Crear posts: Deberá retornar el post creado
ok - Eliminar posts: Deberá retornar el post eliminado
ok - Obtener lista de posts: Deberá retornar todos los posts
ok - BD en postgreSQL
