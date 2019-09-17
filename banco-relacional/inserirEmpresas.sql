INSERT into
  empresas (nome, cnpj)
VALUES
  ("Bradesco", 954548787878),
  ("Vale", 546546454654),
  ("Cielo", 787564236847);
ALTER TABLE
  empresas
MODIFY
  cnpj VARCHAR(14);

DESC empresas;

DESC prefeitos;

SELECT
  *
FROM
  empresas;


SELECT
  *
FROM
  cidades;


INSERT INTO
  empresas_unidades (empresa_id, cidade_id, sede)
VALUES
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);