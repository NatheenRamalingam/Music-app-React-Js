import React from "react";
import {Link} from 'react-router-dom'

function Menu(props){
    return(
       <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                <div className="container">
                    <Link to={`/`} className="navbar-brand">Music Player</Link>
                    {/* to={} in this link is set at path in App.js */}
                    <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to={`/home`} className="nav-link">Home</Link>

                            </li>
                            <li className="nav-item">
                            <Link to={`/Music`} className="nav-link">Music</Link>

                            </li>
                            <li className="nav-item">
                            <Link to={`/contact`} className="nav-link">Contact</Link>

                            </li>
                            <li className="nav-item">
                            <Link to={`/todo`} className="nav-link">TODO</Link>

                            </li>
                          

                        </ul>

                    </div>

                </div>
            </nav>
                    </div> 
    )
}
export default Menu;