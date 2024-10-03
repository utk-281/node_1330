import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/users/login", { email, password }, { withCredentials: true })
      .then(() => {
        alert("Logged in Successfully");

        // after login if user pressed back button it will redirect to home page
        navigate("/admin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Log In
      <form>
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

        <input type="submit" onClick={handleSubmit}></input>
      </form>
    </div>
  );
};

export default Login;
