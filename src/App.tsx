import "./styling/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeAsEmployee } from "./pages/HomeAsEmployee";
import { HomeAsEmployer } from "./pages/HomeAsEmployer";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<HomeAsEmployee />} />
        <Route path="/employer" element={<HomeAsEmployer />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
