import { useNavigate } from "react-router-dom";
import { useStore } from "../store"
import "./Modal Styling/signUp.css";

export default function SignUpEmployeeModal() {

    const updateModal = useStore(store => store.updateModal);
    const signUp = useStore(store => store.signUp);

    const navigate = useNavigate()

    return (

        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Sign up as employee</h1>
                    <form onSubmit={(e: any) => {
                        e.preventDefault()
                        signUp(e.target.username.value, e.target.name.value, e.target.email.value, e.target.password.value, e.target.avatar.value, Number(e.target.phone.value), e.target.address.value, e.target.bio.value, false)
                        updateModal('');
                    }}>
                        <div>
                            <label htmlFor="name">Enter Full Name</label>
                            <input type="text" name="name" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="username">Enter username</label>
                            <input type="text" name="username" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="email">Enter email</label>
                            <input type="email" name="email" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="password">Enter password</label>
                            <input type="password" name="password" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="avatar">Enter avatar url</label>
                            <input type="url" name="avatar" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="phone">Enter phone number</label>
                            <input type="tel" name="phone" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="address">Enter address</label>
                            <input type="text" name="address" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="bio">Enter bio</label>
                            <input type="text" name="bio" placeholder="Type Here..." />
                        </div>

                        <button type="submit" onSubmit={() => {
                            navigate('/employee')
                        }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}