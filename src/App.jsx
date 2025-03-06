import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Studentslist from "./pages/students";
import Registration from "./pages/registration";
import Services from "./pages/services";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="services" element={<Services />} />
      <Route path="students">
        <Route index element={<Studentslist />} />
        <Route path="register" element={<Registration />} />
        <Route path="edit" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
