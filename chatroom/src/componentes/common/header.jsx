import React from 'react';
import '../../css/header.css';
import user_image from '../../static/img/user_image.png'

function Header(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <div className="user-account-component row">
                            <img src={user_image} className="img-thumbnail user-img"/>
                            <div className="user-info">
                                <div className="row">
                                    <span>Usuario</span>
                                </div>
                                <div className="row">
                                    <a href="#">Cuenta</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                        <a className="navbar-brand" href="#">Ubicación</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;