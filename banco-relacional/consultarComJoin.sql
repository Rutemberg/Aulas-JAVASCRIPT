SELECT
  e.nome as Estado,
  c.nome as Cidade,
  e.regiao as Regiao
FROM
  estados e,
  cidades c
WHERE
  e.id = c.estados_id;

  
SELECT
  e.nome as Estado,
  c.nome as Cidade,
  e.regiao as Regiao
FROM
  estados e
  INNER JOIN cidades c on e.id = c.estados_id