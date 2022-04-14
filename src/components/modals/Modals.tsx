import { useStore } from "../store"
import PostJobModal from "./PostJobModal"
import SignInModal from "./SignInModal"
import SignUpEmployeeModal from "./SignUpEmployee"
import SignUpEmployerModal from "./SignUpEmployer"

export default function Modals() {
    const { modal } = useStore()
    if (modal === '') {
        return null
    }
    else if (modal === 'sign-in') {
        return <div>{< SignInModal />}</div>
    }
    else if (modal === 'sign-up-as-employee') {
        return <div>{< SignUpEmployeeModal />}</div>
    }
    else if (modal === 'sign-up-as-employer') {
        return <div>{< SignUpEmployerModal />}</div>
    }
    else if (modal === 'post-job') {
        return <div>{< PostJobModal />}</div>
    }
}