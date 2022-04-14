import { Link, useNavigate } from "react-router-dom";
import "../styling/headerAsEmployee.css";
import { useStore } from "./store";


export function HeaderAsEmployee() {

  const signOut = useStore(store => store.signOut);
  const navigate = useNavigate()
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
            <button id="want-to-hire" onClick={() => {
              signOut()
              navigate('/home')
            }} >| sign out</button>
          </div>
          <div className="username-pic-header-wrapper">
            <Link to={'/profile'}>
              <span id="username" >| Profile</span>
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
