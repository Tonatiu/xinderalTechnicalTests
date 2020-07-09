import React from 'react';
import ChatRoom from '../chat/chatRoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import getStompClient from '../common/tools/stompClientTools.js';

class ChatBody extends React.Component{
    state = {
        toggle: false,
        registeredUser: false,
        stompClient: null,
        uname:""
    }
    
    callbackFunctionRegistry = (childData) => {
        this.setState({registeredUser: childData.registeredUser});
    }
    handleClick = () => {
        this.setState({toggle: !this.state.toggle})
    }
    handleRegistry = (e) =>{
        e.preventDefault();
        if(this.state.uname){
            this.setState({stompClient: getStompClient(this.state.uname), registeredUser: this.state.uname !== ""})
        }
    }
    handleChange = (event) => {
        this.setState({uname: event.target.value});
    }
    
    render() {
        let registry = 
        <div className="container-fluid">
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input className="form-control" id="uname" type="text" value={this.state.uname} onChange={this.handleChange}></input>
                </div>
                <button 
                    type="buton"
                    className="btn btn-primary" 
                    onClick={(e) => {this.handleRegistry(e)}}>
                    Registrarse
                </button>
            </form>
        </div>;

        let chatContent = null;
        if(this.state.registeredUser){
            chatContent = <ChatRoom uname = {this.state.uname}/>;
        }else{
            chatContent = registry;
        }

        let chatWindow = 
        <div className="row" style={this.state.toggle ? {} : {display:'none'}}>
            {chatContent}
        </div>;

        return (
            <div className="fixed-bottom d-flex align-items-end flex-column">
                {chatWindow}
                <button onClick={() => {this.handleClick()}} type="button" className="btn btn-info"><FontAwesomeIcon icon={faComment}/> Chat</button>
            </div>
        );
    }
}

export default ChatBody;