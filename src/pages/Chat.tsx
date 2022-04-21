import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderAsEmployee } from '../components/HeaderAsEmployee'
import { useStore } from '../components/store'
import '../styling/chat.css'


export default function Chat() {


    const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null)
    const user = useStore(store => store.user)

    // function createMessage(text: Chat): void {
    //     fetch('http://localhost:4000/chat', {
    //         method: 'POST',
    //         headers: {
    //             Authorization: localStorage.token,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             messageText: text,
    //             conversation_id: Number(currentConversation?.id)
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.error) {
    //                 console.log(data.error)
    //             } else {
    //                 setCurrentConversation(data);
    //             }
    //         })
    // }

    useEffect(() => {
        fetch(`http://localhost:4000/conversations`, {
            method: 'get',
            headers: {
                Authorization: localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(data => setCurrentConversation(data))
    }, [])

    console.log(user)

    async function createMessage(e: any) {
        e.preventDefault()
        e.target.reset()

        const messageText = e.target.text.value
        const conversation_id = currentConversation?.id

        await fetch('http://localhost:4000/chat', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                conversation_id: conversation_id,
                messageText: messageText
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setCurrentConversation(data);
                }
            })

    }


    console.log(currentConversation)

    if (currentConversation === null) return <h1>Loading...</h1>

    return (
        <div className='main_chat_wraper'>
            <HeaderAsEmployee />
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">

                            <div id="plist" className="people-list">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <ul className="list-unstyled chat-list mt-2 mb-0">

                                    <li className="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Aiden Chavez</div>
                                        </div>
                                    </li>

                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Dean Henry</div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="chat">
                                <div className="chat-header clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href=" " >
                                                <img src={user?.avatar} alt="avatar" />
                                            </a>

                                            <div className="chat-about">
                                                <h6 className="m-b-0">{user?.full_name}</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="chat-history">
                                    {
                                        //@ts-ignore
                                        currentConversation?.map((message: Chat) =>
                                            <ul className="m-b-0">
                                                <li className="clearfix">
                                                    <div className="message-data text-right">

                                                    </div>
                                                    <div className="message other-message float-right">
                                                        {message.messageText}
                                                    </div>
                                                </li>

                                                <li className="clearfix">
                                                    <div className="message my-message">
                                                        {message.messageText}
                                                    </div>
                                                </li>

                                                <li className="clearfix">
                                                    {/* <div className="message my-message">Project has been already finished and I have results to show you.</div> */}
                                                </li>
                                            </ul>
                                        )}

                                </div>

                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-send"></i></span>
                                        </div>
                                        <form
                                            onSubmit={createMessage
                                                // (e) => {
                                                //     e.preventDefault()
                                                //@ts-ignore
                                                //     createMessage(e.target.text.value)
                                                // }
                                            }
                                        >
                                            <input type="text" className="form-control" name='text' placeholder="Enter text here..." required

                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}