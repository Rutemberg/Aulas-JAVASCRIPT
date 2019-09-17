CREATE TABLE prefeitos (
  id INT UNSIGNED NOT NULL auto_increment PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cidade_id INT UNSIGNED,
  UNIQUE KEY (cidade_id),
  FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);