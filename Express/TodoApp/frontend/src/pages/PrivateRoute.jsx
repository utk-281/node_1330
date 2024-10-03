import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cookie="))
    ?.split("=")[1];

  console.log("Cookie value:", cookieValue);
  return (
    <div>
      {cookieValue ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to="/login" replace />
        </>
      )}
    </div>
  );
};

export default PrivateRoute;

/* import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:9000/users/verify", {
          withCredentials: true, // Include cookies in the request
        });
        if (response.data.success) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while verifying
  }

  return isAuthenticated ? <>{props.children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;


In users.router.js or auth.router.js
router.get("/verify", authenticate, (req, res) => {
  res.status(200).json({ success: true, message: "Token is valid" });
});

 */
