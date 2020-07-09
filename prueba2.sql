create table concepto(
	id int AUTO_INCREMENT,
	descripcion varchar(255),
	tipo int,
	CONSTRAINT concepto_pk PRIMARY KEY (id)
);

create table procedencia(
	id int AUTO_INCREMENT,
	descripcion varchar(255),
	CONSTRAINT procedencia_pk PRIMARY KEY (id)
);

create table cantidad(
	id int AUTO_INCREMENT,
	id_concepto int,
	id_procedencia int,
	cantidad double,
	CONSTRAINT procedencia_pk PRIMARY KEY (id)
);

/*
NOTA: Se creara automaticamente al ejecutar la aplicacion

create table concepto_procedencia(
	id int AUTO_INCREMENT,
	idConcepto int,
	idProcedencia int,
	CONSTRAINT concepto_procedencia_pk PRIMARY KEY (id),
	CONSTRAINT concepto_fk FOREIGN KEY(idConcepto) REFERENCES concepto(id),
	CONSTRAINT procedencia_fk FOREIGN KEY(idProcedencia) REFERENCES procedencia(id)
);*/

INSERT INTO concepto(descripcion, tipo)
VALUES
("REVENUE", 0),
("IMPRESIONS", 1),
("VISITS", 2);

