import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import "../styling/profilePage.css";

export function ProfilePage() {
  return (
    <section className="home-wrapper">
      <HeaderAsEmployee />
      <main className="profile-home-main-wrapper">
        <div className="top-main-home-wrapper">
          <div className="top-main-job-wrapper">
            <div className="top-profile-pic-wrapper">
              <img
                id="top-profile-pic"
                src="/assets/account_circle_black_24dp.svg"
                alt=""
              />
            </div>
            <div className="top-job-description-wrapper">
              <span className="top-worker-name">Worker name</span>
              <span id="top-job-description">Bio</span>
              <div className="top-payment-wrapper">Hourly rate</div>
            </div>
          </div>
        </div>
        <div className="bottom-main-home-wrapper">
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
          <div className="bottom-job-wrapper">
            <div className="bottom-job-title-wrapper">
              <span id="bottom-job-title-wrapper">Job title</span>
            </div>
            <div className="bottom-job-description-wrapper">
              <span id="bottom-job-description">Job description</span>
            </div>
            <div className="bottom-payment-wrapper">Payment</div>
          </div>
        </div>
      </main>
    </section>
  );
}
