import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Studentslist from "./pages/students";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<></>} />
      <Route path="students" element={<Studentslist />} />
    </Routes>
  );
}

export default App;
