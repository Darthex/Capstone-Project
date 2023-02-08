import React from "react";
import welcome from "../images/welcome.png"
import hall from "../images/resHall.jpg"
import hall2 from "../images/resHall2.jpg"
import hall3 from "../images/resHall3.jpg"

export default function Home() {
    const image = [hall, hall2, hall3]
    const [currentImage, setCurrentImages]=React.useState(0)
    function infiniteScroll() {
        if(currentImage === image.length -1) {
            return setCurrentImages(0)
        }
        return setCurrentImages(currentImage + 1)
    }

    React.useEffect(() => {
        const interval = setInterval(() => {infiniteScroll()}, 5000)
        return () => clearInterval(interval)
    })


    const [reviews, setReviews] = React.useState([
        "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
        "This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.",
        " Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.",
        " It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations."
    ])

    React.useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('restaurant-reviews'))
        if(savedData) {
            setReviews(savedData)
        }
    }, [])
    React.useEffect(() => {
        localStorage.setItem('restaurant-reviews', JSON.stringify(reviews))
    }, [reviews])

    const [newReview, setNewReview] = React.useState("")

    function handleOnChange(e) {
        setNewReview(e.target.value)
    }

    function handleSubmit(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            setReviews(prevState => [...prevState, newReview])
            setNewReview("")
        }
    }

    return (
        <div>
            <section className="section1">
                <div className="intro--section">
                    <img src={welcome} alt=""/>
                </div>
            </section>

            <section className="section2">
                <div className="about--section">
                        <div className="slides fade">
                            {/*{image.map(value => <img src={value} alt="" className="hall--image"/>)}*/}
                            {<img src={image[currentImage]} alt="" className="hall--image" />}
                        </div>
                    <div className="about--about">
                        <h1 className="about--heading"> ABOUT ZEEV </h1>
                        <p className="about--desc">
                            At the point when ZEEV organizer Tony ventured off the shorelines of Oahu
                            following a multi-day of surfing with his Navy pals in the mid-60s, he did what worked out
                            easily for him. He went hunting down a delicious burger, a hot container of fries, and a
                            virus drink.

                            After twenty years, in 1982, it was that feeling of peace and fulfillment he was attempting
                            to reproduce when he took a little piece of the ZEEV’s and thudded it down
                            right in the territory of Southern California.

                            Today, ZEEV’s still is consistent with Tony’s unique experience and his unique
                            vision. Also, however, our menu has developed to incorporate plates of mixed greens, soups,
                            and delicate tacos.

                            Despite everything, we hold fast to the fundamental rationality that new sustenance,
                            well-disposed administration, and a laid-back air is the ideal end to a hard day of work or
                            play. We trust you taste it in each chomp.

                            Furthermore, we trust that whether you’re a ravenous surfer or an occupied salesman, you
                            stroll into ZEEV's and state to yourself, as Tony did those numerous years
                            back, “Ahh…this is the place I need to be.”
                        </p>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="review--section">
                    <input type="text" className="comment" placeholder="Leave a Review"
                           onChange={handleOnChange}
                           onKeyDown={handleSubmit}
                           value={newReview}/>
                    <div>
                        {reviews.map(value => <p className="comments"><strong>Anonymous </strong> <br/>{value}</p>)}
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </section>

            <footer className="footer">
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link">
                            <i className="fa fa-phone"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
