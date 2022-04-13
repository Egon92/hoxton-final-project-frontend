import { Header } from "../components/Header";
import Modals from "../components/modals/Modals";
import "../styling/home.css";

export function Home() {
  return (
    <section className="home-wrapper">
      <Header />
      <main className="home-main-wrapper">
        <div className="left-home-wrapper">
          <div className="filter-by-wrapper">
            <span>Filter by:</span>
          </div>
        </div>
        <div className="right-home-wrapper">
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
  );
}
