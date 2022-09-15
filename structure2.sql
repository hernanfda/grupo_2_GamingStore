CREATE DATABASE  IF NOT EXISTS `gXperience` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gXperience`;

-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (arm64)
--
-- Host: localhost    Database: gXperience
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Logitech'),(2,'Reddragon'),(3,'Secretlab'),(4,'Corsair');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Keyboard'),(2,'Mouse'),(3,'Headset'),(4,'Chair');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(100) NOT NULL,
  `price` mediumint NOT NULL,
  `image` varchar(300) NOT NULL,
  `offer` tinyint NOT NULL,
  `popular` tinyint NOT NULL,
  `description` text NOT NULL,
  `category_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'G413',10499,'Product_Keyboard_Logitech_G413_1.webp',0,1,'Teclado mecánico con retroiluminación para juegos',1,1),(2,'FIZZ K617',8499,'Product_Keyboard_REDRAGON_FIZZ_K617_1.webp',1,0,'Teclado RGB 60%',1,2),(3,'STORM M808',6299,'Product_Mouse_REDRAGON_STORM_M808_1.webp',1,0,'Mouse inalámbrico recargable',2,2),(4,'PRO WIRELESS',9499,'Product_Mouse_Logitech_PRO_1.webp',0,1,'Mouse inalámbrico con tecnologia lightspeed',2,1),(5,'H510 ZEUS-X',10799,'Product_Headset_REDRAGON_H510_ZEUS-X_1.webp',0,0,'Headset con retroiluminación RGB',3,2),(6,'G733',21799,'Product_Headset_Logitech_G733_1.webp',0,1,'Audífonos inalámbricos con micrófono ultraligeros',3,1),(7,'TITANXL',38000,'Product_GamingChairs_SecretLab_TitanXL_01.webp',0,0,'Silla gamer con mecanismos de núcleo doblemente reforzados',4,3),(8,'T3 RUSH',84899,'Product_GamingChairs_Corsair_T3_RUSH_01.webp',1,0,'Silla para juegos con diseño cómodo, color gris y carbón',4,4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
INSERT INTO `user_profiles` VALUES (1,'user'),(2,'super'),(3,'seller');
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) UNIQUE NOT NULL,
  `birth_date` date NOT NULL,
  `user_password` text NOT NULL,
  `user_avatar` text NOT NULL,
  `user_profile_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_id` (`user_profile_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'User','Common','user@gmail.com','2022-02-22','$2a$10$oznST5P1rm634BMn79tU9O2DOapuaIhQAP/dyUlWr/o0B3IoXcngG','userAvatar-1660705734022-Dope-PC-Wallpaper-4k.jpg',1),(2,'Admin','Super','super@gmail.com','2022-02-22','$2a$10$B2RW5y5SVU0vppEMQH62/On9erEB3JZANfDaVRsbOGQLUfLB/zYaK','userAvatar-1660875094875-head2.png',2),(3,'Admin','Seller','seller@gmail.com','2022-02-22','$2a$10$B2RW5y5SVU0vppEMQH62/On9erEB3JZANfDaVRsbOGQLUfLB/zYaK','userAvatar-1660875094875-head2.png',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gXperience'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-08 23:59:39
