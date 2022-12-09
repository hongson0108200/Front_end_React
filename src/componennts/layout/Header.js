import React from "react";
import Logo from "../../assets/images/logo.png";
import header from "../css/header.css";
import { Button } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

import {
    NavLink
} from "react-router-dom";


function Header() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <NavLink to="/" >
                            <img src={Logo} className="logo" />
                        </NavLink>
                    </div>

                    <div className="col-md-6">
                        <ul className="nav navmenu">
                            <li className="nav-item">
                                <NavLink to="/home" activeClassName="selected" className="nav-link active" aria-current="page">
                                    Home
                                </NavLink>
                                {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" activeClassName="selected" className="nav-link active" >
                                    Shop
                                </NavLink>
                                {/* <a className="nav-link" href="/shop">Shop</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" activeClassName="selected" className="nav-link active" >
                                    Features
                                </NavLink>
                                {/* <a className="nav-link" href="#">Features</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" activeClassName="selected" className="nav-link active" >
                                    Blog
                                </NavLink>
                                {/* <a className="nav-link" href="#">Blog</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="selected" className="nav-link active" >
                                    About
                                </NavLink>
                                {/* <a className="nav-link" href="/about">About</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" activeClassName="selected" className="nav-link active" >
                                    Contact
                                </NavLink>
                                {/* <a className="nav-link" href="#">Contact</a> */}
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5" id="my_account">
                                <BsFillPersonFill />
                                <span className="myaccount"> MY ACCOUNT</span>
                            </div>

                            <div className="col-md-3" id="account">
                                <HiShoppingCart />
                                <span className="myaccount"> CART</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Header;