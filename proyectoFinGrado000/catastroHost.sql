-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2023 a las 13:31:11
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catastro`
--

-- --------------------------------------------------------
drop database if exists id20916213_catastro;
create database id20916213_catastro;
use id20916213_catastro;


--
-- Estructura de tabla para la tabla `bloquecasas`
--

CREATE TABLE `bloquecasas` (
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `metros_b` decimal(4,0) DEFAULT NULL,
  `od_bloque` varchar(90) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bloquecasas`
--

INSERT INTO `bloquecasas` (`calle`, `numero`, `metros_b`, `od_bloque`) VALUES
('Avenida America', '20', '100', NULL),
('Avenida el Brillante', '20', '80', NULL),
('Cruz Conde', '20', '60', NULL),
('Damasco', '20', '80', NULL),
('Felipe II', '14', '70', NULL),
('La Paz', '5', '60', NULL),
('Ronda de los Tejares', '15', '70', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casaparticular`
--

CREATE TABLE `casaparticular` (
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `metros_c` decimal(4,0) DEFAULT NULL,
  `od_casa` varchar(90) DEFAULT NULL,
  `dni_cp` decimal(8,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `fotoscasa` (
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `imagen` blob NOT NULL,
  `nombre` varchar(255) NOT NULL DEFAULT '',
  `tamano` varchar(15) NOT NULL DEFAULT '',
  `formato` varchar(10) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `casaparticular`
--

INSERT INTO `casaparticular` (`calle`, `numero`, `metros_c`, `od_casa`, `dni_cp`) VALUES
('Avenida el Brillante', '15', '120', 'Casa', '15304050'),
('Damasco', '23', '120', '', '70100501'),
('Damasco', '24', '90', '', '70100502'),
('El Palo', '15', '50', '', '15060615'),
('Guerra', '2', '150', '', '71100501'),
('Los Pinos', '5', '230', '', '30201505'),
('Saravia', '3', '100', '', '70100506'),
('Urbanizacion las Lomas', '53', '200', 'Chalet', '10154060');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familia`
--

CREATE TABLE `familia` (
  `id` decimal(2,0) NOT NULL,
  `cabeza_familia` decimal(9,0) NOT NULL,
  `num_miembros` decimal(2,0) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `familia`
--

INSERT INTO `familia` (`id`,`cabeza_familia`, `num_miembros`) VALUES
('1', '10154060', '1'),
('2','15304050', '3'),
('3','15060615', '1'),
('4','30201505', '1'),
('5','30306060', '1'),
('6','30605020', '2'),
('7','30700200', '1'),
('8','44351312', '2'),
('9','59607071', '1'),
('10','70100506', '2'),
('11','60606070', '1'),
('12','60606070', '1'),
('13','60696867', '1'),
('14','67698760', '1'),
('15','70001000', '1'),
('16','70100501', '2'),
('17','70100502', '1'),
('18','80140620', '4'),
('19','70800200', '1'),
('20','71100501', '1'),
('21','71800200', '1'),
('22','80806059', '1'),
('23','81140621', '1'),
('24','81807060', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitapiso`
--

CREATE TABLE `habitapiso` (
  `dni` decimal(8,0) NOT NULL,
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `escalera` varchar(1) NOT NULL,
  `planta` decimal(2,0) NOT NULL,
  `puerta` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habitapiso`
--

INSERT INTO `habitapiso` (`dni`, `calle`, `numero`, `escalera`, `planta`, `puerta`) VALUES
('81140621', 'Avenida America', '20', '3', '2', '1'),
('70200200', 'Avenida America', '20', '3', '4', '1'),
('70500150', 'Avenida America', '20', '3', '4', '1'),
('80140620', 'Avenida America', '20', '3', '4', '1'),
('80140621', 'Avenida America', '20', '3', '4', '1'),
('59607071', 'Avenida el Brillante', '20', '4', '1', '2'),
('60607071', 'Avenida el Brillante', '20', '4', '2', '1'),
('60696867', 'Cruz Conde', '20', '1', '1', '2'),
('67698760', 'Cruz Conde', '20', '1', '2', '1'),
('30605020', 'Damasco', '20', '1', '1', '3'),
('32602050', 'Damasco', '20', '1', '1', '3'),
('70800200', 'Damasco', '20', '2', '3', '1'),
('60606070', 'Damasco', '20', '3', '2', '2'),
('70001000', 'Felipe II', '14', '2', '2', '1'),
('71800200', 'Felipe II', '14', '2', '3', '1'),
('81807060', 'La Paz', '5', '1', '1', '2'),
('80806059', 'La Paz', '5', '1', '2', '5'),
('40806020', 'Ronda de los Tejares', '15', '2', '2', '3'),
('44351312', 'Ronda de los Tejares', '15', '2', '2', '3'),
('30306060', 'Ronda de los Tejares', '15', '2', '3', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `dni` decimal(9,0) NOT NULL,
  `contrasena` varchar(20) DEFAULT NULL,
  `nombre_persona` varchar(20) NOT NULL,
  `apellidos_persona` varchar(40) NOT NULL,
  `genero` varchar(90) DEFAULT NULL,
  `dni_c` decimal(8,0) NOT NULL,
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `tipo` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`dni`, `contrasena`, `nombre_persona`, `apellidos_persona`, `genero`, `dni_c`, `calle`, `numero`, `tipo`) VALUES
('10154060', '3224dsz4', 'Teresa', 'Garrido Ortiz', 'M', '10154060', 'Urbanizacion las Lomas', '53', 'U'),
('10203040', NULL, 'Dolores', 'Cerruela Perez', 'm', '15304050', 'Avenida el Brillante', '15', 'U'),
('15060615', '3224fsz4', 'Federico', 'Martin Garcia', 'H', '15060615', 'El Palo', '15', 'U'),
('15304050', '3224csz4', 'Gonzalo', 'Lopez Jimenez', 'H', '15304050', 'Avenida el Brillante', '15', 'U'),
('20503080', NULL, 'Jose', 'Lopez Perez', 'H', '15304050', 'Avenida el Brillante', '15', 'U'),
('30201505', '3224esz4', 'Juan', 'Garcia Exposito', 'H', '30201505', 'Los Pinos', '5', 'U'),
('30306060', '14343a23', 'Gonzalo', 'Castillo Garcia', 'H', '30306060', 'Ronda de los Tejares', '15', 'U'),
('30605020', '9284as23', 'Josefa', 'Garcia Perez', 'M', '30605020', 'Damasco', '20', 'U'),
('30700200', NULL, 'Jose', 'Lopez Garcia', 'H', '30700200', 'Saravia', '3', 'U'),
('32602050', NULL, 'Antonio', 'Fernandez Fernandez', 'H', '30605020', 'Damasco', '20', 'U'),
('40806020', NULL, 'Maria', 'Garcia Gonzalez', 'M', '44351312', 'Ronda de los Tejares', '15', 'U'),
('44351312', '7234as23', 'Juan', 'Perez Lopez', 'H', '44351312', 'Ronda de los Tejares', '15', 'U'),
('59607071', '3224asz4', 'Rafael', 'Lopez Lopez', 'M', '59607071', 'Avenida el Brillante', '20', 'U'),
('60302930', NULL, 'Enrique', 'Perez Sanchez', 'H', '70100506', 'Saravia', '3', 'U'),
('60606070', '1224asz3', 'Pedro', 'Jimenez Cruz', 'H', '60606070', 'Damasco', '20', 'U'),
('60607071', '12343a93', 'Gonzalo', 'Perez Polo', 'H', '60607071', 'Avenida el Brillante', '20', 'U'),
('60696867', '5224asz8', 'Petra', 'Zafra Polo', 'M', '60696867', 'Cruz Conde', '20', 'U'),
('67698760', '12343a29', 'Maria', 'Polo Mu?oz', 'M', '67698760', 'Cruz Conde', '20', 'U'),
('70001000', '12345a23', 'Luis', 'Garrido Lopez', 'H', '70001000', 'Felipe II', '14', 'U'),
('70100501', '3224hsz4', 'Jose', 'Lopez Garcia', 'H', '70100501', 'Damasco', '23', 'U'),
('70100502', '3224isz4', 'Gustavo', 'Cerruela Garcia', 'H', '70100502', 'Damasco', '24', 'U'),
('70100506', '3224bsz4', 'Maria Luisa', 'La Torre Espinosa', 'M', '70100506', 'Saravia', '3', 'U'),
('70200200', NULL, 'Antonio', 'Garcia Perez', 'H', '80140620', 'Avenida America', '20', 'U'),
('70500150', NULL, 'Maria', 'Garcia Perez', 'H', '80140620', 'Avenida America', '20', 'U'),
('70800200', '1224asz8', 'Teresa', 'Gutierrez Perez', 'M', '70800200', 'Damasco', '20', 'U'),
('71100501', '3224jsz4', 'Pedro', 'Garcia Jimínez', 'H', '71100501', 'Guerra', '2', 'U'),
('71800200', '3224gsz4', 'Gonzalo', 'Garcia Garcia', 'H', '71800200', 'Felipe II', '14', 'U'),
('77700501', NULL, 'Luis', 'Lopez Garcia', 'H', '70100501', 'Damasco', '23', 'U'),
('80140620', '9284as25', 'Antonio', 'Garcia Garcia', 'H', '80140620', 'Avenida America', '20', 'U'),
('80140621', NULL, 'Antonia', 'Perez Lopez', 'M', '80140620', 'Avenida America', '20', 'U'),
('80806059', '5224dsz8', 'Maria', 'Gonzalez Muñoz', 'M', '80806059', 'La Paz', '5', 'U'),
('81140621', '3224ksz4', 'Jose', 'Perez Lopez', 'H', '81140621', 'Avenida America', '20', 'E'),
('81807060', '72343a23', 'Jose', 'Munoz Grrido', 'H', '81807060', 'La Paz', '5', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_familia`
--

CREATE TABLE `persona_familia` (
  `dniPersona` decimal(9,0) NOT NULL,
  `id_familia` decimal(2,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona_familia`
--

INSERT INTO `persona_familia` (`dniPersona`, `id_familia`) VALUES
('10154060', '1'),
('10203040', '2'),
('15060615', '3'),
('15304050', '2'),
('20503080', '2'),
('30201505', '4'),
('30306060', '5'),
('30605020', '6'),
('30700200', '7'),
('32602050', '6'),
('40806020', '8'),
('44351312', '8'),
('59607071', '9'),
('60302930', '10'),
('60606070', '11'),
('60607071', '12'),
('60696867', '13'),
('67698760', '14'),
('70001000', '15'),
('70100501', '16'),
('70100502', '17'),
('70100506', '10'),
('70200200', '18'),
('70500150', '18'),
('70800200', '19'),
('71100501', '20'),
('71800200', '21'),
('77700501', '16'),
('80140620', '18'),
('80140621', '18'),
('80806059', '22'),
('81140621', '23'),
('81807060', '24');

--
-- Disparadores `persona_familia`
--

DELIMITER $$

CREATE TRIGGER `miembros` AFTER INSERT ON `persona_familia`
FOR EACH ROW
BEGIN
    UPDATE familia SET num_miembros = (
        SELECT COUNT(*) FROM persona_familia WHERE id_familia = NEW.id_familia
    ) WHERE id = NEW.id_familia;
END$$

CREATE TRIGGER `miembros_update` AFTER UPDATE ON `persona_familia`
FOR EACH ROW
BEGIN
    UPDATE familia SET num_miembros = (
        SELECT COUNT(*) FROM persona_familia WHERE id_familia = NEW.id_familia
    ) WHERE id = NEW.id_familia;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `piso`
--

CREATE TABLE `piso` (
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `escalera` varchar(1) NOT NULL,
  `planta` decimal(2,0) NOT NULL,
  `puerta` varchar(2) NOT NULL,
  `metros_p` decimal(3,0) DEFAULT NULL,
  `od_piso` varchar(90) DEFAULT NULL,
  `dni_p` decimal(8,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `piso`
--

INSERT INTO `piso` (`calle`, `numero`, `escalera`, `planta`, `puerta`, `metros_p`, `od_piso`, `dni_p`) VALUES
('Avenida America', '20', '3', '2', '1', '90', '', '81140621'),
('Avenida America', '20', '3', '4', '1', '100', '', '80140620'),
('Avenida el Brillante', '20', '4', '1', '2', '80', '', '59607071'),
('Avenida el Brillante', '20', '4', '2', '1', '90', '', '60607071'),
('Cruz Conde', '20', '1', '1', '2', '60', '', '60696867'),
('Cruz Conde', '20', '1', '2', '1', '75', '', '67698760'),
('Damasco', '20', '1', '1', '3', '40', '', '32602050'),
('Damasco', '20', '2', '3', '1', '50', '', '70800200'),
('Damasco', '20', '3', '2', '2', '70', '', '60606070'),
('Felipe II', '14', '2', '2', '1', '70', '', '70001000'),
('Felipe II', '14', '2', '3', '1', '50', '', '71800200'),
('La Paz', '5', '1', '1', '2', '60', '', '81807060'),
('La Paz', '5', '1', '2', '5', '60', '', '80806059'),
('Ronda de los Tejares', '15', '2', '2', '3', '70', '', '44351312'),
('Ronda de los Tejares', '15', '2', '3', '1', '75', '', '30306060');

-- --------------------------------------------------------

CREATE TABLE `fotospiso` (
  `calle` varchar(30) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `escalera` varchar(1) NOT NULL,
  `planta` decimal(2,0) NOT NULL,
  `puerta` varchar(2) NOT NULL,
  `imagen` blob NOT NULL,
  `nombre` varchar(255) NOT NULL DEFAULT '',
  `tamano` varchar(15) NOT NULL DEFAULT '',
  `formato` varchar(10) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Estructura de tabla para la tabla `vivienda`
--

CREATE TABLE `vivienda` (
  `calle` varchar(40) NOT NULL,
  `numero` decimal(3,0) NOT NULL,
  `tipo_vivienda` varchar(1) DEFAULT NULL,
  `codigo_postal` decimal(5,0) DEFAULT NULL,
  `metros` decimal(5,0) DEFAULT NULL,
  `od_vivienda` varchar(90) DEFAULT NULL,
  `nombre_zona` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vivienda`
--

INSERT INTO `vivienda` (`calle`, `numero`, `tipo_vivienda`, `codigo_postal`, `metros`, `od_vivienda`, `nombre_zona`) VALUES
('Avenida America', '20', 'B', '14026', '100', 'Piso', 'CENTRO'),
('Avenida el Brillante', '15', 'C', '14027', '160', 'Casa', 'BRILLANTE'),
('Avenida el Brillante', '20', 'B', '14028', '80', 'Bloque', 'BRILLANTE'),
('Cruz Conde', '20', 'B', '14003', '60', 'Piso', 'CENTRO'),
('Damasco', '20', 'B', '14500', '120', 'Bloque', 'SECTOR SUR'),
('Damasco', '23', 'C', '14500', '120', 'Casa', 'SECTOR SUR'),
('Damasco', '24', 'C', '14500', '90', 'Casa', 'SECTOR SUR'),
('El Palo', '15', 'C', '15025', '50', 'C', 'SUBURBIO TERMINAL'),
('Felipe II', '14', 'B', '12005', '70', 'Bloque', 'CENTRO'),
('Guerra', '2', 'C', '14500', '150', 'Casa', 'SUBURBIO TERMINAL'),
('La Paz', '5', 'B', '14000', '60', 'Piso', 'SECTOR SUR'),
('Los Pinos', '5', 'C', '13050', '250', 'C', 'TRASIERRA'),
('Ronda de los Tejares', '15', 'B', '14007', '70', 'Piso', 'CENTRO'),
('Saravia', '3', 'C', '14003', '100', 'Casa', 'CENTRO'),
('Urbanizacion las Lomas', '53', 'C', '14009', '250', 'Chalet', 'TRASIERRA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonaurbana`
--

CREATE TABLE `zonaurbana` (
  `nombre_zona` varchar(20) NOT NULL,
  `od_zona` varchar(90) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `zonaurbana`
--

INSERT INTO `zonaurbana` (`nombre_zona`, `od_zona`) VALUES
('BRILLANTE', 'Es la zona correspondiente mas alta de la \r\n         ciudad'),
('CENTRO', 'Es la zona correspondiente al centro de la \r\n         ciudad'),
('SECTOR SUR', 'Es la zona correspondiente al sur de la \r\n         ciudad'),
('SUBURBIO TERMINAL', 'Es la zona correspondiente a la \r\n         zona pobre de la ciudad'),
('TRASIERRA', 'Es la zona correspondiente a la zona \r\n         cercana a la sierra de la ciudad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bloquecasas`
--
ALTER TABLE `bloquecasas`
  ADD PRIMARY KEY (`calle`,`numero`);

--
-- Indices de la tabla `casaparticular`
--
ALTER TABLE `casaparticular`
  ADD PRIMARY KEY (`calle`,`numero`),
  ADD KEY `dni_cp` (`dni_cp`);
  
  ALTER TABLE `fotoscasa`
  ADD `num_ident` INT NOT NULL AUTO_INCREMENT,
  ADD PRIMARY KEY (`num_ident`),
  ADD KEY `calle` (`calle`,`numero`);

--
-- Indices de la tabla `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cabeza_familia` (`cabeza_familia`);

--
-- Indices de la tabla `habitapiso`
--
ALTER TABLE `habitapiso`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `calle` (`calle`,`numero`,`escalera`,`planta`,`puerta`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `calle` (`calle`,`numero`),
  ADD KEY `dni_c` (`dni_c`);

--
-- Indices de la tabla `persona_familia`
--
ALTER TABLE `persona_familia`
  ADD PRIMARY KEY (`dniPersona`,`id_familia`),
  ADD KEY `id_familia` (`id_familia`);

--
-- Indices de la tabla `piso`
--
ALTER TABLE `piso`
  ADD PRIMARY KEY (`calle`,`numero`,`escalera`,`planta`,`puerta`),
  ADD KEY `dni_p` (`dni_p`);


ALTER TABLE `fotospiso`
  ADD `num_ident` INT NOT NULL AUTO_INCREMENT,
  ADD PRIMARY KEY (`num_ident`),
  ADD KEY `calle` (`calle`,`numero`,`escalera`,`planta`,`puerta`);
--
-- Indices de la tabla `vivienda`
--
ALTER TABLE `vivienda`
  ADD PRIMARY KEY (`calle`,`numero`),
  ADD KEY `nombre_zona` (`nombre_zona`);

--
-- Indices de la tabla `zonaurbana`
--
ALTER TABLE `zonaurbana`
  ADD PRIMARY KEY (`nombre_zona`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bloquecasas`
--
ALTER TABLE `bloquecasas`
  ADD CONSTRAINT `bloquecasas_ibfk_1` FOREIGN KEY (`calle`,`numero`) REFERENCES `vivienda` (`calle`, `numero`) ON DELETE CASCADE;

--
-- Filtros para la tabla `casaparticular`
--
ALTER TABLE `casaparticular`
  ADD CONSTRAINT `casaparticular_ibfk_1` FOREIGN KEY (`dni_cp`) REFERENCES `persona` (`dni`),
  ADD CONSTRAINT `casaparticular_ibfk_2` FOREIGN KEY (`calle`,`numero`) REFERENCES `vivienda` (`calle`, `numero`) ON DELETE CASCADE;
  
ALTER TABLE `fotoscasa`
  ADD CONSTRAINT `fotoscasa_ibfk_1` FOREIGN KEY (`calle`,`numero`) REFERENCES `casaparticular` (`calle`, `numero`) ON DELETE CASCADE;
--
-- Filtros para la tabla `familia`
--
ALTER TABLE `familia`
  ADD CONSTRAINT `familia_ibfk_1` FOREIGN KEY (`cabeza_familia`) REFERENCES `persona` (`dni`);

--
-- Filtros para la tabla `habitapiso`
--
ALTER TABLE `habitapiso`
  ADD CONSTRAINT `habitapiso_ibfk_1` FOREIGN KEY (`calle`,`numero`,`escalera`,`planta`,`puerta`) REFERENCES `piso` (`calle`, `numero`, `escalera`, `planta`, `puerta`) ON DELETE CASCADE,
  ADD CONSTRAINT `habitapiso_ibfk_2` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`) ON DELETE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`calle`,`numero`) REFERENCES `vivienda` (`calle`, `numero`),
  ADD CONSTRAINT `persona_ibfk_2` FOREIGN KEY (`dni_c`) REFERENCES `persona` (`dni`);

--
-- Filtros para la tabla `persona_familia`
--
ALTER TABLE `persona_familia`
  ADD CONSTRAINT `persona_familia_ibfk_1` FOREIGN KEY (`dniPersona`) REFERENCES `persona` (`dni`) ON DELETE CASCADE,
  ADD CONSTRAINT `persona_familia_ibfk_2` FOREIGN KEY (`id_familia`) REFERENCES `familia` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `piso`
--
ALTER TABLE `piso`
  ADD CONSTRAINT `piso_ibfk_1` FOREIGN KEY (`calle`,`numero`) REFERENCES `bloquecasas` (`calle`, `numero`) ON DELETE CASCADE,
  ADD CONSTRAINT `piso_ibfk_2` FOREIGN KEY (`dni_p`) REFERENCES `persona` (`dni`);

ALTER TABLE `fotospiso`
  ADD CONSTRAINT `fotospiso_ibfk_1` FOREIGN KEY (`calle`,`numero`,`escalera`,`planta`,`puerta`) REFERENCES `piso` (`calle`, `numero`, `escalera`, `planta`, `puerta`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vivienda`
--
ALTER TABLE `vivienda`
  ADD CONSTRAINT `vivienda_ibfk_1` FOREIGN KEY (`nombre_zona`) REFERENCES `zonaurbana` (`nombre_zona`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
