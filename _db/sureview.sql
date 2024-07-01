-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: localhost    Database: sureview
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `TBL_DEVICE`
--

DROP TABLE IF EXISTS `TBL_DEVICE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TBL_DEVICE` (
  `DEVICE_ID` char(4) NOT NULL,
  `IP_ADDRESS` varchar(100) DEFAULT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`DEVICE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TBL_DEVICE`
--

LOCK TABLES `TBL_DEVICE` WRITE;
/*!40000 ALTER TABLE `TBL_DEVICE` DISABLE KEYS */;
INSERT INTO `TBL_DEVICE` VALUES ('1','192.08.177.81','Red Lion'),('1980','192.08.177.84','Installation 1'),('1984','192.08.177.85','Installation 2'),('1985','192.09.177.00','NSA'),('1986','192.08.177.90','Car garage'),('1987','192.08.177.91','Installation 5'),('1988','192.08.177.92','Installation 6'),('1989','192.08.177.83','Installation 7'),('1990','192.08.177.100','Installation 8'),('1991','192.08.177.101','Arundels'),('1992','192.08.177.102','Co-op, Bridgerton'),('1993','192.08.177.103','Installation 11'),('1994','192.08.177.104','Installation 12'),('1995','192.08.177.105','Installation 13'),('1996','192.08.177.201','Whistlers'),('1997','192.08.177.202','Installation 15'),('1998','192.08.177.203','Garrisons'),('1999','192.08.177.204','Peterborough Barracks'),('2','192.08.177.82','Joes Place'),('2000','192.08.177.305','Installation 18'),('2001','192.08.177.206','Installation 19');
/*!40000 ALTER TABLE `TBL_DEVICE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TBL_DEVICE_CAMERA`
--

DROP TABLE IF EXISTS `TBL_DEVICE_CAMERA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TBL_DEVICE_CAMERA` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DEVICE_ID` char(4) DEFAULT NULL,
  `CAMERA_NUMBER` int DEFAULT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_DEVICE_ID_idx` (`DEVICE_ID`),
  CONSTRAINT `FK_DEVICE_ID` FOREIGN KEY (`DEVICE_ID`) REFERENCES `TBL_DEVICE` (`DEVICE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TBL_DEVICE_CAMERA`
--

LOCK TABLES `TBL_DEVICE_CAMERA` WRITE;
/*!40000 ALTER TABLE `TBL_DEVICE_CAMERA` DISABLE KEYS */;
INSERT INTO `TBL_DEVICE_CAMERA` VALUES (12,'1',1,'Front door'),(13,'1',2,'Alley'),(14,'1',3,'Garage'),(15,'2',2,'Side door'),(16,'1980',1,'Front door'),(17,'1980',2,'Back door'),(18,'1985',1,'Front Door Camera'),(19,'1984',1,'Front of reception'),(20,'1984',2,'House'),(21,'1984',3,'Side door'),(22,'1984',4,'Alleyway'),(23,'1990',1,'Ginnell'),(24,'1991',1,'Rear entrance'),(25,'1991',2,'Front entrance'),(26,'1991',3,'Rear exit'),(27,'1994',1,'Front of reception'),(28,'1994',2,'House'),(29,'1996',1,'Side door'),(30,'1997',1,'Alleyway'),(31,'1998',1,'Ginnell'),(32,'1999',1,'Rear entrance'),(33,'1999',2,'Entrance'),(34,'1999',3,'Exit');
/*!40000 ALTER TABLE `TBL_DEVICE_CAMERA` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-29  9:52:59
