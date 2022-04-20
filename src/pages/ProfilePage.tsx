import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import { useStore } from '../components/store';
import "../styling/profilePage.css";

export function ProfilePage() {
  const user = useStore(store => store.user)
  if (user === null) return <div>Loading...</div>

  console.log(user.acceptedProjects)
  return (
    <section className="profile-home-wrapper">
      <HeaderAsEmployee />
      <main className="profile-home-main-wrapper">
        <div className="top-main-home-wrapper">
          <div className="top-main-job-wrapper">
            <div className="top-profile-pic-wrapper">
              <img
                id="top-profile-pic"
                src={user.avatar}
                alt=""
              />
            </div>
            <div className="top-job-description-wrapper">
              <span className="top-worker-name">{user.full_name}</span>
              <span id="top-job-description">{user.bio}</span>
              <div className="top-payment-wrapper">{user.phone}</div>
            </div>
          </div>
        </div>
        <div className="bottom_main_home_wrapper">
          {user.acceptedProjects.map(project => (
            <div className="bottom_job_wrapper">
              <div className="bottom_job_title_wrapper">
                <span id="bottom_job_title_wrapper">{project.title}</span>
              </div>
              <div className="bottom_job_description_wrapper">
                <span id="bottom_job_description">{project.description}</span>
              </div>
              <div className="bottom_payment_wrapper">{project.price}$</div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
