import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                <span className="badge badge-pill badge-secondary">
                    Counters!
        </span>
            </a>
            <div className="container row1">
                <h2> Total number of counters <span
                    ></span>
                </h2>
                <h2>Active counters <span
                   ></span>
                </h2>
                <h2>Total Count <span>
                    </span></h2>
            </div>
        </nav>
    );
};

export default NavBar;
