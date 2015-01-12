SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- Users for schema ok-c
grant all on `ok-c`.* to 'ok-c-ci'@'localhost' identified by 'ok-c-ci';
grant all on `ok-c`.* to 'ok-c-web'@'localhost' identified by 'ok-c-web';

-- Users for schema ok-c-test
grant all on `ok-c-test`.* to 'ok-c-ci'@'localhost' identified by 'ok-c-ci';
grant all on `ok-c-test`.* to 'ok-c-test'@'localhost' identified by 'ok-c-test';

