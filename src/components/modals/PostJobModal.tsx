import { useStore } from "../store"
import "./Modal Styling/postJob.css";

export default function SignInModal() {
    const { updateModal } = useStore()
    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Post a job</h1>
                    <form>
                        <div>
                            <label htmlFor="name">Enter name for your project</label>
                            <input type="text" name="name" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="info">Tell us more about your project</label>
                            <input type="area" name="info" placeholder="Type Here..." />
                        </div>
                        {/* <div className="skills">
                            <p>What skills are required?</p>
                            <ul>
                                <li>
                                    <input className="input" type="checkbox" name="skill2" />
                                    <label htmlFor="skill2">
                                        <span>Skill 2</span>
                                    </label>
                                </li>
                            </ul>

                        </div> */}
                        <div>
                            <label htmlFor="payment">What is the payment?</label>
                            <input type="number" name="payment" placeholder="Type Here..." />
                        </div>
                        <div>
                            <label htmlFor="deadline">When is the deadline?</label>
                            <input type="date" name="deadline" placeholder="Type Here..." />
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