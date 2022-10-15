import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import imagenFondo from "../assets/images/404.png";
import CardUser from "./CardUser";

function LastUserInDb() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/users/lastone")
            .then((response) => response.json())
            .then((users) => setUsers(users.data));
    }, []);

    return (
        <React.Fragment>
           
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last users in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: 15 + "rem" }}
                                src={`${users.avatar}`}
                                alt=" Img - Last UsersInDb "
                            />
                        </div>
                        <div>
                            <p> {users.model} </p>
                            <Link to={{ pathname: `CardUser/${users.id}`, state: {user: users} }} className="btn btn-danger" rel="nofollow">
                                View user detail
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </ React.Fragment>
    );
}

export default LastUserInDb;
