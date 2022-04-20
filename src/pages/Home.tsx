import { Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store";
import "../styling/home.css";

export function Home({ search, setSearch, searcheditems }: any) {
  const user = useStore(store => store.user)
  const [projects, setProjects] = useState<Project[]>([])

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
    <section className="main-home-wrapper">
      <Header setSearch={setSearch} />
      <main className="home-main__wrapper">
        <div className="left__home-wrapper">
          <div className="filter__by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>
        <div className="right__home-wrapper">

          <div className="right-home-wrapper">
            {searcheditems.map((project: Project) =>
              <Link to={`/home/${project.id}`} key={project.id}>
                <div className="job-wrapper__">
                  <div className="job__title-days-wrapper">
                    <span id="job-title-wrapper">{project.title}</span>
                    <span id="days-left-wrapper"> {project.deadline}</span>
                  </div>
                  <div className="job__description-wrapper">
                    <span id="job-description">{project.description}</span>
                  </div>
                  <div className="phone__wrapper">{project.price}$</div>
                </div>
              </Link>
            )}
          </div>

        </div>
      </main>
    </section>
  );
}
