SELECT
    regiao as "Regiao",
    sum(populacao) as Total
FROM
    estados
GROUP BY
  regiao
ORDER BY
  Total DESC;
SELECT
    sum(populacao) as Total
FROM
    estados
ORDER BY
  Total DESC;
SELECT
    avg(populacao) as Total
FROM
    estados
ORDER BY
  Total DESC