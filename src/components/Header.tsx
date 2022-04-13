import { useNavigate } from "react-router-dom";
import "../styling/header.css";

export function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo-wrapper">
            <img id="logo-pic" src="/public/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="right-nav">
          <div className="sign-in-header-wrapper">sign in</div>
          <div className="want-to-hire-header-wrapper">
            <span id="want-to-hire">| want to hire</span>
          </div>
          <div className="want-to-work-header-wrapper">
            <span id="want-to-work">| want to work</span>
          </div>
        </div>
      </nav>
      <div className="top-jobs-bar">Top jobs</div>
      <form className="search-form-wrapper" action="">
        <input className="search-bar" type="text" placeholder="Search..." />
      </form>
    </section>
  );
}
