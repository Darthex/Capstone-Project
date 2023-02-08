import React from "react";
import profile from "../images/port-profile-long.jpg"

export default function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Student & developer based in India</p>

            <div className="about-me__body">
                <p>I intend to be a part of an organization where I can constantly learn and develop my
                    technical and management skills and make best use of it for the growth of the organization.
                    I look forward to establishing myself by adopting new technologies as well.
                </p>
                <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature
                    team worker and adaptable to all challenging situations. I am able to work well both in a team
                    environment as well as using own initiative. I am able to work well under pressure and adhere to
                    strict deadlines.
                </p>
            </div>

            <img src={profile} alt="" className="about-me__img"/>
        </section>
    )
}