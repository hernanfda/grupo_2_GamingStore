import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import imagenFondo from "../assets/images/404.png";
import { useParams, useLocation } from "react-router-dom";
// import { userDetail } from "../../../controllers/api/usersApiControllers";

const CardUser = (props) => {
    console.log(useLocation().state);
    const { user } = useLocation().state; //ME TRAIGO LA MOVIE PASADA EN EL LINK

    return (
        <div className="col-sm-8 col-md-4  mt-6 container">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{user.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={`${user.avatar}`}
                            alt={user.name}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>
                    <p>Nombre: {user.name} </p>
                    <p>Apellido: {user.lastname}</p>
                    <p>Email: {user.email} </p>
                </div>
            </div>
        </div>
    );
};

export default CardUser;
