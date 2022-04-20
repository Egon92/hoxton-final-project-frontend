import { useEffect, useState } from 'react';
import { useStore } from "../store"
import "./Modal Styling/seeBids.css";

export default function SignInModal() {
    const { updateModal } = useStore()
    const [bids, setBids] = useState<Bid[]>([])
    const selectedProject  = useStore(store=> store.selectedProject)
    useEffect(()=>{
        fetch(`http://localhost:4000/bids/${selectedProject}`)
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            setBids(data)
        })
    }, [selectedProject])

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

                    {bids.map(bid=> (<div className="bid-card">
                        <span>{bid.employee.username}</span>
                        <span>{bid.bids}$</span>
                        <button title="accept bid">✓</button>
                        <button title="decline bid">x</button>
                    </div>
                    ))}
                
                </div>
            </div>
        </div>
    )
}