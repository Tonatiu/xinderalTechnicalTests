import React from 'react';
import '../../css/chatMessage.css';
import {MESSAGE_TYPES} from '../common/tools/webSocketConfig.js';

class ChatMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messageBody: props.messageBody
        };
        this.bgc = props.gackGroundColor;
    }

    render(){
        return(
            <div className="media message-container">
                <div style={{backgroundColor: `RGB(${this.state.messageBody.color})`}} className="mr-3 user-view">{this.state.messageBody.uname[0]}</div>
                <div className="media-body">
                    <div className="mt-0">{this.state.messageBody.type === MESSAGE_TYPES.JOIN ? `${this.state.messageBody.uname} se ha unido`: this.state.messageBody.message}</div>
                </div>
            </div>
        );
    }
}

export default ChatMessage;