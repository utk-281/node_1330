//! 1) import the collection
const USER_SCHEMA = require("../models/user.model");

//! CRUD --> create, read/fetch, delete, update

exports.addUser = async (req, res) => {
  //! extract the user data from req.body
  let { username, email, password, phoneNo, isHavingInsurance } = req.body;

  //! save the data in database using create()
  let newUser = await USER_SCHEMA.create({ email, username, password, phoneNo, isHavingInsurance });

  //! send a response
  res.send(newUser);
};

/*
{
  "username": "abc",
  "email": "abc@gmail.com",
  "password": "1234567890qwerty",
  "_id": "6763e7639f41e7039f4d00ed",
  "createdAt": "2024-12-19T09:29:07.198Z",
  "updatedAt": "2024-12-19T09:29:07.198Z",
  "__v": 0
}
  
__v : is created and used by mongoose for it's internal implementations

"createdAt": "2024-12-19T09:29:07.198Z",
"updatedAt": "2024-12-19T09:29:07.198Z",
! timestamps:true --> generates two fields createdAt and updatedAt

! createdAt : marks the time at which document was inserted
! updatedAt : marks the time at which document was updated
 */
