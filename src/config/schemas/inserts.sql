-- insertar datos de shops 
INSERT INTO SHOP(id, name, location, address)
VALUES
('101','Shop A','[-34.6118, -58.4173]','Av. Principal 123, Ciudad A, Argentina'),
('102','Shop B','[-32.9500, -60.6500]','Calle 1, Barrio X, Ciudad B, Argentina'),
('103','Shop C','[-31.4167, -64.1833]','Av. Comercial 456, Ciudad C, Argentina'),
('104','Shop D','[-27.4500, -58.9833]','Calle de las Frutas 789, Ciudad D, Argentina'),
('105','Shop E','[-38.4167, -63.6167]','Av. Principal 987, Ciudad E, Argentina');

-- insertar datos de productos
INSERT INTO PRODUCT(id, name, category,stock, price, image)
VALUES
('1','Apple','Fruits',100, 2.99,'https://drive.google.com/file/d/1y90NdJ597ECtVoOj99z3xp3mSl4llanE/view'),
('2','Rice','Grains',200, 1.49,'https://drive.google.com/file/d/1upydRUQvyHwWXXrpDBE_TZ41l3aEQBOy/view?usp=drive_link'),
('3','Milk','Dairy',50, 2.29,'https://drive.google.com/file/d/11ggRaosRrdqtDfskT7gm6ebfTYkW4Ltp/view?usp=drive_link'),
('4','Chicken','Meat',20, 5.99,'https://drive.google.com/file/d/1WdyLs52JHcNe8m1Yu9X6pn3E5UXsaqdt/view?usp=drive_link'),
('5','Whole Wheat Bread','Bakery',40,3.49,'https://drive.google.com/file/d/1GS9iCQ3_U8StX7ttuJBqfs8gSxS-p-tW/view?usp=drive_link'),
('6','Carrots','Vegetables',60, 1.79,'https://drive.google.com/file/d/1pal6dGEeex1q-1xkt81U2gajskltPCkf/view?usp=drive_link'),
('7', 'Yogurt', 'Dairy', 25, 1.99, 'https://drive.google.com/file/d/1xGFxO7r2EPdxLuh7gMOei27Y0zvXpSim/view?usp=drive_link'),
('8', 'Crepe Tuna', 'Seafood', 15, 2.49, 'https://drive.google.com/file/d/1ma0CQp9gPvUt6XlaWJQOrWumylzphQ7X/view?usp=drive_link'),
('9', 'Coffee', 'Beverages', 50, 4.99, 'https://drive.google.com/file/d/14tukDEkEeV-bVf7v4a90gd8MiQmfV2Nk/view?usp=drive_link'),
('10', 'Eggs', 'Dairy', 35, 1.99, 'https://drive.google.com/file/d/1yQEvq8bA9knNulcr9_pt6LvonT2AyImJ/view?usp=drive_link');

-- insertar tabla intermediaria product-shop
INSERT INTO PRODUCT_SHOP(product_id,shop_id)
VALUES
(1,101),
(1,102),
(1,103),
(2,102),
(2,104),
(2,105);


