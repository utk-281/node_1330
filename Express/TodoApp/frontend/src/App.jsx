import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
