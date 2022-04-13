import { useNavigate } from "react-router-dom";
import "../styling/headerAsEmployee.css";
export function HeaderAsEmployee() {
  const navigate = useNavigate();
  return (
    <section className="header-as-employee">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo-wrapper">
            <img id="logo-pic" src={`public/assets/logoworkin.png`} alt="" />
          </div>
        </div>
        <div className="center-nav">
          <form className="search-form-wrapper" action="">
            <input className="search-bar" type="text" placeholder="Search..." />
            <button className="search_svg">
              <img src={`public/assets/search.svg`} alt="" />
            </button>
          </form>
        </div>
        <div className="right-nav">
          <div className="notifications-header-wrapper">notifications</div>
          <div className="sign-out-header-wrapper">
            <span id="want-to-hire">| sign out</span>
          </div>
          <div className="username-pic-header-wrapper">
            <span id="username">| username</span>
            <img
              id="user-pic"
              src="/public/assets/account_circle_black_24dp.svg"
              alt="user-pic"
            />
          </div>
        </div>
      </nav>
    </section>
  );
}
