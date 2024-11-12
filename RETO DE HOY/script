CREATE DATABASE dbGamarraMarket
DEFAULT CHARACTER SET utf8;

USE dbGamarraMarket;

CREATE TABLE CLIENTE (
    id int  NOT NULL auto_increment,
    tipo_documento char(3)  NOT NULL,
    numero_documento char(15)  NOT NULL,
    nombres varchar(60)  NOT NULL,
    apellidos varchar(90)  NOT NULL,
    email varchar(80)  NULL,
    celular char(9)  NULL,
    fecha_nacimiento date  NOT NULL,
    activo bool DEFAULT '1' NOT NULL,
    CONSTRAINT CLIENTE_pk PRIMARY KEY (id)
);

CREATE TABLE PRENDA (
    id int  NOT NULL auto_increment,
    descripcion varchar(90)  NOT NULL,
    marca varchar(60)  NOT NULL,
    cantidad int  NOT NULL,
    talla varchar(10)  NOT NULL,
    precio decimal(8,2)  NOT NULL,
    activo bool DEFAULT '1' NOT NULL,
    CONSTRAINT PRENDA_pk PRIMARY KEY (id)
);

CREATE TABLE VENDEDOR (
    id int  NOT NULL auto_increment,
    tipo_documento char(3)  NOT NULL,
    numero_documento char(15)  NOT NULL,
    nombres varchar(60)  NOT NULL,
    apellidos varchar(90)  NOT NULL,
    salario decimal(8,2)  NOT NULL,
    celular char(9)  NULL,
    email varchar(80)  NULL,
    activo bool DEFAULT '1' NOT NULL,
    CONSTRAINT VENDEDOR_pk PRIMARY KEY (id)
);

CREATE TABLE VENTA (
    id int  NOT NULL auto_increment,
    fecha_hora timestamp  NOT NULL,
    activo bool DEFAULT '1' NOT NULL,
    cliente_id int  NOT NULL,
    vendedor_id int  NOT NULL,
    CONSTRAINT VENTA_pk PRIMARY KEY (id)
);

CREATE TABLE VENTA_DETALLE (
   id int  NOT NULL auto_increment,
    cantidad int  NOT NULL,
    venta_id int  NOT NULL,
    prenda_id int  NOT NULL,
    CONSTRAINT VENTA_DETALLE_pk PRIMARY KEY (id)
);
SHOW COLUMNS IN VENTA_DETALLE;
SHOW TABLES;


ALTER TABLE VENTA ADD CONSTRAINT VENTA_CLIENTE FOREIGN KEY VENTA_CLIENTE (cliente_id)
    REFERENCES CLIENTE (id);

ALTER TABLE VENTA_DETALLE ADD CONSTRAINT VENTA_DETALLE_PRENDA FOREIGN KEY VENTA_DETALLE_PRENDA (prenda_id)
    REFERENCES PRENDA (id);

ALTER TABLE VENTA_DETALLE ADD CONSTRAINT VENTA_DETALLE_VENTA FOREIGN KEY VENTA_DETALLE_VENTA (venta_id)
    REFERENCES VENTA (id);

ALTER TABLE VENTA ADD CONSTRAINT VENTA_VENDEDOR FOREIGN KEY VENTA_VENDEDOR (vendedor_id)
    REFERENCES VENDEDOR (id);
/* Listar relaciones de tablas de la base de datos activa */
SELECT 
    i.constraint_name, k.table_name, k.column_name, 
    k.referenced_table_name, k.referenced_column_name
FROM 
    information_schema.TABLE_CONSTRAINTS i 
LEFT JOIN information_schema.KEY_COLUMN_USAGE k 
ON i.CONSTRAINT_NAME = k.CONSTRAINT_NAME 
WHERE i.CONSTRAINT_TYPE = 'FOREIGN KEY' 
AND i.TABLE_SCHEMA = DATABASE();
   
   
use dbGamarraMarket; 
   
INSERT INTO CLIENTE 
	(tipo_documento, numero_documento, nombres, apellidos, email, celular, fecha_nacimiento) 
VALUES
	('DNI', '77889955', 'Alberto', 'Solano Pariona', 'alberto.pariona@empresa.com', '998456103', STR_TO_DATE('1970-02-10', '%Y-%m-%d')),
	('DNI', '45781233', 'Alicia', 'García Campos', '', '', STR_TO_DATE('1980-03-20', '%Y-%m-%d')),
	('CNE', '315487922', 'Juana', 'Ávila Chumpitaz', 'juana.avila@gmail.com', '923568741', STR_TO_DATE('1986-06-06', '%Y-%m-%d')),
	('CNE', '122116633', 'Ana', 'Enríquez Flores', 'ana.enriquez@empresa.com', '', STR_TO_DATE('1970-02-10', '%Y-%m-%d')),
	('CNE', '088741589', 'Claudia', 'Perales Ortíz', 'claudia.perales@yahoo.com', '997845263', STR_TO_DATE('1981-07-25', '%Y-%m-%d')),
	('DNI', '45122587', 'Mario', 'Barrios Martínez', 'mario.barrios@outlook.com', '986525871', STR_TO_DATE('1987-10-10', '%Y-%m-%d')),
	('CNE', '175285564', 'Brunela', 'Tarazona Guerra', 'brunela.tarazona@gmail.com', '995236741', STR_TO_DATE('1990-06-06', '%Y-%m-%d')),
	('DNI', '47142536', 'Alejandro', 'Jimenez Huapaya', '', '941525365', STR_TO_DATE('1989-06-01', '%Y-%m-%d')),
	('CNE', '15352585', 'Claudia', 'Marquez Litano', 'claudia.marquez@gmail.com', '985814723', STR_TO_DATE('1991-10-01', '%Y-%m-%d')),
	('CNE', '46572587', 'Mario', 'Rodríguez Mayo', '', '912662587', STR_TO_DATE('1987-11-10', '%Y-%m-%d')),
	('CNE', '837952514', 'Luisa', 'Guerra Ibarra', 'luisa.guerra@yahoo.com', '974422136', STR_TO_DATE('1988-12-21', '%Y-%m-%d')),
	('DNI', '74142585', 'Pedro Al.', 'Candela Valenzuela', 'pedro.candela@gmail.com', '94148525', STR_TO_DATE('1995-06-30', '%Y-%m-%d')),
	('DNI', '53298147', 'Angel M.', 'Rojas Avila', 'angel.rojas@outlook.com', '', STR_TO_DATE('1975-03-02', '%Y-%m-%d')),
	('DNI', '11453265', 'Hilario F.', 'Avila Huapaya', '', '985514326', STR_TO_DATE('2000-05-02', '%Y-%m-%d')),
	('CNE', '757472186', 'Octavio', 'Marquez Osorio', 'octavio.marquez@yahoo.es', '966223141', STR_TO_DATE('2000-09-22', '%Y-%m-%d')),
	('CNE', '558693219', 'Manolo E.', 'Vasquez Saravia', 'manolo.vasquez@outlook.es', '966223141', STR_TO_DATE('2000-09-22', '%Y-%m-%d')),
	('DNI', '41552567', 'Genoveva', 'Ortíz Quispe', 'genoveva.ortiz@outlook.es', '92564137', STR_TO_DATE('2003-04-12', '%Y-%m-%d')),
	('DNI', '49985471', 'Oscar C.', 'Quiroz Zavala', '', '988223145', STR_TO_DATE('2004-10-12', '%Y-%m-%d')),
	('DNI', '44992217', 'Verónica', 'Romero Vargas', 'veronica.romero@yahoo.com', '', STR_TO_DATE('2002-08-25', '%Y-%m-%d')),
	('DNI', '00253641', 'Eliseo', 'Prada Ortíz', 'elseo.prada@yahoo.com', '', STR_TO_DATE('2004-09-15', '%Y-%m-%d'));

select * from CLIENTE;
   
   
INSERT INTO VENDEDOR
	(tipo_documento, numero_documento, nombres, apellidos, salario, celular, email)
VALUES
	('DNI', '85471236', 'Enrique', 'Pérez Manco', '1500.00', '96521873', 'enrique.perez@outlook.com'),
	('DNI', '47259136', 'Sofía', 'Ávila Solis', '1350.00', '', ''),
	('DNI', '61542280', 'Marcela', 'Napaico Cama', '1600.00', '965874357', 'marcela.napaico@gmail.com'),
	('CNE', '742536140', 'Carmelo', 'Rodríguez Chauca', '1550.00', '', 'carmelo.rodriguez@yahoo.com');


select * from VENDEDOR;


INSERT INTO PRENDA
	(descripcion, marca, cantidad, talla, precio)
VALUES
	('Pantalon Jeans', 'Levis', 60, 28, 65.80),
	('Camisa manga corta', 'Adams', 75, 16, 55.00),
	('Polo sport', 'Australia', 100, 16, 40.00),
	('Camisa manga larga', 'Newport', 150, 16, 42.50),
	('Pijama para caballero', 'Adams', 180, 28, 79.50),
	('Corbata', 'Maxwell', 85, 16, 14.50),
	('Pijama para dama', 'Adams', 170, 24, 55.50),
	('Pantalon Jeans', 'Australia', 200, 28, 68.50),
	('Camisa Sport', 'John Holden', 85, 16, 88.50),
	('Short Jeans', 'Pepe Jeans', 185, 28, 77.20);

    
select * from PRENDA;  


INSERT INTO VENTA
	(fecha_hora, cliente_id, vendedor_id)
VALUES
	(now(), 4, 1),
	(now(), 6, 3),
	(now(), 10, 1),
	(now(), 18, 4);
    
SELECT * FROM VENTA;


INSERT INTO VENTA_DETALLE
	(venta_id, prenda_id, cantidad)
VALUES
	(1, 6, 3),
	(1, 3, 5),
	(1, 2, 7),
	(2, 2, 3),
	(3, 7, 4),
	(3, 10, 6),
	(3, 2, 6),
	(3, 5, 7),
	(4, 2, 4),
	(4, 5, 3);
    
select * from VENTA_DETALLE;  
   
   
   
/* 9 actualizar el numero */
   
UPDATE CLIENTE
	SET celular = '922881101',
		email = 'mario.rodriguez@outlook.com'
	WHERE id = 10;

   
   
/* 10 el DNI del cliente */   
   
UPDATE CLIENTE
	SET celular = '977226604'
    WHERE id = 13;
   
   
/* 11  eliminar logicamente unos DNI */   
   
UPDATE CLIENTE
	SET activo = '0'
    WHERE id = 12;

UPDATE CLIENTE
	SET activo = '0'
    WHERE id = 14;
    
UPDATE CLIENTE
	SET activo = '0'
    WHERE id = 18;
    

   
/* 12 los clientes perdieron su numero de celular */   
   
UPDATE CLIENTE
	SET celular = ''
    WHERE id = 9;   
   
UPDATE CLIENTE
	SET celular = ''
    WHERE id = 13;
   
UPDATE CLIENTE
	SET celular = ''
    WHERE id = 17;   
   
   

/* 13 el cliente oscar sera reactivo e ingresar su numero de correo */ 
 
UPDATE CLIENTE
	SET email = 'oscar.quiroz@yahoo.es',
		activo = 1
    WHERE id = 18;    
   
   
  
  
/* 14 agergar los siquientes clientes */
  
INSERT INTO CLIENTE 
	(tipo_documento, numero_documento, nombres, apellidos, email, celular, fecha_nacimiento) 
VALUES
	('DNI', '88225463', 'Gustavo Tadeo', 'Quispe Solorzano', 'gustavo.quipe@gmail.com', '', str_to_date('2001-', '')),
	('DNI', '15753595', ''),
    ('DNI', '76314895', ''),
    ('DNI', '84725001', ''),
    ('DNI', '11228514', ''),
    ('DNI', '51436952', '');
