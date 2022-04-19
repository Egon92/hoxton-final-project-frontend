import { useState } from "react";
import { useStore } from "../store"
import "./Modal Styling/postJob.css";

export default function SignInModal() {

    const  updateModal  = useStore(state => state.updateModal);
    const [project, setProject] = useState<Project[]>([])

    async function postProject(e: any) {
        e.preventDefault()
        const price = Number(e.target.price.value)
        const deadline = e.target.deadline.value
        const title = e.target.title.value
        const description = e.target.description.value
        const category_id = Number(e.target.category.value) 

        await fetch('http://localhost:4000/projects', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: price,
                deadline: deadline,
                title: title,
                description: description,
                status: 0,
                category_id: category_id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    updateModal("")         
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
                    <form onSubmit={(e:any)=>{postProject(e )}}>
                        <div>
                            <label htmlFor="title">Enter the title for your project</label>
                            <input type="text" name="title" placeholder="Type Here..."  required/>
                        </div>
                        <div>
                            <label htmlFor="description">Tell us more about your project</label>
                            <input type="area" name="description" placeholder="Type Here..."  required/>
                        </div>
                        <div>
                            <label htmlFor="cateegory">Select a category for your project:</label>
                            <select name='category' required>
                                <option selected disabled  value="">Select a category</option>
                                <option  value={1}>Graphics Design</option>
                                <option  value={2}>Digital Marketing</option>
                                <option  value={3}>Writing & Translation</option>
                                <option  value={4}>Video & Animation</option>
                                <option  value={5}>Music & Audio</option>
                                <option  value={6}>Programming & Tech</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price">What is the payment?</label>
                            <input type="number" min={1 } name="price" placeholder="Type Here..."  required/>
                        </div>
                        <div>
                            <label htmlFor="deadline">When is the deadline?</label>
                            <input type="date" name="deadline" placeholder="Type Here..." min={"2022-04-23"} required/>
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