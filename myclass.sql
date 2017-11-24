create database db_myclass;
use db_myclass;

create table usuario (
	idUsuario int not null auto_increment primary key,
	nome varchar(60) not null,
    email varchar (60) not null,
    senha char(8)
);

create table sala (
	idSala int not null auto_increment primary key,
	apelido varchar(60) not null unique,
    faculdade varchar(70) not null,
    curso varchar(70) not null,
    ano char(4) not null,
    turno char(5) not null,
    periodo varchar(8) not null,
    senha char(8)
);

create table criaSala (
	idCriaSala int not null auto_increment Primary key,
    idUsuario int not null,
    idSala int not null,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
	FOREIGN KEY (idSala) REFERENCES sala(idSala)
);

create table evento (
	idEvento int not null auto_increment primary key,
    nomeEvento varchar(60) not null,
    data date not null,
    idSala int not null,
    FOREIGN KEY (idSala) REFERENCES sala(idSala)
);

create table criaEvento (
	idCriaEvento int not null auto_increment primary key,
    idUsuario int not null,
    idEvento int not null,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (idEvento) REFERENCES evento(idEvento)
);

create table material (
	idMaterial int not null auto_increment primary key,
    horarioPostagem time not null,
    nome char(60) not null,
    OBS varchar(600) not null,
    caminho char(100) not null
);

create table possuiMaterial (
	idPossuiMaterial int not null auto_increment primary key,
    idEvento int not null,
    idMaterial int not null,
    FOREIGN KEY (idEvento) REFERENCES evento(idEvento),
    FOREIGN KEY (idMaterial) REFERENCES material(idMaterial)
);