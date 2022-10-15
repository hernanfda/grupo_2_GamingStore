import React from "react";
import image from "../assets/images/logo-light.svg";
import { Link, Route, Switch } from "react-router-dom";
import CategoriesDb from "./CategoriesInDb";
import LastUserInDb from "./LastUserInDb";
import LastProductInDb from "./LastProductInDb";
import CardUser from "./CardUser";
import CardProduct from "./CardProduct";
import ContentRowMovies from "./ContentRowMovies";
import Product from "./ProductTable";
import ContentWrapper from "./ContentWrapper";
import NotFound from "./NotFound404";
import SearchMovies from "./SearchProduct";

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                {/*<!-- Sidebar - Brand -->*/}
                <Link to={"/"} className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Gamer Experience" />
                    </div>
                </Link>
                ̰{/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />
                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link to={"/"} className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>GamerXperience</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Actions</div>
                <li className="nav-item">
                    <Link to={"/Products"} className="nav-link collapsed">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Products</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/LastProductInDb"} className="nav-link collapsed">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Last Product in DB</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/LastUserInDb"} className="nav-link collapsed">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Last User in DB</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link to={"/ContentRowMovies"} className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Content Row Movies</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link to="/search" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Search Product</span>
                    </Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            {/* DEFINIMOS LAS RUTAS! */}
            <Switch>
                <Route path="/CategoriesInDb" component={CategoriesDb} />
                <Route path="/LastProductInDb" component={LastProductInDb} />
                <Route path="/LastUserInDb" component={LastUserInDb} />
                <Route path="/ContentRowMovies" component={ContentRowMovies} />
                <Route path="/Products" component={Product} />
                <Route path="/Search" component={SearchMovies} />
                <Route path="/CardProduct/:id" component={CardProduct} />
                <Route path="/CardUser/:id" component={CardUser} />
                <Route exact path="/" component={ContentWrapper} />
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    );
}
export default SideBar;
