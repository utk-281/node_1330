//! 1) import the collection
const USER_SCHEMA = require("../models/user.model");

//! CRUD --> create, read/fetch, delete, update

exports.addUser = async (req, res) => {
  console.log(req.body);
  try {
    //! extract the user data from req.body
    let { username, email, password, phoneNo, isHavingInsurance } = req.body;

    //! save the data in database using create()
    let newUser = await USER_SCHEMA.create({
      email,
      username,
      password,
      phoneNo,
      isHavingInsurance,
    });

    //! send a response
    // res.send(newUser);
    res.json({ user: newUser }); // to send a json response
  } catch (err) {
    res.json({ message: err.message }); //! to display the message on response, displaying the complete error object on the response
  }
};

exports.fetchAllUsers = async (req, res) => {
  try {
    //! fetch all the documents from the collection
    let users = await USER_SCHEMA.find();

    if (users.length === 0) return res.json({ message: "no users found" });

    res.json({ message: "all users fetched successfully,", success: true, users: users });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.fetchOneUser = async (req, res) => {
  try {
    //! printing the req.params object
    console.log(req.params);
    // { id: '6765362de36610170e2e88e9' }

    let { id } = req.params;

    //! find the user
    let user = await USER_SCHEMA.findOne({ _id: id });

    if (!user) return res.json({ message: "user not found" });

    //! display response
    res.json({ success: true, message: "user found", user: user });

    console.log(id);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  // let {id} = req.params
  let id = req.params.id;

  let user = await USER_SCHEMA.findOne({ _id: id });

  if (!user) return res.json({ message: "no user found" });

  let deleteUser = await USER_SCHEMA.deleteOne({ _id: id });

  res.json({ success: true, message: "user deleted", user: user });
};

exports.updateUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await USER_SCHEMA.findById(id);

    if (!user) return res.json({ message: "no user found" });

    //! update

    //! 1st way --> using updateOne()
    // await USER_SCHEMA.updateOne(
    //   { _id: id },
    //   {
    //     $set: {
    //       username: req.body.username,
    //       email: req.body.email,
    //       password: req.body.password,
    //       phoneNo: req.body.phoneNo,
    //       isHavingInsurance: req.body.isHavingInsurance,
    //     },
    //   }
    // );

    // res.json({ success: true, message: "user updated successfully" });

    //! 2nd way
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.phoneNo = req.body.phoneNo || user.phoneNo;
    user.isHavingInsurance = req.body.isHavingInsurance || user.isHavingInsurance;
    // till here we are just assigning the values

    await user.save(); // to save the updated details in database

    res.json({ success: true, message: "user updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* {
    "email":"xyz1@gmail.com",
    "isHavingInsurance":true
} */
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

/*
  {
    "errors": {
        "email": {
            "name": "ValidatorError",
            "message": "Path `email` is required.",
            "properties": {
                "message": "Path `email` is required.",
                "type": "required",
                "path": "email"
            },
            "kind": "required",
            "path": "email"
        }
    },
    "_message": "User validation failed",
    "name": "ValidationError",
    "message": "User validation failed: email: Path `email` is required."
}
 */

// https://www.amazon.in/boAt-BassHeads-100-Headphones-Black/dp/B071Z8M4KX/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&dib=eyJ2IjoiMSJ9

//https://www.amazon.in/boAt-Rockerz-255-Pro-Earphones/dp/B08TV2P1N8/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&dib=eyJ2IjoiMSJ9

/*
 req =  {
    headers: value,
    Date: value, 
    .
    .
    .
    body: value (user data),
    params: value(unique ID)
  }
 */
