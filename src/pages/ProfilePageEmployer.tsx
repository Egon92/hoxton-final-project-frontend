import { HeaderAsEmployer } from "../components/HeaderAsEmployer";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store"
import '../styling/profileEmployer.css'

export function ProfilePageEmployer() {

    const  updateModal  = useStore(store=> store.updateModal)
    const user = useStore(store => store.user)
    const setSelectedProject = useStore(store => store.setSelectedProject)


    return (
        <section className="profile-wrapper">
            <HeaderAsEmployer />
            <main className="main-wrapper">
                <div className="employer-info-wrapper">
                    <img src="/assets/account_circle_black_24dp.svg" alt="" />
                    <div className="employer-details">
                        <h1>User full name</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos expedita officiis similique totam sed enim aliquam aliquid consectetur, at illum, quibusdam nihil veniam, odit quasi in? Incidunt aperiam aspernatur quasi.</p>
                        <h3>average payrate</h3>
                    </div>
                </div>
                <div className="employer-jobs-info">
                    <h1>Previous jobs posted</h1>
                    <button onClick={() => { updateModal('post-job') }}>Post a job</button>
                    {user?.postedProjects.map(project =>  <div className="job-wrapper" onClick={()=> setSelectedProject(project.id)}>
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