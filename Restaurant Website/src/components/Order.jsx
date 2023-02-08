import React from "react";
import popper from "../images/party-popper.png"
import compass from "../images/compass.png"
import box from "../images/empty-box.png"
import {MdDeleteForever} from "react-icons/all"
import {useNavigate} from "react-router-dom"

export default function Order(props) {
    const navigate = useNavigate()
    const [flag, setFlag] = React.useState(true)
    const [formData, setFormData] = React.useState(
        {name: "", number: "", address: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleClick() {
        setFlag(false)
    }

    function handleClick2() {
        setFlag(true)
    }

    function handleClick3() {
        navigate("/menu")
    }

    let price = 0
    props.list.map(value => price += value.price)

    return (
        <div>
            {flag ?
                <div>
                    <br/>
                    <div className="order--screen">
                        {
                            price > 0 ?
                                <div>
                                    <section className="order--section">
                                        <h1>Order Details</h1>
                                        <br/>
                                        <hr/>
                                        {
                                            props.list.map(value => <section className="order--items">
                                                <div className="item--tray">
                                                    <p>{value.title}</p>
                                                    <MdDeleteForever className="item--tray--delete"
                                                                     onClick={() => props.delete(value.id)}/>
                                                </div>
                                                <p>${value.price}</p>
                                            </section>)
                                        }
                                        <hr/>
                                        <div className="total">
                                            <h3>Total</h3>
                                            <h3 style={{color: "limegreen"}}>${price}</h3>
                                        </div>
                                    </section>
                                    <section className="billing--section">
                                        <div className="form">
                                            <div className="form2">
                                                <input type="text" className="field" placeholder="Name"
                                                       onChange={handleChange} name="name"/>
                                                <input type="text" className="field" placeholder="Phone Number"
                                                       onChange={handleChange} name="number"/>
                                            </div>
                                            <input type="text" className="field" placeholder="Address"
                                                   onChange={handleChange} name="address"/>

                                            <select className="field" placeholder="Select Payment Method"
                                                    style={{cursor: "pointer"}}>
                                                <option value="">Cash On Delivery</option>
                                                <option value="">PayPal</option>
                                                <option value="">UPI</option>
                                                <option value="">Credit/Debit Card</option>
                                            </select>

                                            <button onClick={handleClick} className="proceed--button">Proceed</button>
                                        </div>
                                    </section>
                                </div>
                                :
                                <div className="empty--order--screen">
                                    <section className="home--card">
                                        <div className="empty--order--content">
                                            <h1 className="empty--heading">Oh No!</h1>
                                            <h3 className="empty--inventory">0 items in your inventory</h3>
                                            <img src={box} alt="" className="empty--image"/>
                                            <button className="empty--button" onClick={handleClick3}>Explore Menu
                                            </button>
                                        </div>
                                    </section>
                                </div>
                        }
                    </div>
                </div>
                :
                <div>
                    <br/>
                    <div className="home--card">
                        <div className="order--placed">
                            <img src={popper} alt="" className="party--popper"/>
                            <h2 className="order--confirmation">Your Order Has Been
                                Placed {formData.name.toUpperCase()}</h2>
                            <h3>It will reach you in {Math.ceil(Math.random() * (60 - 30) + 30)} minutes.</h3>
                            <button className="explore--more--button" onClick={handleClick2}>
                                <img src={compass} alt="" className="compass"/>
                                <p className="button--text">Order Again</p>
                            </button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
