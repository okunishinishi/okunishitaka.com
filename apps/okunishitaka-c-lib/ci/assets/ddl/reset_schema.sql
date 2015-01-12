SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


-- -----------------------------------------------------
-- Create schema ok-c
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ok-c` ;
CREATE SCHEMA IF NOT EXISTS `ok-c` ;
USE `ok-c` ;

-- Create table `ok-c`.`BLOG` --
CREATE TABLE IF NOT EXISTS `ok-c`.`BLOG` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`blog_title` VARCHAR(255),
`blog_content` VARCHAR(255),

PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c`.`BLOG` AUTO_INCREMENT = 1;
-- Create table `ok-c`.`BLOG_TAG` --
CREATE TABLE IF NOT EXISTS `ok-c`.`BLOG_TAG` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`blog_id` SMALLINT,
`tag_text` VARCHAR(255),
INDEX `blog_id_index` (`blog_id` ASC), INDEX `tag_text_index` (`tag_text` ASC), 
FOREIGN KEY (`blog_id`) REFERENCES `BLOG`(`_id`) ON DELETE CASCADE,
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c`.`BLOG_TAG` AUTO_INCREMENT = 1;
-- Create table `ok-c`.`SCORE` --
CREATE TABLE IF NOT EXISTS `ok-c`.`SCORE` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`answer_id` SMALLINT,
`user_id` SMALLINT,
`star_count` SMALLINT,
INDEX `answer_id_index` (`answer_id` ASC), INDEX `user_id_index` (`user_id` ASC), 
FOREIGN KEY (`answer_id`) REFERENCES `ANSWER`(`_id`) ON DELETE CASCADE,
FOREIGN KEY (`user_id`) REFERENCES `USER`(`_id`) ON DELETE CASCADE,
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c`.`SCORE` AUTO_INCREMENT = 1;
-- Create table `ok-c`.`SESSION` --
CREATE TABLE IF NOT EXISTS `ok-c`.`SESSION` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`session_id` VARCHAR(255),
`session_data` TEXT(65535),
`expire_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
INDEX `session_id_index` (`session_id` ASC), INDEX `expire_date_index` (`expire_date` ASC), 
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c`.`SESSION` AUTO_INCREMENT = 1;
-- -----------------------------------------------------
-- Create schema ok-c-test
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ok-c-test` ;
CREATE SCHEMA IF NOT EXISTS `ok-c-test` ;
USE `ok-c-test` ;

-- Create table `ok-c-test`.`BLOG` --
CREATE TABLE IF NOT EXISTS `ok-c-test`.`BLOG` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`blog_title` VARCHAR(255),
`blog_content` VARCHAR(255),

PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c-test`.`BLOG` AUTO_INCREMENT = 1;
-- Create table `ok-c-test`.`BLOG_TAG` --
CREATE TABLE IF NOT EXISTS `ok-c-test`.`BLOG_TAG` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`blog_id` SMALLINT,
`tag_text` VARCHAR(255),
INDEX `blog_id_index` (`blog_id` ASC), INDEX `tag_text_index` (`tag_text` ASC), 
FOREIGN KEY (`blog_id`) REFERENCES `BLOG`(`_id`) ON DELETE CASCADE,
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c-test`.`BLOG_TAG` AUTO_INCREMENT = 1;
-- Create table `ok-c-test`.`SCORE` --
CREATE TABLE IF NOT EXISTS `ok-c-test`.`SCORE` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`answer_id` SMALLINT,
`user_id` SMALLINT,
`star_count` SMALLINT,
INDEX `answer_id_index` (`answer_id` ASC), INDEX `user_id_index` (`user_id` ASC), 
FOREIGN KEY (`answer_id`) REFERENCES `ANSWER`(`_id`) ON DELETE CASCADE,
FOREIGN KEY (`user_id`) REFERENCES `USER`(`_id`) ON DELETE CASCADE,
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c-test`.`SCORE` AUTO_INCREMENT = 1;
-- Create table `ok-c-test`.`SESSION` --
CREATE TABLE IF NOT EXISTS `ok-c-test`.`SESSION` (
`_id` SMALLINT NOT NULL AUTO_INCREMENT,
`_at` TIMESTAMP(6),
`_vr` SMALLINT,
`session_id` VARCHAR(255),
`session_data` TEXT(65535),
`expire_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
INDEX `session_id_index` (`session_id` ASC), INDEX `expire_date_index` (`expire_date` ASC), 
PRIMARY KEY (`_id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `ok-c-test`.`SESSION` AUTO_INCREMENT = 1;


