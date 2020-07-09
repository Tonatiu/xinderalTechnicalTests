import React from 'react';
import getStompClient from '../common/tools/stompClientTools.js';

class Registry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registeredUser: false,
            uname:"",
            stompClient: null
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.uname){
            this.setState({stompClient: getStompClient(this.state.uname), registeredUser: this.state.uname !== ""})
            console.log(this.props);
            this.props.parentCallback(this.state);
        }
    }

    handleChange = (event) => {
        this.setState({uname: event.target.value});
    }

    render(){
        return(
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input className="form-control" id="uname" type="text" value={this.state.uname} onChange={this.handleChange}></input>
                    </div>
                    <button 
                        type="buton"
                        className="btn btn-primary" 
                        onClick={(e) => {this.handleClick(e)}}>
                        Registrarse
                    </button>
                </form>
            </div>
        );
    }
}

export default Registry;