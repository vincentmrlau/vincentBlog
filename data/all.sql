-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vincentblog
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `class` char(255) NOT NULL,
  `title` text NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `href` text NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'tech','谈谈移动端页面性能优化方案',NULL,'http://www.jiangweishan.com/article/Mobile-Optimization.html','2017-01-20 05:03:24','2017-01-20 05:03:24'),(2,'tech','webpack+react+nodejs服务端渲染','','http://www.jianshu.com/p/97af0000516a','2017-01-20 05:04:33','2017-01-20 05:04:33'),(3,'tech','react入门',NULL,'http://www.runoob.com/react/react-tutorial.html','2017-01-20 05:04:33','2017-01-20 05:04:33'),(4,'other','阿祖外设 iKBC C87 G87透光PBT键帽游戏樱桃机械键盘',NULL,'https://item.taobao.com/item.htm?spm=a1z09.2.0.0.zdMgPJ&id=523059531849&_u=k4opdsia0f0','2017-01-20 05:20:55','2017-01-20 05:20:55'),(5,'other','wallpaperscraft',NULL,'http://wallpaperscraft.com/','2017-01-20 05:20:55','2017-01-20 05:20:55'),(6,'other','花瓣',NULL,'http://huaban.com/','2017-01-20 05:20:55','2017-01-20 05:20:55');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `blog_id` int(16) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nickname` text NOT NULL,
  `content` text NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,'413893093@qq.com','刘一男','啊飒飒的高速阿斯顿阿斯顿阿斯顿爱上爱上，按时大大 阿斯顿，asdas。','2017-02-07 10:41:21','2017-02-07 10:41:21'),(2,1,'413893093@qq.com','刘一男','啊飒飒的高速阿斯顿阿斯顿阿斯顿爱上爱上，按时大大 阿斯顿，asdas。','2017-02-07 10:43:36','2017-02-07 10:43:36'),(3,2,'413893093@qq.com','刘一男','啊飒飒的高速阿斯顿阿斯顿阿斯顿爱上爱上，按时大大 阿斯顿，asdas。','2017-02-08 08:22:38','2017-02-08 08:22:38'),(4,1,'413893093@qq.com','刘一男','你好','2017-02-08 08:26:55','2017-02-08 08:26:55'),(5,2,'413893093@qq.com','刘一男','你好','2017-02-08 08:28:37','2017-02-08 08:28:37'),(9,2,'413893093@qq.com','刘一男','nihao','2017-02-08 08:39:32','2017-02-08 08:39:32'),(13,4,'413893093@qq.com','刘一男','好键盘','2017-02-08 09:09:58','2017-02-08 09:09:58');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paper_tag`
--

DROP TABLE IF EXISTS `paper_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paper_tag` (
  `id` int(16) unsigned NOT NULL AUTO_INCREMENT,
  `tag_id` varchar(255) NOT NULL,
  `blog_id` varchar(255) NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paper_tag`
--

LOCK TABLES `paper_tag` WRITE;
/*!40000 ALTER TABLE `paper_tag` DISABLE KEYS */;
INSERT INTO `paper_tag` VALUES (1,'client','1','2017-01-20 05:50:15','2017-01-20 05:50:15'),(2,'performance','1','2017-01-20 05:50:15','2017-01-20 05:50:15'),(3,'sever','2','2017-01-20 05:50:15','2017-01-20 05:50:15'),(4,'frame','2','2017-01-20 05:50:15','2017-01-20 05:50:15'),(5,'client','2','2017-01-20 05:50:15','2017-01-20 05:50:15'),(6,'dev-tool','2','2017-01-20 05:50:15','2017-02-06 08:57:24'),(7,'client','3','2017-01-20 05:50:15','2017-01-20 05:50:15'),(8,'frame','3','2017-01-20 05:50:15','2017-01-20 05:50:15'),(9,'toy','4','2017-01-20 05:50:15','2017-01-20 05:50:15'),(10,'website','5','2017-01-20 05:50:15','2017-01-20 05:50:15'),(11,'website','6','2017-01-20 05:50:15','2017-01-20 05:50:15');
/*!40000 ALTER TABLE `paper_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `tag_id` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `tag_id` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES ('client','client','2017-01-20 05:18:50','2017-01-20 05:18:50'),('dev-tool','dev-tool','2017-01-20 05:18:50','2017-02-06 08:48:56'),('frame','frame','2017-01-20 05:18:50','2017-01-20 05:18:50'),('movie','movie','2017-01-20 05:18:50','2017-01-20 05:18:50'),('performance','performance','2017-01-20 05:18:50','2017-01-20 05:18:50'),('sever','sever','2017-01-20 05:18:50','2017-01-20 05:18:50'),('toy','toy','2017-01-20 05:18:50','2017-01-20 05:18:50'),('website','website','2017-01-20 05:18:50','2017-01-20 05:18:50');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `nickname` text,
  `createdAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('413893093@qq.com','111','刘一男','2017-02-06 09:10:32','2017-02-06 09:10:32'),('asd@asd.asd','aaasd','asd','2017-01-19 15:20:57','2017-01-19 15:20:57'),('haha@ha.ha','123','刘奕满','2017-01-19 15:24:29','2017-01-19 15:24:29'),('liuyiman11@qq.com','123','liuuyasdas','2017-01-19 09:13:56','2017-01-19 09:13:56'),('liuyiman2@qq.com','111111','liuyiman','2017-01-19 15:48:42','2017-01-19 15:48:42'),('liuyiman@qq.com','123','liuuyasdas','2017-01-19 09:38:41','2017-01-19 09:38:41'),('liuyimans@qq.com','asd','liuuyiman','2017-01-19 15:12:49','2017-01-19 15:12:49'),('memeda@suaj.jsn','1111','黄金时间难受不睡觉时间','2017-01-19 15:55:56','2017-01-19 15:55:56');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vincentblog'
--

--
-- Dumping routines for database 'vincentblog'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-09 13:02:08
