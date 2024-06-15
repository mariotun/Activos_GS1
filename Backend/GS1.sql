create database bd_gs1;

use bd_gs1;

CREATE TABLE activos (
    id_activo INT AUTO_INCREMENT PRIMARY KEY,
    codigo_activo BIGINT NOT NULL UNIQUE,
    descripcion VARCHAR(255) NOT NULL,
    fecha_alta DATE NOT NULL,
    estatus VARCHAR(50) NOT NULL,
    origen VARCHAR(100)
);

select *from activos a ;