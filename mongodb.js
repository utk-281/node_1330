// password = hlfE9iW2cbp8bwfl

//! to enter mongo shell type command "mongosh" on cmd ==> this will connect you to local db.

//!=== 1) TO SHOW ALL THE DATABASES
// ==> show databases/ show dbs

//!=== 2) TO CREATE A DATABASE and TO SWITCH TO EXISTING DATABASE ====================
// ==> use database-name
// example : use school
//! "use" keyword has two functions ==> it creates a new database if it is not present, if present it simply switches the database

// cannot pass undefined, functions and date, in  to overcome this MONGODB uses BSON datatypes

//! BSON stands for binary JSON
//! it stores data in binary format
//! undefined, functions , dates datatypes are used in BSON

//! BSON ==> ObjectID, numbers, strings, booleans, null, arrays, objects

//!=== 3) TO CREATE A COLLECTION =====================
// db.createCollection("collection-name")
// example ==> db.createCollection("teachers")

//! === 4) TO DISPLAY ALL THE COLLECTIONS ====================
// show collections (use this command)
// show tables

//! === 5) TO DELETE A COLLECTION ====================
// db.collection-name.drop()
// example ==> db.students.drop()

//! === 6) TO DELETE A DATABASE ====================
// before deleting a database, switch to that database
// db.dropDatabase()

//!=================== INSERTING DATA IN A COLLECTION =======================
//! two ways to insert data ==>

//!=== 7a) Inserting one document at a time
// db.collection-name.insertOne({})
// example ==> db.students.insertOne({name:"abc", age:12})
