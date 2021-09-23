import React from "react";

const NavBar = ({counters}) => {
    const totalCounters=counters.length
    const activCounters=counters.filter(c=>c.value>0).length
    const totalCount = counters.reduce((acc, {value})=>acc+value,0)

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                <span className="badge badge-pill badge-secondary">
                    Counters!
        </span>
            </a>
            <div className="container row1">
                <h2> Total number of counters <span
                    > {totalCounters}</span>
                </h2>
                <h2>Active counters <span
                   >{activCounters}</span>
                </h2>
                <h2>Total Count <span>
                {totalCount}</span></h2>
            </div>
        </nav>
    );
};

export default NavBar;
