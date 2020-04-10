-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Abr-2020 às 21:07
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.1

CREATE DATABASE IF NOT EXISTS `carrefour` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `carrefour`; 

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `carrefour`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(45) NOT NULL,
  `id_categoria_pai` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`, `id_categoria_pai`) VALUES
(1, 'Eletrodomésticos', NULL),
(2, 'Consoles e videogames', NULL),
(3, 'Celulares', NULL),
(4, 'Ares-condicionados', NULL),
(5, 'Informática', NULL),
(6, 'Comida', NULL),
(7, 'Bebida', NULL),
(8, 'Frutas', 6),
(9, 'Verduras', 6),
(10, 'Carnes', 6),
(11, 'Refrigerantes', 7),
(12, 'Bebidas alcoólicas', 7),
(13, 'Sucos', 7),
(14, 'Águas', 7),
(15, 'Aparelhos portáteis', 2),
(16, 'Fornos', 1),
(17, 'Máquinas de lavar', 1),
(18, 'Geladeiras', 1),
(19, 'Micro-ondas', 1),
(20, 'Ares-condicionados frio', 4),
(21, 'Ares-condicionados frio/quente', 4),
(22, 'Computadores', 5),
(23, 'Impressoras', 5),
(24, 'Notebooks', 5),
(25, 'Televisões', NULL),
(26, 'Massa', 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `Id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `telefone` varchar(8) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `data_de_nascimento` datetime NOT NULL,
  `id_produto_preferido` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`Id`, `nome`, `sobrenome`, `email`, `telefone`, `celular`, `data_de_nascimento`, `id_produto_preferido`) VALUES
(1, 'Sacha', 'LIfszyc', 'sacha.lifszyc@gmail.com', '46319613', '1153980907', '1990-08-12 00:00:00', 37),
(2, 'Darío', 'Susnisky', 'dario@dh.com', '49968901', '1130315490', '1990-10-03 00:00:00', 22),
(3, 'Javier', 'Herrera', 'javi@dh.com', '49074344', NULL, '1990-09-01 00:00:00', NULL),
(4, 'Carla', 'Zapata', 'carlazapata@gmail.com', NULL, '1156701024', '1986-03-10 00:00:00', 29),
(5, 'Laura', 'Cortés', 'laucortes14@hotmail.com', NULL, '1157843301', '1978-05-06 00:00:00', NULL),
(6, 'Martina', 'Crespo', 'martucrespo84@hotmail.com', '46338998', NULL, '1984-03-07 00:00:00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `marca`
--

CREATE TABLE `marca` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `marca`
--

INSERT INTO `marca` (`id`, `nome`) VALUES
(8, 'Apple'),
(15, 'Coca-Cola'),
(20, 'Colorado'),
(17, 'Danone'),
(1, 'HP'),
(13, 'LG'),
(7, 'Microsoft'),
(9, 'Motorola'),
(6, 'Nintendo'),
(14, 'Panasonic'),
(12, 'Philco'),
(11, 'Philips'),
(2, 'Samsung'),
(10, 'Sanyo'),
(18, 'Skol'),
(5, 'Sony'),
(16, 'Sprite'),
(19, 'Stella Artois'),
(3, 'Toshiba'),
(4, 'TP Link');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `id_marca` int(10) UNSIGNED DEFAULT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `id_categoria` int(10) UNSIGNED NOT NULL,
  `preco` varchar(45) NOT NULL,
  `pontuacao` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `modelo`, `id_marca`, `descricao`, `id_categoria`, `preco`, `pontuacao`) VALUES
(1, 'TV LED 32\"', 'SY-XFJQLP-32', 10, 'Esta televisão tem uma tela de 32 polegadas e resolução de 1366x768 (HD Ready)', 25, '8000', '3.1'),
(2, 'Maçã vermelha', NULL, NULL, 'Maçã vermelha de origem nacional', 8, '5', '2.5'),
(3, 'Maçã verde', NULL, NULL, 'Maçã verde de origem nacional', 8, '5', '2.5'),
(4, '1kg de bife de boi', NULL, NULL, NULL, 10, '129', '3.4'),
(5, '1kg de peito de frango', NULL, NULL, NULL, 10, '105', '3'),
(6, 'Macarrão tricolor', NULL, NULL, 'Macarrão de abóbora, cenoura e espinafre', 26, '40', '1.9'),
(7, 'Caixa de ravioli de frango', NULL, NULL, 'O autêntico ravioli italiano', 26, '64', '2.4'),
(8, 'Conchiglioni', NULL, NULL, 'Massa deliciosa', 26, '38', '0.9'),
(17, 'PlayStation 3', 'Slim', 5, 'CoM 2 controles', 2, '7000', '3.6'),
(18, 'PlayStation 4', NULL, 5, 'O novo. Vem com um controle e um jogo', 2, '8000', '4.1'),
(19, 'PlayStation 4 Slim', 'Slim', 5, 'Último modelo, mais fino', 2, '8500', '4.3'),
(20, 'Wii', 'Branco 250Gb', 6, 'Nintendo Wii excelente para se divertir em família', 2, '7000', '3.2'),
(21, 'Wii-U', 'Com controle externo tipo iPad', 6, 'Nintendo Wii-U que vem com um controle tipo iPad para controlar os personagens do videogame', 2, '8000', '3.6'),
(22, 'Nintendo Switch', 'O mais novo console da Nintendo', 6, 'Mamma mia', 2, '12000', '4.6'),
(23, 'TV Samsung 3D OLED 40\"', 'SMG-3D-40LXHFG', 2, 'Televisão impressionante', 25, '25000', '3.7'),
(24, 'Smart TV Panasonic 50\"', 'PNSC-SM50JKGH', 14, 'Excelente para assistir futebol', 25, '26000', '4'),
(27, 'iPhone 6s', '64Gb preto', 8, 'Bom iPhone', 3, '14000', '4'),
(28, 'iPhone 6s', '128Gb branco', 8, 'Bom iPhone com maior capacidade', 3, '17000', '4.5'),
(29, 'iPhone 7', '128Gb preto', 8, 'Muito bom iPhone', 3, '24000', '4.8'),
(30, 'Coca-Cola', '1.5l', 15, 'Uma garrafa de Coca-Cola', 11, '36', '4.2'),
(31, 'Coca-Cola', '2.25l', 15, 'Uma garrafa maior de Coca-Cola', 11, '42', '3.8'),
(32, 'Sprite', '1.5l', 16, 'Uma garrafa de Sprite', 11, '34', '3.6'),
(33, 'Suco de pêssego', '1l', 17, 'Uma caixa de suco', 13, '28', '3.4'),
(34, 'Suco de laranja', '1.l', 17, 'Uma caixa de suco sabor laranja', 13, '28', '3.5'),
(35, 'Cerveja Skol', '1l', 18, 'Desce redondo', 12, '22', '2.2'),
(36, 'Cerveja Stella Artois', '1l', 19, 'Ela é única', 12, '30', '3.2'),
(37, 'Cerveja Artesanal Colorado Amber Ale', '750ml', 20, 'A mais gostosa', 12, '42', '4.3');

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda`
--

CREATE TABLE `venda` (
  `Id` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `id_cliente` int(10) UNSIGNED NOT NULL,
  `id_produto` int(10) UNSIGNED DEFAULT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `venda`
--

INSERT INTO `venda` (`Id`, `data`, `id_cliente`, `id_produto`, `quantidade`) VALUES
(1, '2017-04-28 00:00:00', 1, 2, 5),
(2, '2017-04-28 00:00:00', 1, 3, 4),
(3, '2017-04-21 00:00:00', 2, 28, 1),
(4, '2017-04-20 00:00:00', 3, 28, 1),
(5, '2017-04-19 00:00:00', 4, 28, 1),
(6, '2017-04-07 00:00:00', 1, 29, 1),
(7, '2017-04-14 00:00:00', 5, 27, 1),
(8, '2017-03-14 00:00:00', 5, 29, 3),
(9, '2017-02-15 00:00:00', 2, 22, 10),
(10, '2017-02-15 00:00:00', 1, 19, 1),
(11, '2017-02-14 00:00:00', 3, 18, 1),
(12, '2016-12-08 00:00:00', 5, 35, 12),
(13, '2016-11-12 00:00:00', 3, 36, 1),
(14, '2016-11-07 00:00:00', 3, 35, 4),
(15, '2016-11-16 00:00:00', 3, 37, 1),
(16, '2016-11-12 00:00:00', 4, 36, 6),
(17, '2016-07-09 00:00:00', 3, 35, 3),
(18, '2016-11-12 00:00:00', 1, 37, 2),
(19, '2016-03-08 00:00:00', 2, 37, 2),
(20, '2016-08-12 00:00:00', 5, 35, 6),
(21, '2016-07-04 00:00:00', 3, 36, 3),
(22, '2016-09-10 00:00:00', 1, 37, 1),
(23, '2016-02-01 00:00:00', 2, 35, 1),
(24, '2015-12-25 00:00:00', 2, 37, 12);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categoriacol_UNIQUE` (`nome`),
  ADD KEY `id_categoria_pai_idx` (`id_categoria_pai`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `produto_preferido_idx` (`id_produto_preferido`);

--
-- Índices para tabela `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marca_idx` (`id_marca`),
  ADD KEY `categoria_idx` (`id_categoria`);

--
-- Índices para tabela `venda`
--
ALTER TABLE `venda`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `cliente_idx` (`id_cliente`),
  ADD KEY `produto_idx` (`id_produto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `Id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de tabela `venda`
--
ALTER TABLE `venda`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `id_categoria_pai` FOREIGN KEY (`id_categoria_pai`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `produto_preferido` FOREIGN KEY (`id_produto_preferido`) REFERENCES `produto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `marca` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `venda`
--
ALTER TABLE `venda`
  ADD CONSTRAINT `cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `produto` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
