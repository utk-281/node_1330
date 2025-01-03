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
/*  output ==> {
  acknowledged: true, // no syntactical error
  insertedId: ObjectId('6752b4c0ca55246010c73bf8') //! this is ObjectID generated by MOngoDB automatically
}
 */

/*
    ! if we are not providing _id field while inserting data,MongoDB will automatically generate ObjectID which will be of BSON datatype
    example ==> db.students.insertOne({name:"abc", age:12}) 
    output ==> {name:
        _id:ObjectID("6752b4c0ca55246010c73bf8"), // datatype ==> ObjectID which is BSON type
        name:"abc",
        age:12,
        } 
    ! if we are providing _id field, then the datatype of _id will be of whatever user has given input
    example ==> db.students.insertOne({"abc", age:12, _id:123}) // datatype ==> Number
            ==> db.students.insertOne({name:"abc", age:12, _id:"123"}) // datatype ==> String

    !! all documents must have _id field even if we are passing empty document
 */

//!=== 7b) Inserting multiple documents at a time
// db.collection-name.insertMany( [ {}, {}, {}, ........ ] ) //! array of documents
/* example ==> db.teachers.insertMany([
        {name:"abc", age:12},
        {name:"def", phone:1234567890},
        {email:"abc@123", address:"pune"}
    ]) */

db.teachers.insertMany([
  { name: "abc", age: 67 },
  { name: "def", phone: 1234567890 },
  { email: "12@gmail.com" },
]);

//!=================== FETCHING DATA FROM A COLLECTION =======================

/*
    ! find/findOne( {filter}, {projection}, {options} )
    projection ==> it is used to display any particular field
 */

//! two ways

//! === 8a) fetching multiple documents
// db.collection-name.find()
// ?example  ==>
db.students.find(); // fetches all the documents in the collection

//? find all the documents whose name is "ishika" // case sensitive
db.students.find({ name: "ishika" }, { age: 1 });

//! === 8a) fetching single document
// db.collection-name.findOne() // fetches the top most document
// ?example  ==>
db.students.findOne();

//!=================== DELETING DOCUMENT FROM A COLLECTION =======================
/*
    deleteOne/deleteMany( {filter} )
 */

//! === 9a) deleting a single document
// db.collection-name.deleteOne({})
//? example ==>
db.students.deleteOne({}); // the top most document will be deleted

//! === 9a) deleting multiple documents
// db.collection-name.deleteMany({})
//? example ==>
db.students.deleteMany({}); // all the documents will be deleted

//!=================== UPDATING DOCUMENT =======================

//!10) two methods to update ==> updateOne()/updateMany()
/*
    updateOne/ updateMany({filter}, {updation value}, {options})
    ! filter ==> it targets the documents to be updated
    ! updation value ==> 1) we can update existing fields , 2) we can create new fields
    ! options ==> upsert : //TODO
 */

// ! 11) to show current working database
// ==> db

//! github.com/utk-281

//! ======================== operators in mongodb ==========================================

//! 1) comparison operators ==> it is used to compare any two values
/*

gt, (greater than)                      ==> $gt
lt, (lesser than)                       ==> $lt
gte, (greater than or equal to)         ==> $gte
lte, (lesser than or equal to)          ==> $lte
eq, (equal to)                          ==> $eq
ne, (not equal to)                      ==> $ne

! syntax ==> findOne/find({ filter-part }, { projection }, { options })
! { filter part } ==> { field-name: {$C-O: value} }
? example ==> age should be less than or equal to 35
--> db.c-name.find({ age: {$lte: 35} })

in
==> $in (fetches all the documents which satisfies each value given in the array)

nin, (not in)                          
==> $nin (fetches all the documents which does not contain the given values in the array)

! syntax ==> findOne/find({ filter part})
! --> { field-name : { $in/$nin: [v1, v2, v3,.......] } }

*/

// find the details of all the employees who are working as salesman
db.emp.find({ job: { $eq: "salesman" } }); // case sensitive, explicit use
db.emp.find({ job: "salesman" }); // implicit $eq

// find all the details of employees whose salary is greater than 1500
db.emp.find({ sal: { $gt: 1500 } });

// find all the details of emp working as clerk and manager
db.emp.find({ job: { $eq: "manager" }, job: { $eq: "clerk" } });

//! 1a) ==> if field is same and we have multiple conditions ==> then the last condition will be satisfied

db.emp.find({ job: { $in: ["clerk", "manager"] } }); //! implicit or operator

//! 2b) ==> if fields are different ==> then it will work as logical AND operator
db.emp.find({ job: "manager", sal: { $gt: 2500 } }); //! implicit and operator

//! 2) logical operators ==> it is used to compare multiple conditions

/*

  1) and ==> $and: it returns all the documents which satisfies all the given conditions
  2) or
  3) nor

  !syntax ==> { $L-O: [ { cond1 }, { cond2 }, { cond3 }, .......  ] }
  find the name and hireDate of emp who are working as clerk and having salary greater than 2500
  db.emp.find( { $and: [ {job:"clerk"}, {sal:{ $gt: 2500 }} ] })

  4)not

*/

//! find the name and hireDate of emp who are working as clerk and having salary greater than 2500
db.emp.find(
  { $and: [{ job: "clerk" }, { sal: { $gt: 2500 } }] },
  { eName: 1, hireDate: 1, _id: 0 }
);
//! === whenever we use projection, by default _id field will be displaying
// syntax ==> ({filter part}, {field-name:truthy/falsy})

// falsy --> to hide any particular field
// examples ==> 0, -0, "", null, undefined, NaN

// truthy --> to display any particular field

//! ques) find the names and job of all the emp.
db.emp.find({}, { eName: 1, job: 1, _id: 0 });
//! if there is no filter condition, leave the filter part empty.
