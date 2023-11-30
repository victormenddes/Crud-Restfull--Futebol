
CREATE TABLE public."time" (
	id serial NOT NULL,
	nome varchar NOT NULL,
	divisao varchar NOT NULL,
	estado_municipio varchar NOT NULL
);

ALTER TABLE public."time" ADD fktecnico serial NOT NULL;

CREATE TABLE public.tecnico (
	id serial NOT NULL,
	nome varchar NOT NULL,
	conquista integer NOT NULL,
	esquema_tatico varchar NOT NULL
);

CREATE TABLE public.jogador (
	id serial NOT NULL,
	nome varchar NOT NULL,
	posicao varchar NOT NULL,
	caracteristica varchar NOT NULL,
	fktime integer NOT NULL,
	fktecnico integer NOT NULL
);


------------------------------------------------------------------------------

-- Popular tabela Time:
INSERT INTO public."time" (id,nome,divisao,estado_municipio,fktecnico)
	VALUES (1,'Palmeiras','Seria A','Sao Paulo',1);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Flamengo','Seria A','Rio de Janeiro',2);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Goias','Seria A','Goias',8);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Atletico Mineiro','Seria A','Minas Gerais',7);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Corinthias ','Seria A','Sao Paulo',6);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Bota Fogo','Seria A','Rio de Janeiro',3);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Gremio','Seria A','Santa Catarina',5);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Athetico Paranaense','Seria A','Parana',4);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Fortaleza','Seria A','Ceara',10);
INSERT INTO public."time" (nome,divisao,estado_municipio,fktecnico)
	VALUES ('Bahia','Seria A','Bahia',9);


------------------------------------------------------------------------------
-- Popular tabela Tecnico:
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Abel Ferreira',7,'Contra-Ataque, Pressão Alta');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Tite',5,'Retranca e Toque Bola');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Bruno Lage',0,'Contra-Ataque, Pressão Alta');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Jorge Jesus',4,'Toque de Bola, Pressão Alta');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Renato Gaucho',3,'Toque de Bola, Equilibrado');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Dorival Junior',2,'Toque de Bola, Pressão Alta');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Zezinho',0,'Equilibrado');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Pedrinho',1,'Lançamentos, Linha de Fundo');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Diniz',2,'Toque de Bola, Pressao Alta');
INSERT INTO public.tecnico (nome,conquista,esquema_tatico)
	VALUES ('Rogerio Ceni',1,'Posse de Bola, Contra-Ataque');

------------------------------------------------------------------------------

-- Popular tabela Jogador:
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Alex','Zaqueiro','Forte',34);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Bruno','Lateral','Rapido',1);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Carlos','Volante','Forte e Alto',37);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Daniel','Meia Central','Motorzinho',33);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Elton','Atacante','Rapido',35);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Flavio','Meia Armador','Cerebro',36);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Kaique','Zaqueiro','Alto',38);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Jonas','Volante','Batedor Carteira',39);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Leo ','Lateral','Cruza Bem',40);
INSERT INTO public.jogador (nome,posicao,caracteristica,fktime)
	VALUES ('Marcelo','Atacante','Finalizador',41);

