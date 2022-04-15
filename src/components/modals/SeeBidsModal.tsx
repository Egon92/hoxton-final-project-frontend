import { useStore } from "../store"
import "./Modal Styling/seeBids.css";

export default function SignInModal() {
    const { updateModal } = useStore()
    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <div className='modal-container'>
                    <h1>Bids</h1>
                    <div className="bid-card">
                        <span>username</span>
                        <span>bid amount</span>
                        <button title="accept bid">✓</button>
                        <button title="decline bid">x</button>
                    </div>
                    <div className="bid-card">
                        <span>username</span>
                        <span>bid amount</span>
                        <button title="accept bid">✓</button>
                        <button title="decline bid">x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}