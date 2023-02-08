import React from "react";

export default function Services() {
    return(
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Machine Learning</h3>
                    <p>Actively trying to develop new machine learning models to train and analyse data.</p>
                </div>

                <div className="service">
                    <h3>Android Dev</h3>
                    <p>Adept in making android based applications using kotlin and android studio.</p>
                </div>

                <div className="service">
                    <h3>Front End</h3>
                    <p>Beginner level front end developer currently learning Reactjs for UI designing.</p>
                </div>
            </div>

            <a href="#work" className="btn">My Work</a>
        </section>
    )
}