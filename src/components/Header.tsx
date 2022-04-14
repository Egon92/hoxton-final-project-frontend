import { useNavigate } from "react-router-dom";
import "../styling/header.css";
import { useStore } from "../components/store"
import Modals from "./modals/Modals";

export function Header() {
    const navigate = useNavigate();
    const { updateModal } = useStore()

    return (
        <section className="header">
            <nav className="nav-bar">
                <div className="left-nav">
                    <div className="logo-wrapper">
                        <img id="logo-pic" src={`/assets/logoworkin.png`} alt="" />
                    </div>
                </div>
                <div className="center-nav">
                    <form className="search-form-wrapper" action="">
                        <input className="search-bar" type="text" placeholder="Search..." />
                        <button className="search_svg"><img src={`/assets/search.svg`} alt="" /></button>
                    </form>
                </div>
                <div className="right-nav">
                    <div onClick={() => { updateModal('sign-in') }} className="sign-in-header-wrapper">sign in</div>
                    <div className="want-to-hire-header-wrapper">
                        <span onClick={() => { updateModal('sign-up-as-employer') }} id="want-to-hire">| want to hire</span>
                    </div>
                    <div className="want-to-work-header-wrapper">
                        <span onClick={() => { updateModal('sign-up-as-employee') }} id="want-to-work">| want to work</span>
                    </div>
                </div>
            </nav>
            {/* <div className="top-jobs-bar">Top jobs</div> */}
            <Modals />
        </section>
    );
}
