import React from "react";

export default function Footer() {
    return(
        <footer className="footer">
            <a href="mailto:mrharshulsharma@gmail.com" className="footer__link">mrharshulsharma@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://g.dev/harshul_sharma" target="_blank">
                        <i className="fab fa-android"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://linkedin.com/in/harshul-sharma" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://discordapp.com/users/404338809711624194" target="_blank">
                        <i className="fab fa-discord"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/Darthex" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
