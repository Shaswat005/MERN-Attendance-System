import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes like dashboard here later */}
      </Routes>

      {/* Toast container appears globally in the app */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
