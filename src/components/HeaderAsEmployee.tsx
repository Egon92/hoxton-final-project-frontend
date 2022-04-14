import { Link } from "react-router-dom";
import "../styling/headerAsEmployee.css";


export function HeaderAsEmployee() {


  return (

    <section className="header-as-employee">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo-wrapper">
            <Link to={'/employee'}>
              <img id="logo-pic" src={`public/assets/logoworkin.png`} alt="" />
            </Link>
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
            <Link to={'/profile'}>
              <span id="username">| username</span>
            </Link>
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
