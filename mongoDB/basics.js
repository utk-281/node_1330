//? scaling ==> it refers to upgrading/downgrading the specifications

//! difference between sql and no sql databases

//? sql ==>
// it is also known as relational databases
// it stores data in tables i.e, rows and columns
// it is suitable for handling complex/ nested queries.
// it supports vertical scaling ==> adding new resources to the existing system
// it has a predefined schema/structure

//? no sql ==>
// it stands for not only sql
// it is also known as non relational databases.
// it stores data in the form of document, key-value pair, graph, wide column.
//// ? document based database ==> it stores data in form of JSON/BSON. example==> mongoDB, couchDB
//// ? key-value pair ==> data is stored in form of keys and values. examples ==> amazon Dynamo DB
//// ? graph databases ==> data is stored in nodes . example ==> neo4j database
//// ? wide column db ==> data is stored in dynamic tables ==> cassandraDB

// it is not suitable for handling complex queries.
// it supports horizontal scaling ==> buying new resources with the existing system.
// by default, it has dynamic schema/structure.

//? database ==> it is used to store,manage,and retrieve the data which is done by DBMS(database management system)

//? collection ==> multiple documents grouped together is known as a collection

//? documents ==> it is a javascript object which stores data in key value pair

/* structure of document

  {     
    key1: value1, ==> one field
    key2: value2,
    .
    .
    .
    .
  }

  */

//? what is noSQL databases? ==> it is also known as non relational databases which stores data in document, key-value, graphs, column oriented format.

//? mongoDB ==> it is open source, cross-platform, document oriented database which stores data in JSON/BSON format and has dynamic schema.

//! download mongoDB compass ==> https://www.mongodb.com/try/download/community
// mongoDB compass is a Graphical User Interface which provides a interactive interface to perform operations on databases (CRUD ==> create, read, update, delete)

//! download mongoDB shell ==> https://www.mongodb.com/try/download/shell (CLI ==> Command Line Interface)
// copy the location while installing shell,

// ==> search env in home ==> click on environment variables ==> double click on system path ==> then add the copied path and press ok.

// shell provides an interface through which a user can perform CRUD with the help of mongoDB commands. it is build on javascript language.

//! ==> to enter the mongoDB shell use command "mongosh" on terminal

//! FEATURES OF MONGODB==>
// by default, it is dynamic.
// it has distributed network
// it supports horizontal scaling
// TODO (how data is stored inside mongodb)
// it can support large amount of data.(humongous)

//! when to use mongoDb ==> when data to be stored is very large and relation between data is not mandatory then we go for noSQL databases.

//!============================ basic commands for mongoDB using shell (either in built shell or mongo shell download) ===================================

//? 1) show dbs or show databases ==> displays all database

//? 2) use database-name   ==> 1) creates a new database 2) switches to another database
// example ==> use school

//? 3) to create a collection ==> db.createCollection("collection-name")
// example ==> db.createCollection("teachers")

//? 4) to display all the collections present inside a db
//? ==> show collections
// example ==> show collections

//? 5) to display current database
//? ==> db

//? 6) to insert a single document inside a collection
//? ==> db.collection-name.insertOne({ obj })
// example ==> db.students.insertOne({ name:"abc", age:23 })
// example ==> db.students.insertOne({"name":"xyz", "age":12})

//? 7) to insert multiple documents inside a collection
//? ==> db.collection-name.insertMany( [ {}, {}, {}, ....... ]  )
// example ==> db.teachers.insertMany([{name:"shashi"}, {name:"lavan"}, {name:"san"}])

//! create a library database in which we have 2 collections namely books and authors, and add some documents based on your choice.
db.books.insertOne({ name: "harry potter" });

//? 8) to delete a collection
//? ==> db.collection-name.drop()
// example ==> db.books.drop()

//? 9) to delete a database
//? ==> db.database-name.drop()
//! before deleting a database, make sure all collections are deleted.

//? 10) to fetch data from database
//* ==> we can fetch single document : db.collection-name.findOne({filter}, {projection})

// filter is used to filtering the documents.
// projection is used to display which fields we want to show.

// example ==> db.students.findOne({}) ==> it will give the first document present in the collection

//* ==> we can fetch multiple documents : db.collectionName.find({filter}, {projection})
// example ==> db.students.find()

/* run this command
================================================================================================================
db.emp.insertMany([
  {
    empNo: 7369,
    eName: "smith",
    job: "clerk",
    mgr: 7902,
    hireDate: new Date("17-dec-1980"),
    sal: 800,
    comm: null,
    deptNo: 20,
  },
  {
    empNo: 7499,
    eName: "allen",
    job: "salesman",
    mgr: 7698,
    hireDate: new Date("20-feb-1981"),
    sal: 1600,
    comm: 300,
    deptNo: 30,
  },
  {
    empNo: 7521,
    eName: "ward",
    job: "salesman",
    mgr: 7698,
    hireDate: new Date("22-feb-1981"),
    sal: 1250,
    comm: 500,
    deptNo: 30,
  },
  {
    empNo: 7566,
    eName: "jones",
    job: "manager",
    mgr: 7839,
    hireDate: new Date("02-apr-1981"),
    sal: 2975,
    comm: null,
    deptNo: 20,
  },
  {
    empNo: 7654,
    eName: "martin",
    job: "salesman",
    mgr: 7698,
    hireDate: new Date("28-sep-1981"),
    sal: 1250,
    comm: 1400,
    deptNo: 30,
  },
  {
    empNo: 7698,
    eName: "blake",
    job: "manager",
    mgr: 7839,
    hireDate: new Date("01-may-1981"),
    sal: 2850,
    comm: null,
    deptNo: 30,
  },
  {
    empNo: 7782,
    eName: "clark",
    job: "manager",
    mgr: 7839,
    hireDate: new Date("09-jun-1981"),
    sal: 2450,
    comm: null,
    deptNo: 10,
  },
  {
    empNo: 7788,
    eName: "scott",
    job: "analyst",
    mgr: 7566,
    hireDate: new Date("19-apr-1987"),
    sal: 3000,
    comm: null,
    deptNo: 20,
  },
  {
    empNo: 7839,
    eName: "king",
    job: "president",
    mgr: null,
    hireDate: new Date("17-nov-1981"),
    sal: 5000,
    comm: null,
    deptNo: 10,
  },
  {
    empNo: 7844,
    eName: "turner",
    job: "salesman",
    mgr: 7698,
    hireDate: new Date("08-sep-1981"),
    sal: 1500,
    comm: 0,
    deptNo: 30,
  },
  {
    empNo: 7876,
    eName: "adams",
    job: "clerk",
    mgr: 7788,
    hireDate: new Date("23-may-1987"),
    sal: 1100,
    comm: null,
    deptNo: 20,
  },
  {
    empNo: 7900,
    eName: "james",
    job: "clerk",
    mgr: 7698,
    hireDate: new Date("03-dec-1981"),
    sal: 950,
    comm: null,
    deptNo: 30,
  },
  {
    empNo: 7902,
    eName: "ford",
    job: "analyst",
    mgr: 7566,
    hireDate: new Date("03-dec-1981"),
    sal: 3000,
    comm: null,
    deptNo: 20,
  },
  {
    empNo: 7934,
    eName: "miller",
    job: "clerk",
    mgr: 7782,
    hireDate: new Date("23-jan-1982"),
    sal: 1300,
    comm: null,
    deptNo: 10,
  },
]);

db.dept.insertMany([
  { deptNo: 10, dName: "accounting", loc: "new york" },
  { deptNo: 20, dName: "research", loc: "dallas" },
  { deptNo: 30, dName: "sales", loc: "chicago" },
  { deptNo: 40, dName: "operation", loc: "boston" },
]);
*/

/* let emp = {
  "name": "santanu",
  "age": 24,
  isMarried: false,
  havingComm: null,
  key6: undefined,
  key7: function () {},
  key8: Date.now(),
  key9: [{}],
};
 */

// JSON ==>  in json we cannot have undefined, dates and functions, to overcome these things mongoDB uses BSON datatype. BSON stands for binary JSON.
