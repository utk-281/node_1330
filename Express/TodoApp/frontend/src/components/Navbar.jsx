import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookieValue, setCookieValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set cookieValue if the cookie exists
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookie="))
      ?.split("=")[1];
    setCookieValue(value);
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:9000/users/logout", { withCredentials: true })
      .then(() => {
        alert("Logged out successfully");

        // Clear the cookieValue state
        setCookieValue(null);

        // Optional: Redirect to login page after logout
        navigate("/login");
      })
      .catch((err) => {
        console.log("Logout error:", err);
      });
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {cookieValue ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
