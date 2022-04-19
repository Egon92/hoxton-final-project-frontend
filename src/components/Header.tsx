import { useNavigate } from "react-router-dom";
import "../styling/header.css";
import { useStore } from "../components/store"
import Modals from "./modals/Modals";
import { Link } from "react-router-dom";

export function Header({ setSearch }: any) {
    const navigate = useNavigate();
    const { updateModal } = useStore()

    return (
        <section className="header">
            <nav className="nav-bar">
                <div className="left-nav">
                    <div className="logo-wrapper">
                        <Link to={'/home'}>
                            <img id="logo-pic" src={`/assets/logoworkin.png`} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="center-nav">
                    <form className="search-form-wrapper" action="">
                        <input onChange={e => {
                            setSearch(e.target.value)
                        }} className="search-bar" type="text" placeholder="Search..." />
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
            {/* @ts-ignore */}
            <Modals />
        </section>
    );
}
