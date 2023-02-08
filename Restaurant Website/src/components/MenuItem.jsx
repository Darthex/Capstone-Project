import React from "react";
import cart from "../images/cart.png"
import check from "../images/check.png"

export default function MenuItem(props) {

    const [flag, setFlag] = React.useState(false)

    function handleClick() {
        props.addToCart(props.id)
        setFlag(true)
    }


    return (
        <div className="home--card">
            <div className="menu--item">
                <section className="menu--desc">
                    <h1 className="menu--desc--header">{props.title}</h1>
                    <hr className="line--break"/>
                    <p className="menu--desc--ing">{props.description}</p>
                    <div className="menu--desc--footer">
                        <strong className="menu--desc--price">${props.price}</strong>
                        <button className="cart--button" onClick={handleClick}><img src={flag ? check: cart} alt="" className="cart--image"/></button>
                    </div>
                </section>
                <section className="menu--item--image">
                    <img src={props.image} alt="" className="food--image"/>
                </section>
            </div>
        </div>
    )
}
