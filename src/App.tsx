import "./styling/App.css";
import { Navigate, Route, Routes } from 'react-router-dom'
import { SignIn } from "./pages/SignIn";
import { SignUpAsEmployee } from "./pages/SignUpAsEmployee";
import { SignUpAsEmployer } from "./pages/SignUpAsEmployer";
import { Home } from "./pages/Home";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path='/sign-in' element={< SignIn />} />
        <Route path='/sign-up/employee' element={< SignUpAsEmployee />} />
        <Route path='/sign-up/employer' element={< SignUpAsEmployer />} />
        <Route path='/home' element={< Home />} />
        <Route path='/home/:id' element={< Project />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
