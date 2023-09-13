-- creation and relationship the tables
CREATE TABLE SHOP
(
    id VARCHAR(255),
    name VARCHAR(25),
    location VARCHAR(20),
    address        VARCHAR(50),
    CONSTRAINT PK_shops PRIMARY KEY (id)
);

CREATE TABLE PRODUCT
(
    id  VARCHAR(255),
    name VARCHAR(25),
    category VARCHAR(15),
    stock INT,
    price INT,
    image VARCHAR(255),
    CONSTRAINT PK_products PRIMARY KEY(id)
);

-- table intermediate
CREATE TABLE PRODUCT_SHOP
(
    product_id VARCHAR(255),
    shop_id VARCHAR(255),
    CONSTRAINT PK_products_shops PRIMARY KEY (product_id, shop_id),
    CONSTRAINT FK__products FOREIGN KEY (product_id) REFERENCES PRODUCT(id),
    CONSTRAINT FK_shops FOREIGN KEY (shop_id) REFERENCES SHOP(id)
)