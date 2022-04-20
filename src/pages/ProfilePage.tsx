import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import { useStore } from '../components/store';
import "../styling/profilePage.css";

export function ProfilePage() {
  const user = useStore(store => store.user )
  if(user === null) return <div>Loading...</div>
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
        <div className="bottom-main-home-wrapper">
          {user.acceptedProjects.map(project => (<div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">{project.title}</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">{project.description}</span>
            </div>
            <div className="bottom-payment-wrapper">{project.price}$</div>
          </div>))}
        </div>
      </main>
    </section>
  );
}
