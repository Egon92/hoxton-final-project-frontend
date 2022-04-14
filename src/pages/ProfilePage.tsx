// import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
// import "../styling/profilePage.css";

// export function ProfilePage() {
//   return (
//     <section className="home-wrapper">
//       <HeaderAsEmployee />
//       <main className="home-main-wrapper">
//         <div className="top-main-home-wrapper">
//           <div className="top-main-job-wrapper">
//             <div className="top-profile-pic-wrapper">
//               <img
//                 id="top-profile-pic"
//                 src="/assets/account_circle_black_24dp.svg"
//                 alt=""
//               />
//             </div>
//             <div className="top-job-description-wrapper">
//               <span className="top-worker-name">Worker name</span>
//               <span id="top-job-description">Bio</span>
//               <div className="top-payment-wrapper">Hourly rate</div>
//             </div>
//           </div>
//         </div>
//         <div className="bottom-main-home-wrapper">
//           <div className="bottom-job-wrapper">
//             <div className="bottom-job-title-wrapper">
//               <span id="bottom-job-title-wrapper">Job title</span>
//             </div>
//             <div className="bottom-job-description-wrapper">
//               <span id="bottom-job-description">Job description</span>
//             </div>
//             <div className="bottom-payment-wrapper">Payment</div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// }

import { HeaderAsEmployee } from "../components/HeaderAsEmployee";
import '../styling/profileEmployer.css'

export function ProfilePage() {
    return (
        <section className="profile-wrapper">
            <HeaderAsEmployee />
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
                    <h1>Previous jobs</h1>
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
    )
}