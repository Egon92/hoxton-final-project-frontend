import { useNavigate } from "react-router-dom";
import { useStore } from "../store"
import "./Modal Styling/signIn.css";

export default function SignInModal() {
    const updateModal = useStore(store => store.updateModal)
    const signIn = useStore(store => store.signIn)
    const navigate = useNavigate()

    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Sign-in</h1>
                    <form onSubmit={(e: any) => {
                        e.preventDefault();
                        signIn(e.target.email.value, e.target.password.value);
                        updateModal('')
                    }}>
                        <div>
                            <label htmlFor="email">Enter email</label>
                            <input type="email" required name="email" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="password">Enter password</label>
                            <input type="password" required name="password" placeholder="Type Here..." />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}