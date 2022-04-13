import { Header } from "../components/Header";
import "../styling/project.css";

export default function Project() {
    return (
        <section className="project-wrapper">
            <Header />
            <main className="project-main-wrapper">

                <div className="wrapper">
                    <div className="project-title-days-wrapper">
                        <span id="project-title-wrapper">Job title</span>
                    </div>

                    <div className="project-description-wrapper">
                        <span id="project-description">Job description</span>
                    </div>

                    <div className="job_description">
                        <h3>hourly rate</h3>
                        <button>Chat</button>
                        <button>apply</button>

                    </div>
                </div>
                <h2 className="previous_jobs">Previous jobs by user</h2>
                <div className="project-wrapper">
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
        </section>
    )
}