import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Studentslist from "./pages/students";
import Registration from "./pages/registration";
import Services from "./pages/services";
import AuthProvider from "./hooks/authContext";
import Courses from "./pages/courses";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
function App() {
  return (
    <AuthProvider>
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
        <Route path="courses" element={<Courses />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
