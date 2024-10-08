import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"; // Ensure this path is correct
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import AddTodo from "./pages/AddTodo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* This should work */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-todo"
            element={
              <PrivateRoute>
                <AddTodo />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
