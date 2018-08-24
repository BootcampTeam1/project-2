DROP DATABASE IF EXISTS budget_db;
CREATE DATABASE budget_db;
USE budget_db;



CREATE TABLE budgets (
    id INT NOT NULL AUTO_INCREMENT,
    user_login VARCHAR(25) NOT NULL,
    user_name VARCHAR(50),
    total_balance DECIMAL(10,2) default 0,
    rent DECIMAL(10,2) default 0,
    utilities DECIMAL(10,2) default 0,
    food_groceries DECIMAL(10,2) default 0, 
    entertainment DECIMAL(10,2) default 0,
    insurance_medical DECIMAL(10,2) default 0,
    PRIMARY KEY (id)
);