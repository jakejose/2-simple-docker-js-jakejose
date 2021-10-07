show databases;
use newDB;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    yearPublished int check (yearPublished between 0 and 2022),
    publisher varchar(255),
    pageCount int,
    MRP varchar(20));


INSERT INTO books (title, author, yearPublished, publisher, pageCount, MRP) VALUES 
('The Godfather (The Book)', 'Mr. Godfather',1980,'	Godfather Publishing',300,'$2.00'),
('How to Pass MSIS', 'Kelley School of Business',2000,'IU',2143,'$10.99'),
('Intro to Github', 'Github Master',2015,'Githubiscool Books',123,'$5.00'),
('Being a Doctor for Dummies', 'Dr. Lego',2020,'Dr. Lego (Self Published)',5000,'$100.00'),
('Doctor 101', 'Dr. Lego Sr.',1980,'Lego Books',3405,'$91.99');