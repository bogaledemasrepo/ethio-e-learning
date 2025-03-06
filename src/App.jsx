import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<></>} />
    </Routes>
  );
}

export default App;
