import { Header } from "../components/Header";
import Modals from "../components/modals/Modals";
import { useStore } from "../components/store"
import '../styling/profileEmployer.css'

export function ProfilePageEmployer() {
  const { updateModal } = useStore()
    return (
        <section className="profile-wrapper">
            <Header />
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
                    <button onClick={() => {updateModal('post-job')}}>Post a job</button>
                    <div className="job-wrapper">
                        <div className="job-title-days-wrapper">
                            <span id="job-title-wrapper">Job title</span>
                            <span id="days-left-wrapper">Days left</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">Job description</span>
                        </div>
                        <div className="payment-wrapper">Payment</div>
                    </div>
                    <div className="job-wrapper">
                        <div className="job-title-days-wrapper">
                            <span id="job-title-wrapper">Job title</span>
                            <span id="days-left-wrapper">Days left</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">Job description</span>
                        </div>
                        <div className="payment-wrapper">Payment</div>
                    </div>
                    <div className="job-wrapper">
                        <div className="job-title-days-wrapper">
                            <span id="job-title-wrapper">Job title</span>
                            <span id="days-left-wrapper">Days left</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">Job description</span>
                        </div>
                        <div className="payment-wrapper">Payment</div>
                    </div>
                    <div className="job-wrapper">
                        <div className="job-title-days-wrapper">
                            <span id="job-title-wrapper">Job title</span>
                            <span id="days-left-wrapper">Days left</span>
                        </div>
                        <div className="job-description-wrapper">
                            <span id="job-description">Job description</span>
                        </div>
                        <div className="payment-wrapper">Payment</div>
                    </div>
                </div>
            </main>
            < Modals />
        </section>
    )
}