CREATE DATABASE if not exists cowlist;

USE cowlist;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT,
  `name` TEXT(40) NOT NULL,
  `description` TEXT(200) DEFAULT NULL,
  Primary Key(id)
);

