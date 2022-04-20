import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import "../styling/homeAsEmployee.css";
export function HomeAsEmployee({ search, setSearch, searcheditems }: any) {
  const [projects, setProjects] = useState<Project[]>([])

  return (

    <section className="employee-wrapper">
      <HeaderAsEmployee setSearch={setSearch} />
      <main className="employee-main-wrapper">
        <div className="left-employee-wrapper">
          <div className="filter-wrapper">
            <span>Filter by:</span>
          </div>
        </div>

        <div className="right-employee-wrapper">
          {searcheditems.map((project: Project) =>
            <Link to={`/employee/${project.id}`} key={project.id}>
              <div className="employee-job-wrapper">
                <div className="employee-job-title-days-wrapper">
                  <span id="employee-job-title-wrapper">{project.title}</span>
                  <span id="days-left-wrapper"> {project.deadline}</span>
                </div>
                <div className="employee-job-description-wrapper">
                  <span id="job-description">{project.description}</span>
                  <div className="phone-wrapper">{project.price}$</div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </main>
    </section>
  );
}
