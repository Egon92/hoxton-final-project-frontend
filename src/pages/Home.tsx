import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store";
import "../styling/home.css";

export function Home() {
  const user = useStore(store => store.user)
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`http://localhost:4000/projects`)
      .then(resp => resp.json())
      .then(data => setProjects(data))
  }, [])

  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      if (user.isEmployer) {
        navigate("/profileEmployer")
      } else {
        navigate("/profile")
      }
    }
  }
    , [user])


  return (
    <section className="home-wrapper">
      <Header />
      <main className="home-main-wrapper">
        <div className="left-home-wrapper">
          <div className="filter-by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>
        <div className="right-home-wrapper">

          <div className="right-home-wrapper">
            {projects.map(project =>
              <Link to={`/home/${project.id}`} key={project.id}>
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

        </div>
      </main>
    </section>
  );
}
