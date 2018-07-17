DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO items (quantity, description) VALUES(1, 'walk the dog');
INSERT INTO items (quantity, description) VALUES(2, 'eat shit');
INSERT INTO items (quantity, description) VALUES(3, 'die');
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
