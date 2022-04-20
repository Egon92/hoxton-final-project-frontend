import { useStore } from "../store"
import "./Modal Styling/postJob.css";

export default function SignInModal() {

    const updateModal = useStore(state => state.updateModal);
    const user = useStore(state => state.user);
    const selectedProject = useStore(state => state.selectedProject);
    async function postBid(amount: number) {
        await fetch('http://localhost:4000/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employee_id: user?.id,
                project_id: selectedProject,
                bids: amount
            })
        }).then(res => res.json())
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
                    <form onSubmit={(e: any) => {
                        e.preventDefault()
                        postBid(Number(e.target.amount.value))
                    }}>
                        <div>
                            <label htmlFor="amount">Enter the amount you offer</label>
                            <input type="number" name="amount" placeholder="Type Here..." required />
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