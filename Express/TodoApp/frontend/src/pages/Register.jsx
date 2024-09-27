import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    axios
      .post("http://localhost:9000/users/register", { name, email, password })
      .then(() => {
        alert("Registered Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Sign UP
      <form>
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label htmlFor="password"> Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>

        {/* <select name="role" htmlFor="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Admin</option>
        </select> */}
        <br></br>

        <input type="submit" onClick={handleSubmit}></input>
      </form>
    </div>
  );
};

export default Register;
