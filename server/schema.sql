CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(15),
  text varchar(255),
  roomname varchar(20)
);

 -- Create other tables and define schemas for them here!

-- CREATE TABLE users (
--   username varchar(15),
--   friends
-- );


-- user table? (username, friends)

 --  Execute this file from the command line by typing:
 -- *    mysql -u root < server/schema.sql
 -- *  to create the database and the tables.

