import { useStore } from "../store"
import "./Modal Styling/signUp.css";

export default function SignUpEmployerModal() {
    // const { updateModal } = useStore()


    const updateModal = useStore(store => store.updateModal);
    const signUp = useStore(store => store.signUp);

    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Sign up as employer</h1>
                    <form
                        onSubmit={(e: any) => {
                            e.preventDefault()
                            signUp(e.target.username.value, e.target.name.value, e.target.email.value, e.target.password.value, e.target.avatar.value, Number(e.target.phone.value), e.target.address.value, e.target.bio.value, true)
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
                            <label htmlFor="phone">Enter phone number</label>
                            <input type="tel" name="phone" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="address">Enter address</label>
                            <input type="text" name="address" placeholder="Type Here..." />
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