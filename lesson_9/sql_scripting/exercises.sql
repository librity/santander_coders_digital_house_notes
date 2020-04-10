USE `carrefour`;
SELECT nome, sobrenome FROM cliente;

SELECT id from marca WHERE nome = 'Apple';
SELECT * FROM produto WHERE id_marca = 8;

SELECT id from cliente WHERE nome = 'Laura' AND sobrenome = 'Cortés';
SELECT * FROM venda WHERE id_cliente = 5;

SELECT * FROM produto ORDER BY preco DESC;
