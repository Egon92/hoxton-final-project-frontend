import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderAsEmployer } from "../components/HeaderAsEmployer";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store"
import '../styling/profilePage.css'

export function EmployeeProfile() {
    const params = useParams()
    const [employee, setEmployee] = useState<any>(null)

    useEffect(() => {
        fetch(`http://localhost:4000/employees/${params.id}`)
            .then(resp => resp.json())
            .then(data => setEmployee(data))
    }, [])

    const updateModal = useStore(store => store.updateModal)
    const user = useStore(store => store.user)
    const setSelectedProject = useStore(store => store.setSelectedProject)

    if (employee === null) return <h1>Loading</h1>
    return (
        <section className="profile-home-wrapper">
            <HeaderAsEmployer />
            <main className="profile-home-main-wrapper">
                <div className="top-main-home-wrapper">
                    <div className="top-main-job-wrapper">
                        <div className="top-profile-pic-wrapper">
                            <img
                                id="top-profile-pic"
                                src={employee.avatar}
                                alt=""
                            />
                        </div>
                        <div className="top-job-description-wrapper">
                            <h4 className="top-worker-name">{employee.full_name}</h4>
                            <span id="top-job-description">{employee.bio}</span>
                            <h4 className="top-payment-wrapper">Number: {employee.phone}</h4>
                            <h4>Address: {employee?.address}</h4>
                            <button>chat</button>
                        </div>
                    </div>
                </div>
                <br />
                <h1>Previous projects</h1>
                <div className="bottom_main_home_wrapper">
                    {employee.acceptedProjects.map((project: Project) => (
                        <div className="bottom_job_wrapper" onClick={() => setSelectedProject(project.id)} >
                            <div className="bottom_job_title_wrapper">
                                <span id="bottom_job_title_wrapper">{project.title}</span>
                            </div>
                            <div className="bottom_job_description_wrapper">
                                <span id="bottom_job_description">{project.description}</span>
                            </div>
                            <div className="bottom_payment_wrapper">{project.price}$</div>
                            <button className="bid_button" onClick={() => updateModal('see-bids')}>See bids</button>
                        </div>
                    ))}
                </div>
            </main>
            {/* @ts-ignore */}
            < Modals />
        </section>
    )
}