import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, role);

    axios
      .post("http://localhost:9000/users/register", { name, email, password, role })
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
      <form onSubmit={handleSubmit}>
        <label> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label> Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label> Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>

        <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Admin</option>
        </select>
        <br></br>

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Register;
