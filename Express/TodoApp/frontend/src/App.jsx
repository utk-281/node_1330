import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"; // Ensure this path is correct

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* This should work */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
