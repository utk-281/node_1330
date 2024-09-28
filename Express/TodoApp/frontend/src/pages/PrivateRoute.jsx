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
