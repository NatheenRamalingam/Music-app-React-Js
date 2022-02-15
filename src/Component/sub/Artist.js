import React from "react";
import {Link} from 'react-router-dom'

function  Artist(props) {
    const{id,name,images,genres,followers}=props;
    return(
        <div className="col-md-6 mt-2">
            <div className="card">
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Name</strong>
                        <span className="float-end">{name}</span>

                    </li>
                    <li className="list-group-item">
                        <strong>Genres</strong>
                        <span className="float-end">{genres}</span>

                    </li>
                    <li className="list-group-item">
                        <strong>Followers</strong>
                        <span className="float-end">{followers.total}</span>

                    </li>

                </ul>

            </div>

            </div>
            <div className="card-footer">
                <Link to={`/track/${id}`} className="btn btn-success">Load Tracks</Link>


            </div>
        </div>
    )
}
export default Artist;