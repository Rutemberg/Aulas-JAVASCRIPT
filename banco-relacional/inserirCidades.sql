SELECT
  *
from
  estados
INSERT INTO
  cidades (nome, area, estados_id)
VALUES
  ("Brasilia", 789, 4);
INSERT INTO
  cidades (nome, area, estados_id)
VALUES
  ("Fortaleza", 133, 76);
INSERT INTO
  cidades (nome, area, estados_id)
VALUES
  (
    'Caruaru',
    457,
    (
      SELECT
        id
      FROM
        estados
      WHERE
        sigla = 'PE'
    )
  );

INSERT INTO
  cidades (nome, area, estados_id)
VALUES
  (
    'Juazeiro',
    256,
    (
      SELECT
        id
      FROM
        estados
      WHERE
        sigla = 'CE'
    )
  );
  
SELECT * FROM cidades