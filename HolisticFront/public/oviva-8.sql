-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-05-2024 a las 15:15:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `oviva`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeletePerson` (IN `id_person_param` SMALLINT)   BEGIN
    DELETE FROM person WHERE id_person = id_person_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteQa` (IN `id_qa_param` SMALLINT)   BEGIN
    DELETE FROM qa WHERE id_qa = id_qa_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteRecipe` (IN `id_recipe_param` SMALLINT)   BEGIN
   DELETE FROM recipe WHERE id_recipe = id_recipe_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteUser` (IN `id_user_param` SMALLINT)   BEGIN
    DELETE FROM user WHERE id_user = id_user_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteUserbyEmail` (IN `email_param` VARCHAR(100))   BEGIN
    DELETE FROM user WHERE email = email_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteVideo` (IN `id_video_param` SMALLINT)   BEGIN
    DELETE FROM video WHERE id_video = id_video_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertPerson` (IN `first_name_param` VARCHAR(20), IN `last_name_param` VARCHAR(20), IN `birth_date_param` DATE, IN `country_param` VARCHAR(20), IN `diagnosed_param` TINYINT, IN `email_param` VARCHAR(100))   BEGIN
    INSERT INTO person (first_name, last_name, birth_date, country, diagnosed, email)
    VALUES (first_name_param, last_name_param, birth_date_param, country_param, diagnosed_param, email_param);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUser` (IN `password_param` VARCHAR(1000), IN `user_type_param` ENUM('admin','client'), IN `email_param` VARCHAR(100))   BEGIN
    INSERT INTO user (password, user_type, email)
    VALUES (password_param, user_type_param, email_param);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_login_user` (IN `email_param` VARCHAR(100))   BEGIN
 
 SELECT * FROM user
 JOIN person on person.email = user.email
 WHERE user.email = email_param;
 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdatePerson` (IN `id_person_param` SMALLINT, IN `first_name_param` VARCHAR(20), IN `last_name_param` VARCHAR(20), IN `birth_date_param` DATE, IN `country_param` VARCHAR(20), IN `diagnosed_param` TINYINT, IN `email_param` VARCHAR(100))   BEGIN
    UPDATE person
    SET first_name = first_name_param,
        last_name = last_name_param,
        birth_date = birth_date_param,
        country = country_param,
        diagnosed = diagnosed_param,
        email = email_param
        
    WHERE id_person = id_person_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateQa` (IN `id_qa_param` SMALLINT, IN `question_param` VARCHAR(100), IN `answer_param` VARCHAR(200))   BEGIN
    UPDATE qa 
    SET question = question_param,
        answer = answer_param
        
    WHERE id_qa = id_qa_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRecipe` (IN `id_recipe_param` SMALLINT, IN `title_param` VARCHAR(20), IN `image_param` VARCHAR(300), IN `description_param` VARCHAR(500), IN `category_param` ENUM('Desayunos','Almuerzos','Meriendas','Cenas'))   BEGIN
    UPDATE recipe
    SET title = title_param,
        image = image_param,
        description = description_param,
        category = category_param
    WHERE id_recipe = id_recipe_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUser` (IN `id_user_param` SMALLINT, IN `password_param` VARCHAR(1000), IN `user_type_param` ENUM('Admin','Client'), IN `email_param` VARCHAR(100))   BEGIN
    UPDATE user
    SET password = password_param,
        user_type = user_type_param,
        email = email_param
    WHERE id_user = id_user_param;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateVideo` (IN `id_video_param` SMALLINT, IN `title_param` VARCHAR(20), IN `link_param` VARCHAR(200), IN `category_param` ENUM('Yoga','Pilates'))   BEGIN
    UPDATE video 
    SET title = title_param,
        link = link_param,
        category = category_param
    WHERE id_video = id_video_param;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE `person` (
  `id_person` smallint(6) UNSIGNED NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `birth_date` date NOT NULL,
  `country` varchar(20) NOT NULL,
  `diagnosed` tinyint(1) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`id_person`, `first_name`, `last_name`, `birth_date`, `country`, `diagnosed`, `email`) VALUES
(1, 'Admin', 'Admin', '2024-05-15', 'España', 1, 'admin@h.com'),
(2, 'Susana', 'Flores', '2024-06-13', 'España', 1, 'susana@h.com'),
(3, 'Antonia', 'Morales', '2024-02-02', 'España', 0, 'antonia@h.com'),
(5, 'Faby', 'Romero', '1985-05-10', 'Francia', 0, 'faby@h.com'),
(6, 'Hache', 'Washfe', '2000-05-08', 'Noruega', 1, 'hache@h.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qa`
--

CREATE TABLE `qa` (
  `id_qa` smallint(6) UNSIGNED NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `qa`
--

INSERT INTO `qa` (`id_qa`, `question`, `answer`) VALUES
(2, '¿Qué es SOP?', 'El síndrome de ovario poliquístico (SOP) es una afección endocrina común en mujeres en edad reproductiva. Se caracteriza por desequilibrios hormonales que pueden provocar síntomas como períodos menstruales irregulares, exceso de vello corporal, acné, problemas de fertilidad y quistes en los ovarios. El tratamiento suele implicar una combinación de cambios en el estilo de vida'),
(3, '¿Qué cambios debo hacer para sentirme mejor?', 'Para mejorar el síndrome de ovario poliquístico (SOP), enfócate en mantener un peso saludable, seguir una dieta balanceada, hacer ejercicio regularmente, manejar el estrés y tener consultas regulares con un médico. Estos cambios pueden ayudar a regular los niveles hormonales y mejorar los síntomas.'),
(5, '¿Puedes quedar embarazada si tienes SOP?', 'Aunque el síndrome de ovario poliquístico está asociado con la infertilidad, no significa que usted no pueda quedar embarazada.\r\nConozco muchas historias de mujeres con SOP que lograron quedar embarazadas naturalmente. También conozco historias de mujeres que luchan contra la infertilidad.\r\nEste es uno de los temas más sensibles y delicados del SOP.\r\nEspecialmente para aquellas de ustedes que están intentando quedar embarazadas, pero no está sucediendo.\r\nNo te desanimes.\r\nSe ha informado que el síndrome de ovario poliquístico es “la causa más común, PERO TRATABLE, de infertilidad en la mujer”.\r\nPero primero, para entender la fertilidad necesitamos mirar más de cerca qué tipo de\r\nproblemas de infertilidad enfrentan las mujeres con síndrome de ovario poliquístico.'),
(7, '¿Por qué es tan difícil perder peso cuando tienes ovario poliquístico?', '\r\nBueno, dejando las hormonas a un lado y no centrándote en cómo afectan tu SOP a la\r\nvida. \r\nVeamos un punto un poco diferente:\r\nLa investigación reveló que las mujeres con síndrome de ovario poliquístico tienden a consumir 250 KJ (alrededor de 60\r\nkcal) adicionales por día en comparación con mujeres sin síndrome de ovario poliquístico.\r\nAdemás, las mujeres con SOP son más sedentarias y menos activas físicamente (30 minutos adicionales de sedentarismo al día) que sus amigas que no padecen SOP.\r\n60 kcal extra al día y 30 minutos de inactividad extra al día no me parece mucho, pero estas pequeñas diferencias podrían explicar un mayor aumento de peso.\r\nLa investigación indica que el motivo de ese estilo de vida no está claro.\r\nPero mi suposición sería antojos, disfunción en las regulaciones del apetito, resistencia a la insulina, falta de sueño, fatiga crónica, cansancio, estrés y falta de información.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recipe`
--

CREATE TABLE `recipe` (
  `id_recipe` smallint(6) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` varchar(300) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `category` enum('Desayunos','Almuerzos','Meriendas','Cenas') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recipe`
--

INSERT INTO `recipe` (`id_recipe`, `title`, `image`, `description`, `category`) VALUES
(3, 'OPCIÓN VEGETARIANA: ENSALADA DE QUINOA Y TOFU A LA PLANCHA', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/c27a71677d69636ac2dec582badb017d/detailed', 'Para hacer ensalada de quinoa y tofu a la parrilla, necesitarás los siguientes ingredientes:\r\n-1/2 taza de quinua, enjuagada\r\n-1 taza de agua\r\n-1 bloque de tofu extra firme\r\n-2 tazas de verduras mixtas (espinacas, rúcula, col rizada, etc.)\r\n-1/2 taza de tomates cherry, cortados por la mitad\r\n-1/4 pepino, rebanado\r\n-1/4 pimiento rojo, cortado en cubitos\r\n-1/4 aguacate, en rodajas\r\n-1 cucharada de aceite de oliva\r\n-1 cucharada de vinagre balsámico\r\n-Sal y pimienta para probar\r\n-Opcional: hierbas frescas como albahaca o perejil para decorar\r\nA continuación se explica cómo preparar la ensalada de quinua y tofu a la parrilla:\r\n1.⁠ ⁠Preparar la quinua: En una cacerola, combine la quinua y el agua. Deje hervir, luego reduzca el fuego a bajo, cubra y cocine a fuego lento durante 15 a 20 minutos, o hasta que la quinua esté cocida y se absorba el agua. Revuelva con un tenedor y déjelo enfriar.\r\n2.⁠ ⁠Prensa y marina el tofu: Presiona el tofu para eliminar el exceso de agua. Corta el tofu prensado en cubos o rodajas. En un bol, mezcle el aceite de oliva, el vinagre balsámico, la sal y la pimienta. Marina el tofu en esta mezcla durante al menos 15 minutos.\r\n3.⁠ ⁠Tofu a la parrilla: Calienta una sartén o sartén a fuego medio-alto. Agregue los trozos de tofu marinado y cocine durante 4-5 minutos por cada lado, o hasta que se formen marcas de parrilla y el tofu esté completamente caliente.\r\n4.⁠ ⁠Preparar la ensalada: En un tazón grande, combine la quinua cocida, las verduras mixtas, los tomates cherry, el pepino, el pimiento rojo y el aguacate en rodajas. Mezcle suavemente para combinar.\r\n5.⁠ ⁠Agregue tofu a la parrilla: cubra la ensalada con los trozos de tofu a la parrilla.\r\n6.⁠ ⁠Servir: Divida la ensalada en platos o tazones para servir. Rocíe con el aderezo restante de la marinada de tofu. Adorne con hierbas frescas si lo desea.\r\nEsta ensalada proporciona un buen equilibrio de proteínas vegetales de la quinua y el tofu, grasas saludables del aguacate y el aceite de oliva, y mucha fibra y nutrientes de las verduras. Es una comida nutritiva y satisfactoria, perfecta para el almuerzo o la cena.\r\n-Proteína: Aproximadamente 49g\r\n-Grasa: Aproximadamente 44,2g\r\n-Carbohidratos: Aproximadamente 46-51g', 'Almuerzos'),
(4, 'ENSALADA DE QUINOA Y POLLO A LA PLANCHA:', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/ef60f3a86106a7b322e9338cef9ef811/detailed', 'Para hacer ensalada de quinoa y pollo a la parrilla, necesitarás los siguientes ingredientes:\r\n-1/2 taza de quinua (enjuagada)\r\n-1/2 taza de quinua (enjuagada)\r\n-1 taza de agua\r\n-1 pechuga de pollo deshuesada y sin piel\r\n-2 tazas de verduras mixtas (espinacas, rúcula, col rizada, etc.)\r\n-1/2 taza de tomates cherry, cortados por la mitad\r\n-1/4 pepino, rebanado\r\n-1/4 pimiento rojo, cortado en cubitos\r\n-1/4 aguacate, en rodajas\r\n-1 cucharada de aceite de oliva\r\n-1 cucharada de vinagre balsámico\r\n-Sal y pimienta para probar\r\n-Opcional: hierbas frescas como albahaca o perejil para decorar\r\nA continuación te explicamos cómo preparar la ensalada de quinua y pollo asado:\r\n1.⁠ ⁠Preparar la Quinua: Poner en una cacerola la quinoa y el agua. Deje hervir, luego reduzca el fuego a bajo, cubra y cocine a fuego lento durante 15 a 20 minutos, o hasta que la quinua esté cocida y se absorba el agua. Revuelva con un tenedor y déjelo enfriar.\r\n2.⁠ ⁠Pollo a la parrilla: Sazone la pechuga de pollo con sal, pimienta y las hierbas o especias que desee. Calienta una sartén o sartén a fuego medio-alto. Cocine el pollo durante 5 a 7 minutos por cada lado, o hasta que esté bien cocido y ya no esté rosado en el centro. Déjalo reposar unos minutos y luego córtalo en tiras.\r\n3.⁠ ⁠Preparar la ensalada: En un tazón grande, combine la quinua cocida, las verduras mixtas, los tomates cherry, el pepino, el pimiento rojo y el aguacate en rodajas. Mezcle suavemente para combinar.\r\n4.⁠ ⁠Prepare el aderezo: En un tazón pequeño, mezcle el aceite de oliva, el vinagre balsámico, la sal y la pimienta para hacer el aderezo.\r\n5.⁠ ⁠Servir: Divida la ensalada en platos o tazones para servir. Cubra con tiras de pollo asado. Rocíe con el aderezo preparado. Adorne con hierbas frescas si lo desea.\r\nEsta ensalada proporciona un buen equilibrio de carbohidratos complejos de la quinua, proteínas magras del pollo, grasas saludables del aguacate y aceite de oliva, y mucha fibra y nutrientes de las verduras. Es una comida nutritiva y satisfactoria y también es una opción perfecta para preparar comidas, ya que puedes comerla al día siguiente.\r\n-Proteína: Aproximadamente 34g\r\n-Grasa: Aproximadamente 27,2 g\r\n-Carbohidratos: Aproximadamente 39,5g', 'Almuerzos'),
(5, 'PASTA INTEGRAL CON SALSA DE TOMATE Y ESPINACAS', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/cfd811686b4d43c6b795b6e51195d199/detailed', 'Opción vegetariana\r\nPara hacer pasta integral con salsa de tomate y espinacas, necesitarás los siguientes ingredientes:\r\n-2 tazas de pasta integral (como pasta integral o de arroz integral)\r\n-2 cucharadas de aceite de oliva\r\n-3 dientes de ajo picados\r\n-1/2 cebolla, picada\r\n-1 lata (14 oz) de tomates cortados en cubitos (sin azúcar agregada)\r\n-2 tazas de hojas de espinacas frescas\r\n-1/2 cucharadita de orégano seco\r\n-1/2 cucharadita de albahaca seca\r\n-Sal y pimienta para probar\r\n-Queso parmesano rallado (opcional para cubrir)\r\nA continuación se explica cómo preparar pasta integral con salsa de tomate y espinacas:\r\n1.⁠ ⁠Cocinar la pasta: Cocine la pasta integral según las instrucciones del paquete hasta que esté al dente. Escurrir y reservar.\r\n2.⁠ ⁠Preparar la salsa: En una sartén grande, caliente el aceite de oliva a fuego medio. Agregue el ajo picado y la cebolla picada y saltee hasta que estén tiernos y fragantes, aproximadamente de 2 a 3 minutos.\r\n3.⁠ ⁠Agregar tomates: Agrega los tomates cortados en cubitos (con su jugo) a la sartén. Revuelva bien para combinar con el ajo y la cebolla. Deje que la mezcla hierva a fuego lento durante unos 5 minutos, revolviendo ocasionalmente.\r\n4.⁠ ⁠Agregue las espinacas y los condimentos: Agregue las hojas frescas de espinaca a la sartén y revuelva hasta que se ablanden. Sazone la salsa con orégano seco, albahaca seca, sal y pimienta. Revuelva para combinar y deje cocinar a fuego lento durante otros 2-3 minutos.\r\n5.⁠ ⁠Combine la pasta y la salsa: Agregue la pasta integral cocida a la sartén con la salsa de tomate y espinacas. Mezcle bien para cubrir la pasta uniformemente con la salsa.\r\n6.⁠ ⁠Servir: Divida la pasta y la salsa en tazones para servir. Opcionalmente, espolvorea con queso parmesano rallado para darle más sabor.\r\nEste plato tiene un alto contenido de fibra procedente de la pasta integral y las espinacas, y está repleto de antioxidantes y vitaminas procedentes de los tomates y las espinacas. El uso de pasta integral ayuda a mantener estables los niveles de azúcar en sangre, lo que la convierte en una opción apta para el síndrome de ovario poliquístico. Además, es rápido y fácil de preparar, lo que lo hace perfecto para las noches ocupadas entre semana.\r\n-Proteína: Aproximadamente 14-19g\r\n-Grasa: Aproximadamente 30-31g\r\n-Carbohidratos: Aproximadamente 76-90g', 'Cenas'),
(6, 'PARFAIT DE YOGUR GRIEGO:', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/6fff8496fe26d31e27d53f3b5ed0690d/detailed', 'Opción vegetariana\r\nPara hacer parfait de yogur griego, necesitarás los siguientes ingredientes:\r\n-1 taza de yogur griego\r\n-1 cucharada de semillas de chía\r\n-1 taza de frutos rojos mixtos\r\n-Opcional: almendras, pipas de calabaza, nueces\r\nA continuación se explica cómo preparar el parfait de yogur griego:\r\n-Comience con 1 taza de yogur griego, que aporta alrededor de 20 gramos de proteína.\r\n-Agregue 1 cucharada de semillas de chía para obtener 3 gramos adicionales de proteína y un aumento de ácidos grasos omega-3.\r\n-Cubra el yogur y las semillas de chía con una mezcla de bayas, como fresas, arándanos y frambuesas. Las bayas tienen menos azúcar en comparación con otras frutas.\r\n-Cúbrelo con una pizca de nueces o semillas para que quede más crujiente. Las opciones incluyen almendras en rodajas, semillas de calabaza o nueces.\r\nEste parfait de yogur griego es una opción de desayuno deliciosa y satisfactoria, rica en proteínas, fibra y grasas saludables. Proporciona un buen equilibrio de macronutrientes y se puede personalizar con tus aderezos y sabores favoritos. Recuerde elegir yogur griego bajo en azúcares añadidos y opte por versiones naturales o ligeramente endulzadas para mantener bajo control el contenido de azúcar. Puedes elegir y cambiar frutas a tu gusto.\r\n-Proteína: Aproximadamente 26,25g\r\n-Grasa: Aproximadamente 24,75g\r\n-Carbohidratos: Aproximadamente 37,25g', 'Desayunos'),
(7, 'TORTITAS DE PROTEÍNA:', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/c626023b8f78c4307beb13518962f485/detailed', 'Opción vegetariana\r\nPara hacer panqueques proteicos, necesitarás los siguientes ingredientes:\r\n-1 taza de copos de avena o harina de avena\r\n-1 cucharada de tu proteína en polvo favorita (aproximadamente 20 gramos de proteína)\r\n-1 plátano maduro\r\n-2 huevos\r\n-1/2 taza de leche (láctea o vegetal)\r\n-1 cucharadita de levadura en polvo\r\n-Opcional: aromas adicionales como canela, extracto de vainilla o una pizca de sal.\r\nA continuación te explicamos cómo preparar las tortitas proteicas:\r\n1.⁠ ⁠En una licuadora o procesador de alimentos, combine los copos de avena o la harina de avena, la proteína en polvo, el plátano, los huevos, la leche y el polvo para hornear. Licúa hasta tener una masa suave. Si la masa queda demasiado espesa, puedes agregar un poco más de leche hasta alcanzar la consistencia deseada.\r\n2.⁠ ⁠Calienta una sartén o plancha antiadherente a fuego medio. Cubra ligeramente la superficie con aceite en aerosol o una pequeña cantidad de aceite.\r\n3.⁠ ⁠Vierta aproximadamente 1/4 taza de la masa para panqueques en la sartén para cada panqueque. Puedes hacerlos más grandes o más pequeños según tus preferencias.\r\n4.⁠ ⁠Cocina los panqueques durante unos minutos hasta que empiecen a formarse burbujas en la superficie. Voltéelos con cuidado y cocínelos durante aproximadamente un minuto más hasta que estén bien cocidos y dorados.\r\n5.⁠ ⁠Repita el proceso con la masa restante, agregando más aceite en aerosol o aceite a la sartén según sea necesario.\r\n6.⁠ ⁠Sirve los panqueques proteicos calientes y cúbrelos con tus aderezos favoritos. Algunas opciones nutritivas y deliciosas incluyen bayas frescas, plátanos en rodajas, una cucharada de yogur griego, un chorrito de miel o jarabe de arce, o una pizca de nueces o semillas para darle un toque más crujiente.\r\nEstos panqueques proteicos no solo son una opción de desayuno sabrosa y satisfactoria, sino que también brindan una buena cantidad de proteínas para ayudarlo a mantenerse lleno y con energía durante toda la mañana.\r\n-Proteínas: 48,3g\r\n-Grasa: Aproximadamente 18-19g\r\n-Carbohidratos: Aproximadamente 93-98g', 'Desayunos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` smallint(6) UNSIGNED NOT NULL,
  `password` varchar(1000) NOT NULL,
  `user_type` enum('Admin','client') NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `password`, `user_type`, `email`) VALUES
(6, 'pbkdf2:sha256:600000$7kZKfmxtv3TPQOuhFF6vX6svfdwduC$c9ae086ccb2f56cad9b1db44ef4b52cdc96c8eff57ca4b8d56b819a7d09d8604', 'Admin', 'admin@h.com'),
(7, 'pbkdf2:sha256:600000$AJUZFsa77g22Y519uMBGsSrrNSuxAF$51ddbb590d0f06aa9ca63d1f7c7400d20d9063366dff081181aef66a05de7753', 'client', 'susana@h.com'),
(8, 'pbkdf2:sha256:600000$On7AXU3p4jUAWE9aiDNSlgsFmelLBC$d16d6f00310d20d9199eed78b1d9d38986f62d36be6147cf691e89e29c299186', 'client', 'antonia@h.com'),
(10, 'pbkdf2:sha256:600000$ZXVyvc8a02BtbtuY4py1kGmTgVIP5M$54317253d6fdb9d74f4fe63d2e5cd6257bf3aad0a36791d025565d6c36f4cbeb', 'client', 'hache@h.com'),
(11, 'pbkdf2:sha256:600000$XBxzahSNriNvJOsO9FxQbfdo8zCsBQ$e44dc5ddc445701692c436800e56820661487c20134e4c5404fdb2c8c7258ea7', 'client', 'faby@h.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video`
--

CREATE TABLE `video` (
  `id_video` smallint(6) UNSIGNED NOT NULL,
  `title` varchar(200) NOT NULL,
  `link` varchar(200) NOT NULL,
  `category` enum('Yoga','Pilates') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `video`
--

INSERT INTO `video` (`id_video`, `title`, `link`, `category`) VALUES
(3, ' DAY 1 - PCOS WORKOUT', 'https://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/284c37c638874d29401f4f79404b5479/detailed', 'Yoga'),
(4, 'DAY 2  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/1b7037248ce73697d63c45686dc33a16/detailed', 'Yoga'),
(5, 'DAY 3  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/2b808acc6c3d458610ab8c1c60f98b30/detailed', 'Yoga'),
(6, 'DAY 4  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/32b05b2a66a8674aaf976a11537958ca/detailed', 'Yoga'),
(7, 'DAY 5  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/2807b118384cd41e5a576703c0f93ab5/detailed', 'Yoga'),
(8, 'DAY 6  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/f71b75ea4cf7b073841a91e57e8a57cd/detailed', 'Yoga'),
(9, 'DAY 7  - PCOS WORKOUT\r\n', '\r\nhttps://res-console.cloudinary.com/dxvsn6u72/media_explorer_thumbnails/e371f92a22542b388f3baace5298cef5/detailed', 'Yoga');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id_person`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `qa`
--
ALTER TABLE `qa`
  ADD PRIMARY KEY (`id_qa`);

--
-- Indices de la tabla `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id_recipe`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `email` (`email`);

--
-- Indices de la tabla `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id_video`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
  MODIFY `id_person` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `qa`
--
ALTER TABLE `qa`
  MODIFY `id_qa` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id_recipe` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `video`
--
ALTER TABLE `video`
  MODIFY `id_video` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `person` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
