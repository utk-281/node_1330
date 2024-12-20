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

// https://www.amazon.in/boAt-BassHeads-100-Headphones-Black/dp/B071Z8M4KX/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&dib=eyJ2IjoiMSJ9.u-Idkf73CqPLuA1aaV9B-5x-A4GMPw5VDZbEKNeLAqBryRtNoXKL3E10LKECSJtcLPPtydM8NNX8QHmlLo7lSUlOWFqJumNuxjbm2hWOQQdko-ChIuZ_iJVPMil_m9afBeGRFTqUDVmL8T7C5BPo5Zn1h2oXRT6v4WbGhOur5FXbXNPIQMGBVMys_v5kUBH0yP_5hb6v29XPOSLAL3a7JNq-hTrUJi-xLbyZ-L8qjGDn-DijIQBHdovUdKpkH71cQ-2b0NYkL-qFeEr6uiIqCH4hlnceN0T4RJCQjnO4MCkSbZ91yTHav-vMRqaSZmSFW8M-s4iTabA6KzTB-gir-Gv-sGFDaA6KrNZ5Ry56dM8.rKtUev-j41VWCkHCal7sXJ4DhYLTF8BI2gKDKxAME6E&dib_tag=se&pd_rd_r=3bdae4a9-39b0-48d6-94b8-a1d21a302f28&pd_rd_w=DXNU3&pd_rd_wg=UtzpF&pf_rd_p=82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_r=D8296E2J8AD29HB0FR6Q&qid=1734686581&refinements=p_89%3AboAt&s=electronics&sr=1-1

//https://www.amazon.in/boAt-Rockerz-255-Pro-Earphones/dp/B08TV2P1N8/ref=sr_1_2?_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&dib=eyJ2IjoiMSJ9.u-Idkf73CqPLuA1aaV9B-5x-A4GMPw5VDZbEKNeLAqBryRtNoXKL3E10LKECSJtcLPPtydM8NNX8QHmlLo7lSUlOWFqJumNuxjbm2hWOQQdko-ChIuZ_iJVPMil_m9afBeGRFTqUDVmL8T7C5BPo5Zn1h2oXRT6v4WbGhOur5FXbXNPIQMGBVMys_v5kUBH0yP_5hb6v29XPOSLAL3a7JNq-hTrUJi-xLbyZ-L8qjGDn-DijIQBHdovUdKpkH71cQ-2b0NYkL-qFeEr6uiIqCH4hlnceN0T4RJCQjnO4MCkSbZ91yTHav-vMRqaSZmSFW8M-s4iTabA6KzTB-gir-Gv-sGFDaA6KrNZ5Ry56dM8.rKtUev-j41VWCkHCal7sXJ4DhYLTF8BI2gKDKxAME6E&dib_tag=se&pd_rd_r=3bdae4a9-39b0-48d6-94b8-a1d21a302f28&pd_rd_w=DXNU3&pd_rd_wg=UtzpF&pf_rd_p=82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_r=D8296E2J8AD29HB0FR6Q&qid=1734686581&refinements=p_89%3AboAt&s=electronics&sr=1-2&th=1
