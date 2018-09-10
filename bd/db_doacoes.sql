
CREATE TABLE Campanha_Doacao
(
	Id_Doacao            INTEGER NOT NULL ,
	Titulo               VARCHAR(60) NOT NULL ,
	TipoAnuncio          SMALLINT NOT NULL ,
	Descricao            VARCHAR(60) NOT NULL ,
	Status               SMALLINT NOT NULL ,
	Data_Inicio          DATE NOT NULL ,
	Data_Final           DATE NOT NULL ,
	Telefone             VARCHAR(12) NOT NULL ,
	Celular              VARCHAR(12) NULL ,
	Id_Pessoa            INTEGER NOT NULL ,
	id_Recebedor         INTEGER NOT NULL ,
	Id_Categoria         SMALLINT NOT NULL 
);



ALTER TABLE Campanha_Doacao
	ADD  PRIMARY KEY (Id_Doacao);



CREATE TABLE Categoria
(
	Id_Categoria         SMALLINT NOT NULL ,
	Nome                 VARCHAR(60) NOT NULL 
);



ALTER TABLE Categoria
	ADD  PRIMARY KEY (Id_Categoria);



CREATE TABLE Cidade
(
	Id_Cidade            SMALLINT NOT NULL ,
	Nome                 VARCHAR(80) NOT NULL ,
	Id_Estado            SMALLINT NOT NULL 
);



ALTER TABLE Cidade
	ADD  PRIMARY KEY (Id_Cidade);



CREATE TABLE Endereco
(
	Id_Endereco          SMALLINT NOT NULL ,
	Rua                  VARCHAR(60) NOT NULL ,
	Numero               VARCHAR(10) NOT NULL ,
	Bairro               VARCHAR(60) NOT NULL ,
	CEP                  VARCHAR(8) NOT NULL ,
	Id_Cidade            SMALLINT NOT NULL 
);



ALTER TABLE Endereco
	ADD  PRIMARY KEY (Id_Endereco);



CREATE TABLE Endereco_Campanha
(
	Id_CampanhaEndereco  INTEGER NOT NULL ,
	Id_Doacao            INTEGER NOT NULL ,
	Id_Endereco          SMALLINT NOT NULL 
);



ALTER TABLE Endereco_Campanha
	ADD  PRIMARY KEY (Id_CampanhaEndereco);



CREATE TABLE Estado
(
	Id_Estado            SMALLINT NOT NULL ,
	Nome                 VARCHAR(60) NOT NULL ,
	Sigla                CHAR(2) NOT NULL 
);



ALTER TABLE Estado
	ADD  PRIMARY KEY (Id_Estado);



CREATE TABLE Fotos
(
	Id_Fotos             INTEGER NOT NULL ,
	Id_Doacao            INTEGER NOT NULL ,
	CaminhoFoto          VARCHAR(666) NOT NULL 
);



ALTER TABLE Fotos
	ADD  PRIMARY KEY (Id_Fotos);



CREATE TABLE Mensagem
(
	Id_Mensagem          INTEGER NOT NULL ,
	Id_Doacao            INTEGER NOT NULL ,
	Id_Pessoa            INTEGER NOT NULL ,
	Mensagem             VARCHAR(666) NOT NULL ,
	DataHora             TIMESTAMP NOT NULL ,
	Anonimo              SMALLINT NOT NULL 
);



ALTER TABLE Mensagem
	ADD  PRIMARY KEY (Id_Mensagem);



CREATE TABLE Pessoa_Institucao
(
	Id_Pessoa            INTEGER NOT NULL ,
	CPF_CNPJ             VARCHAR(14) NOT NULL ,
	Nome                 VARCHAR(60) NOT NULL ,
	Email                VARCHAR(60) NOT NULL ,
	Senha                VARCHAR(60) NOT NULL ,
	Apelido              VARCHAR(60) NOT NULL ,
	Telefone             VARCHAR(12) NOT NULL ,
	Celular              VARCHAR(12) NULL ,
	Foto                 VARCHAR(666) NULL ,
	Status               SMALLINT NOT NULL ,
	Id_Endereco          SMALLINT NOT NULL 
);



ALTER TABLE Pessoa_Institucao
	ADD  PRIMARY KEY (Id_Pessoa);



ALTER TABLE Campanha_Doacao
	ADD FOREIGN KEY Fk_Pessoa_Campanha (Id_Pessoa) REFERENCES Pessoa_Institucao (Id_Pessoa) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Campanha_Doacao
	ADD FOREIGN KEY Fk_Categoria_Campanha (Id_Categoria) REFERENCES Categoria (Id_Categoria) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Campanha_Doacao
	ADD FOREIGN KEY Fk_Recebedor_Campanha (id_Recebedor) REFERENCES Pessoa_Institucao (Id_Pessoa) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Cidade
	ADD FOREIGN KEY Fk_Estado_Cidade (Id_Estado) REFERENCES Estado (Id_Estado) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Endereco
	ADD FOREIGN KEY Fk_Cidade_Endereco (Id_Cidade) REFERENCES Cidade (Id_Cidade) ON DELETE RESTRICT ON UPDATE RESTRICT;




ALTER TABLE Endereco_Campanha
	ADD FOREIGN KEY Fk_Campanha_Endereco_Campanha (Id_Doacao) REFERENCES Campanha_Doacao (Id_Doacao) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Endereco_Campanha
	ADD FOREIGN KEY Fk_Endereco_Endereco_Campanha (Id_Endereco) REFERENCES Endereco (Id_Endereco) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Fotos
	ADD FOREIGN KEY Fk_Campanha_Fotos (Id_Doacao) REFERENCES Campanha_Doacao (Id_Doacao) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Mensagem
	ADD FOREIGN KEY Fk_Campanha_Mensagem (Id_Doacao) REFERENCES Campanha_Doacao (Id_Doacao) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Mensagem
	ADD FOREIGN KEY Fk_Pessoa_Mensagem (Id_Pessoa) REFERENCES Pessoa_Institucao (Id_Pessoa) ON DELETE RESTRICT ON UPDATE RESTRICT;



ALTER TABLE Pessoa_Institucao
	ADD FOREIGN KEY Fk_Endereco_Pessoa (Id_Endereco) REFERENCES Endereco (Id_Endereco) ON DELETE RESTRICT ON UPDATE RESTRICT;

