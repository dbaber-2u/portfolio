import React from "react";


function Resume() {
    return (
        <section>
            <br />
            <div>
                <span>Download work history <a href="resume.txt" download>here</a>.</span>
            </div>
            <br />
            <div>
                <span>Some tech skills include:</span>
                <ul>
                    <li>.NET</li>
                    <li>C#</li>
                    <li>Angular</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>JSON</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;