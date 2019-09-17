select c.nome,e.nome
from cidades c, empresas_unidades eu, empresas e 
where c.id = eu.cidade_id
and e.id = eu.empresa_id
and sede