import { HeaderAsEmployer } from "../components/HeaderAsEmployer";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store"
import '../styling/profileEmployer.css'

export function ProfilePageEmployer() {

    const updateModal = useStore(store => store.updateModal)
    const user = useStore(store => store.user)
    const setSelectedProject = useStore(store => store.setSelectedProject)


    return (
        <section className="profile__wrapper">
            <HeaderAsEmployer />
            <main className="main-wrapper__">
                <div className="employer-info__wrapper">
                    <img src={user?.avatar} alt="" />
                    <div className="employer__details">
                        <h1>{user?.full_name}</h1>
                        <p>{user?.bio}</p>
                        <h3>{user?.phone}</h3>
                    </div>
                </div>

                <div className="employer-jobs__info">
                    <h1>Previous jobs posted</h1>
                    <button onClick={() => { updateModal('post-job') }}>Post a job</button>
                    {user?.postedProjects.map(project => <div className="employer_profile_wrapper"
                        key={project.id}
                        onClick={() => setSelectedProject(project.id)}>
                        <div className="job_title_days_wrapper">
                            <span id="job-title-wrapper">{project.title}</span>
                            <span id="days_left_wrapper">{project.deadline}</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">{project.description}</span>
                        </div>
                        <div className="payment__wrapper">
                            {/* {project.price}$ */}
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