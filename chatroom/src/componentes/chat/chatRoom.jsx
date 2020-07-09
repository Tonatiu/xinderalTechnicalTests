import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import getStompClient from '../common/tools/stompClientTools.js';
import ChatMessage from './chatMessage';
import '../../css/chatRoom.css';

class ChatRoom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stompClientP: getStompClient(props.uname),
            message: null,
            messages: [],
            userAlias: props.uname[0]
        }
        this.state.stompClientP.onMessageReceived = this.onMessageReceived;
        this.chatContainer = React.createRef();
    }

    onMessageReceived = (payload) =>{
        var message = JSON.parse(payload.body);
        this.state.messages.push(message);
        this.setState({messages: this.state.messages}, ()=> this.scrollToMyRef());
    }

    handleSend = (e) =>{
        e.preventDefault();
        this.state.stompClientP.send(e, this.state.message, "/app/chat.send");
        this.setState({message:""}, ()=> this.scrollToMyRef());
    }

    handleChange = (e) => {
        this.setState({message: e.target.value});
    }

    handleKeyPressed = (event) =>{
        if(event.key === "Enter"){
            this.handleSend(event);
        }
    }

    scrollToMyRef = () => {
        const scroll = this.chatContainer.current.scrollHeight - this.chatContainer.current.clientHeight;
        this.chatContainer.current.scrollTo(0, scroll);
    };
    
    render(){
        return(
            <div className="row chat-room">
                <div className="card">
                    <div className="card-body messages-container" ref={this.chatContainer}>
                        {this.state.messages.map(message => (
                            <ChatMessage messageBody={message}/>
                        ))}
                    </div>
                    <div className="card-body chatInput">
                        <form className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Mensaje" 
                                    value={this.state.message} 
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPressed}/>
                            </div>
                            <button 
                                type="button" 
                                class="btn btn-primary mb-2"
                                onClick={(e) => {this.handleSend(e)}}>
                                    <FontAwesomeIcon icon={faCommentDots}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatRoom;