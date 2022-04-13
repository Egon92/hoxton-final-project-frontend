import { useStore } from "../store"
import "./Modal Styling/signUp.css";

export default function SignUpEmployeeModal() {
    const { updateModal } = useStore()
    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => updateModal('')} className="close-modal">
                X
            </button>
            <div className='modal-container'>
                <h1>Sign up as employee</h1>
                <form>
                    <div>
                        <label htmlFor="name">Enter Full Name</label>
                        <input type="text" name="name" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="username">Enter username</label>
                        <input type="text" name="username" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="email">Enter email</label>
                        <input type="email" name="email" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter password</label>
                        <input type="password" name="password" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="phone">Enter phone number</label>
                        <input type="tel" name="phone" placeholder="Type Here..."/>
                    </div>
                    <div>
                        <label htmlFor="address">Enter address</label>
                        <input type="text" name="address" placeholder="Type Here..."/>
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