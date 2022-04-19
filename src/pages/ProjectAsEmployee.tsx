import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import "../styling/project.css";

export default function ProjectAsEmployee() {

    const [projects, setProjects] = useState<Project[]>([])
    const [projectDetails, setProjectDetails] = useState<Project[]>([])
    const [search, setSearch] = useState('')

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/projects`)
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])



    useEffect(() => {
        fetch(`http://localhost:4000/projects/${params.id}`)
            .then(resp => resp.json())
            .then(data => setProjectDetails(data))
    }, [])


    if (projectDetails === null) return <h1>Loading...</h1>
    return (
        <section className="project-wrapper">
            <HeaderAsEmployee />
            <main className="project-main-wrapper">

                <div className="wrapper">
                    <div className="project-title-days-wrapper">
                        {/* @ts-ignore */}
                        <span id="project-title-wrapper">{projectDetails.title}</span>
                    </div>

                    <div className="project-description-wrapper">
                        {/* @ts-ignore */}
                        <span id="project-description"> {projectDetails.overview}</span>
                    </div>

                    <div className="job_description">
                        {/* @ts-ignore */}
                        <h3>hourly rate {projectDetails.price}$ </h3>
                        <button>Chat</button>
                        <button>apply</button>

                    </div>
                </div>
                <h2 className="previous_jobs">Previous jobs by user</h2>
                <div className="right-project-wrapper ">
                    {projects.map(project =>
                        <Link to={`/employee/${project.id}`} key={project.id}>
                            <div className="project-wrapper">
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
                            </div>
                        </Link>
                    )}
                </div>
            </main>
        </section>
    )
}