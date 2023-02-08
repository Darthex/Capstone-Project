import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Order from "./components/Order.jsx";
import {data} from "./components/data";

export default function App() {

    const [orderList, setOrderList] = React.useState([])

    React.useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('restaurant-order-list'))
        if(savedData) {
            setOrderList(savedData)
        }
    },[])
    React.useEffect(() => {
        localStorage.setItem('restaurant-order-list', JSON.stringify(orderList))
    }, [orderList])

    function addToCart(id) {
        data.menuItems.map(value => {
            if (value.id === id) {
                const hmm = orderList.some(item => item.id === id)
                hmm ?
                    console.log("item already selected")
                :
                    setOrderList(prevState => [...prevState, {
                        id: value.id,
                        title: value.title,
                        price: value.price
                    }]);
            }
        })
    }
    function deleteItem(id) {
        setOrderList(prevState => prevState.filter(value => value.id !== id))
    }

    return (
        <main className="all-body">
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/menu' element={<Menu addToCart={addToCart}/>}/>
                <Route path='/order' element={<Order list={orderList} delete={deleteItem}/>}/>
            </Routes>
        </main>
    )
}
