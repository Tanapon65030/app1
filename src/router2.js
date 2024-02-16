import React from "react";
import { BrowserRouter, NavLink } from 'react-router-dom';
import './navlink.css';

export default function Router2() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : ""
                        };
                    }}>
                    Home
                </NavLink>
                &nbsp; -&nbsp;
                <NavLink
                    to='/products'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Products
                </NavLink>
                &nbsp; -&nbsp;
                <NavLink
                    to='/member'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Member
                </NavLink>
                &nbsp; -&nbsp;
                <NavLink
                    to='/contact'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Contact
                </NavLink>
            </nav>
        </BrowserRouter>
    );
}
