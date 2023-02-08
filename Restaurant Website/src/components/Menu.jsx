import React from "react";
import MenuItem from "./MenuItem.jsx";
import {data} from "./data.js";

export default function Menu(props) {
    const db = data.menuItems
    return (
        <div>
            <br/>
            {db.map(value => <MenuItem
                id={value.id}
                title={value.title}
                description={value.desc}
                image={value.image}
                price={value.price}
                addToCart={props.addToCart}
            />)}
            <br/>
        </div>
    )
}
