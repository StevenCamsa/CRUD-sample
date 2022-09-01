CREATE DATABASE usertesting;



CREATE TABLE testing2 (
    ID SERIAL PRIMARY KEY,
    entity varchar (200),
     details varchar (200)   
);

INSERT INTO testing2(entity, details)
VALUES ('circle', 'object');

INSERT INTO testing2(entity, details)
VALUES ('triangle', 'object');

INSERT INTO testing2(entity, details)
VALUES ( 'coke', 'drinks');

INSERT INTO testing2(entity, details)
VALUES ( 'apple', 'fruits');