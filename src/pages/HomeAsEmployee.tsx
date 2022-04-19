import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import "../styling/homeAsEmployee.css";
export function HomeAsEmployee() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`http://localhost:4000/projects`)
      .then(resp => resp.json())
      .then(data => setProjects(data))
  }, [])


  return (

    <section className="home-wrapper">
      <HeaderAsEmployee />
      <main className="home-main-wrapper">
        <div className="left-home-wrapper">
          <div className="filter-by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>

        <div className="right-home-wrapper">
          {projects.map(project =>
            <Link to={`/employee/${project.id}`} key={project.id}>
              <div className="job-wrapper">
                <div className="job-title-days-wrapper">
                  <span id="job-title-wrapper">{project.title}</span>
                  <span id="days-left-wrapper"> {project.deadline}</span>
                </div>
                <div className="job-description-wrapper">
                  <span id="job-description">{project.overview}</span>
                </div>
                <div className="payment-wrapper">{project.price}$</div>
              </div>
            </Link>
          )}
        </div>
      </main>
    </section>
  );
}
