import { useState } from "react";
import { useStore } from "../store"
import "./Modal Styling/postJob.css";

export default function SignInModal() {

    const { updateModal } = useStore()
    const [project, setProject] = useState<Project[]>([])

    async function postProject(e: any) {
        e.preventDefault()
        const price = e.target.payment.value
        const deadline = e.target.deadline.value
        const tile = e.target.name.value
        const overview = e.target.info.value
        //    const status = e.target.payment.value
        //    const employer_id = user.id

        await fetch('http://localhost:4000/projects', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: price,
                deadline: Date(),
                tile: tile,
                overview: overview,
                status: true,
                employer_id: 2,
                category_id: 1
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setProject(data)
                }
            })

    }

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