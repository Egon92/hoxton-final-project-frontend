import "./styling/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeAsEmployee } from "./pages/HomeAsEmployee";
import { HomeAsEmployer } from "./pages/HomeAsEmployer";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfilePageEmployer } from "./pages/ProfilePageEmployer";
import Project from "./pages/Project";
import ProjectAsEmployee from "./pages/ProjectAsEmployee";
import { useStore } from "./components/store";
import { useEffect, useState } from "react";
import Modals from './components/modals/Modals';
import { EmployeeProfile } from "./pages/EmployeeProfile";
import Chat from "./pages/Chat";



function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [employees, setEmployees] = useState<any>([])
  const [search, setSearch] = useState('')

  const validate = useStore(store => store.validate)
  useEffect(() => {
    validate();
  }, []);


  useEffect(() => {
    fetch(`http://localhost:4000/projects`)
      .then(resp => resp.json())
      .then(data => setProjects(data))

    fetch(`http://localhost:4000/employees`)
      .then(resp => resp.json())
      .then(data => setEmployees(data))
  }, [])

  function filterProjects() {
    let filterProjects = projects

    filterProjects = filterProjects.filter(filterproject => {
      // @ts-ignore
      return filterproject.id !== projects.id
    })
    return filterProjects
  }

  const searcheditems = filterProjects().filter(project =>
    project.title.toUpperCase().includes(search.toUpperCase())
  )

  const searchedEmployees = employees.filter((employee: any) =>
    employee.full_name.toUpperCase().includes(search.toUpperCase())
  )


  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home search={search} setSearch={setSearch} searcheditems={searcheditems} />} />
        <Route path="/home/:id" element={<Project />} />
        <Route path="/employee" element={<HomeAsEmployee search={search} setSearch={setSearch} searcheditems={searcheditems} />} />
        <Route path="/employee/:id" element={<ProjectAsEmployee />} />
        <Route path="/employer" element={<HomeAsEmployer search={search} setSearch={setSearch} searchedEmployees={searchedEmployees} />} />
        <Route path="/employer/:id" element={<EmployeeProfile />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profileEmployer" element={<ProfilePageEmployer />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {/* @ts-ignore */}
      <Modals />
    </div>
  );
}

export default App;
