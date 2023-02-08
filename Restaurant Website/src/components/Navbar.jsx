import React from "react";
import logo from "../images/restaurant.png"
import {Link} from "react-router-dom";

export default function Navbar() {
    const [flag, setFlag] = React.useState(true)

    window.onscroll = function (){
        scrollFunction();
    }
    function scrollFunction() {
        if( document.documentElement.scrollTop > 20) {
           setFlag(false)
        } else {
            setFlag(true)
        }
    }

    return(
        <div className="navbar" style={{backgroundColor : flag ? "transparent": "black"}}>
            <div className="logo--header">
                {/*<img src={logo} alt="Logo" className="logo"/>*/}
                <h2>Z E E V</h2>
            </div>
            <div className="item--header">
                <Link to='/' className="navbar--item">Home</Link>
                <Link to='/menu' className="navbar--item">Menu</Link>
                <Link to='/order' className="navbar--item">Order</Link>
            </div>
        </div>
    )
}
