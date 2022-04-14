import "./styling/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeAsEmployee } from "./pages/HomeAsEmployee";
import { HomeAsEmployer } from "./pages/HomeAsEmployer";
import { ProfilePage } from "./pages/ProfilePage";
import Project from "./pages/Project";
import ProjectAsEmployee from "./pages/ProjectAsEmployee";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Project />} />
        <Route path="/employee" element={<HomeAsEmployee />} />
        <Route path="/employee/:id" element={<ProjectAsEmployee />} />
        <Route path="/employer" element={<HomeAsEmployer />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
