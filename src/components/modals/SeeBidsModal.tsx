import { useEffect, useState } from 'react';
import { useStore } from "../store"
import "./Modal Styling/seeBids.css";

export default function SignInModal() {
    const { updateModal } = useStore()
    const [bids, setBids] = useState<Bid[]>([])
    const selectedProject  = useStore(store=> store.selectedProject)
    const updateProject = useStore(store=> store.updateProject)
    useEffect(()=>{
        fetch(`http://localhost:4000/bids/${selectedProject}`)
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            setBids(data)
        })
    }, [selectedProject])

    function acceptBidOnServer(employee_id:number,project_id:number){
        fetch(`http://localhost:4000/projects/${project_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                employee_id: employee_id
            })
        })
        .then(resp => resp.json())
        .then(project => {
            updateProject(project)
            updateModal("")
        })
    }

    if(bids.length === 0){
        return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => updateModal('')} className="close-modal">
                X
            </button>
            <div className='modal-container'>
                <h1>There are no bids for this project</h1>
            </div>
        </div>
    </div>)
    }
    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Bids</h1>

                    {bids.map(bid=> (<div className="bid-card" key={bid.id}>
                        <span>{bid.employee.username}</span>
                        <span>{bid.bids}$</span>
                        <button title="accept bid" onClick={()=>{
                            acceptBidOnServer(bid.employee_id, bid.project_id)
                        }}>✓</button>
                        <button title="decline bid">x</button>
                    </div>
                    ))}
                
                </div>
            </div>
        </div>
    )
}