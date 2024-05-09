# SQL (Structured Query Language)

### What is SQL?
* SQL stands for Structured Query Language
* SQL lets you access and manipulate databases
* SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).

### Key Concepts:

* **Database:** A structured set of data held in a computer, especially one that is accessible in various ways.
* **Tables:** In SQL, data is stored in tables, which are collections of related data held in a structured format.
* **Rows:** Each record in a table is known as a row. It contains data about a specific entity.
* **Columns:** Columns represent the attributes or fields of the data stored in a table.
* **Primary Key:** A column or a set of columns that uniquely identifies each row in a table. It must contain unique values and cannot contain null values.
* **Foreign Key:** A column or a set of columns in one table that references the primary key columns in another table. It establishes a link between the two tables.

### OPERATION IN SQL:

Like all databases it follows CRUD Operations which means :
**C: Create**
**R: Read**
**U: Update**
**D: Delete/Destroy**

So we will be discussing one by one here.
Lets start with C i.e. Create

#### 1. Create: 
In create, a new table in the database.

**Syntax:**
```sql
CREATE TABLE table_name(
    colume1 datatype,
    colume2 datatype,
    ........,
    .......
    )
```
Here, datatype can be int , char , string , etc.
Provide commas after each colume declearation.

Example: Lets table name be products, and we are creating colume like id, name , price.
```sql
CREATE TABLE products (
    id INT  NOT NULL,
    name String,
    price money,
  	PRIMARY KEY (id)
);
```
Here , 
* table is created with table name products.
* three columne is made of name id, name, price
* each columne has assign a data 

**Insert:**
Used to insert values in table
```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

#### 2. Read: 
The SELECT statement is used to select data from a database.
```sql
SELECT * FROM table_name
```
Here, * represent it can acess all attributes from table.

Example: let table name be product the data under products table will be shown.
```sql
SELECT * from products
```

```sql
SELECT column1, column2, ...
FROM table_name;
```
Here, column1, column2, ... are the field names of the table you want to select data from.

The table_name represents the name of the table you want to select data from.
Example:
```sql
SELECT name, price, 
FROM products;
```
WHERE is also used for more speific values
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

#### 3. Update:
Used to modify existing records in a table.

Syntax:
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

Example:
```sql
UPDATE products
SET name = 'Pen', price = 5, 
WHERE id=1;
```

**Insert new colume:**
 Used to modify an existing table.
```sql
ALTER TABLE table_name
ADD column_name datatype;
```

#### 4. Delete/Destroy:
```sql
DROP TABLE table_name;
```
Used to delete an existing table.   
The DELETE statement is used to delete existing records in a table.
**Syntax:**
```sql
DELETE FROM table_name WHERE condition;
```

### FOREIGN KEY:
* The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

* A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

```sql
CREATE TABLE products (
  id int not null,
  name String,
  price money,
  stock int,
  PRIMARY key (id)
 )

CREATE TABLE users (
  id int not null,
  name String,
  address String,  
  PRIMARY key (id)
 )

CREATE TABLE orders (
  id INT PRIMARY KEY NOT NULL,
  order_id INT,
  product_id INT,
  user_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### INNER JOIN:

* The INNER JOIN keyword selects records that have matching values in both tables.

* The INNER JOIN keyword returns only rows with a match in both tables.

* After providing the relation , the tabe has to be join so INNER JOIN is used to join the table.

  
**Syntax:**
```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```
**Example:**  
Lets continune example from above (From FOREIGN KEY)
```sql
SELECT orders.order_id, products.name, products.price, products.stock
from orders
INNER Join products on orders.product_id = products.id
```
