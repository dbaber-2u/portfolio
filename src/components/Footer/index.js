import React from "react";

function Footer() {
    return (
        <section className="my-footer">
            <br /><br />
            <ul className="flex-row my-footer">
                <li>
                    <a href="https://github.com/dbaber-2u">
                    <img src="github.png"
                    alt="GitHub"
                    />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/dbaber-2u">
                        <img src="../../assets/icons/linkedin.jpg"
                        alt="LinkedIn"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/dbaber-2u">
                        <img src="../../assets/icons/twitter.jpg"
                        alt="Twitter"
                        />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Footer;