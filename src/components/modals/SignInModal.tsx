import { useStore } from "../store"
import "./Modal Styling/signIn.css";

export default function SignInModal() {
    const { updateModal } = useStore()
    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => updateModal('')} className="close-modal">
                X
            </button>
            <div className='modal-container'>
                <h1>Sign-in</h1>
                <form>
                    <div>
                        <label htmlFor="email">Enter email</label>
                        <input type="email" required name="email" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter password</label>
                        <input type="password" required name="password" placeholder="Type Here..."/>
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