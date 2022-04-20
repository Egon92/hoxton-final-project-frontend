import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import "../styling/project.css";

export default function Project() {

    const [projects, setProjects] = useState<Project[]>([])
    const [projectDetails, setProjectDetails] = useState<Project|null>([])
    const [search, setSearch] = useState('')

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/projects/${params.id}`)
            .then(resp => resp.json())
            .then(data => setProjectDetails(data)
            )
    }, [])
    useEffect(() => {
        fetch(`http://localhost:4000/projects`)
            .then(resp => resp.json())
            //@ts-ignore
            .then(data => setProjects(data.filter(project => (project.id !== projectDetails?.id && project.employer_id === projectDetails?.employer_id))))
    }, [projectDetails])


    if (projectDetails === null) return <h1>Loading...</h1>
    return (
        <section className="project-wrapper">
            <Header />
            <main className="project-main-wrapper">

                <div className="wrapper">
                    <div className="project-title-days-wrapper">
                        {/* @ts-ignore */}
                        <span id="project-title-wrapper">{projectDetails.title}</span>
                    </div>

                    <div className="project-description-wrapper">
                        {/* @ts-ignore */}
                        <span id="project-description"> {projectDetails.description} </span>
                    </div>

                    <div className="job_description">
                        {/* @ts-ignore */}
                        <h3>hourly rate {projectDetails.price}$ </h3>
                    </div>
                </div>
                <h2 className="previous_jobs">Previous jobs by user</h2>
                <div className="right-project-wrapper ">
                    {projects.map(project =>
                        <Link to={`/home/${project.id}`} key={project.id}>
                            <div className="project-wrapper">
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
                            </div>
                        </Link>
                    )}
                </div>
            </main>
        </section>
    )
}