import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import "../styling/homeAsEmployee.css";
export function HomeAsEmployee({ search, setSearch, searcheditems }: any) {
  const [projects, setProjects] = useState<Project[]>([])

  return (

    <section className="home-wrapper">
      <HeaderAsEmployee setSearch={setSearch} />
      <main className="home-main-wrapper">
        <div className="left-home-wrapper">
          <div className="filter-by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>

        <div className="right-home-wrapper">
          {searcheditems.map((project: Project) =>
            <Link to={`/employee/${project.id}`} key={project.id}>
              <div className="job-wrapper">
                <div className="job-title-days-wrapper">
                  <span id="job-title-wrapper">{project.title}</span>
                  <span id="days-left-wrapper"> {project.deadline}</span>
                </div>
                <div className="job-description-wrapper">
                  <span id="job-description">{project.description}</span>
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
