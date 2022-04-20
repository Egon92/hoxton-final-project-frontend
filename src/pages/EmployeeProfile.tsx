import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderAsEmployer } from "../components/HeaderAsEmployer";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store"
import '../styling/profileEmployer.css'

export function EmployeeProfile() {
    const params = useParams()
    const [employee, setEmployee] = useState<any>(null)
    
    useEffect(() => {
        fetch(`http://localhost:4000/employees/${params.id}`)
            .then(resp => resp.json())
            .then(data => setEmployee(data))
    }, [])

    const  updateModal  = useStore(store=> store.updateModal)
    const user = useStore(store => store.user)
    const setSelectedProject = useStore(store => store.setSelectedProject)

if(employee === null) return <h1>Loading</h1>
    return (
        <section className="profile-wrapper">
            <HeaderAsEmployer />
            <main className="main-wrapper">
                <div className="employer-info-wrapper">
                    <img src={employee.avatar} alt="" />
                    <div className="employer-details">
                        <h1>{employee?.full_name}</h1>
                        <p>Bio: {employee?.bio}</p>
                        <h4>Phone Number: {employee?.phone}</h4>
                        <h4>Address: {employee?.address}</h4>
                        <button>chat</button>
                    </div>
                </div>
                <div className="employer-jobs-info">
                    <h1>Previous projects</h1>
                    {employee?.acceptedProjects.map((project:any) =>  <div className="job-wrapper" onClick={()=> setSelectedProject(project.id)}>
                        <div className="job-title-days-wrapper">
                            <span id="job-title-wrapper">{project.title}</span>
                            <span id="days-left-wrapper">{project.deadline}</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">{project.description}</span>
                        </div>
                        <div className="payment-wrapper">
                            {project.price}$
                            <button onClick={() => updateModal('see-bids')}>See bids</button>
                        </div>
                    </div>)}
                </div>
            </main>
            {/* @ts-ignore */}
            < Modals />
        </section>
    )
}