
function AboutMe() {
    return (
        <section>
            <div>
                <img
                    src={require(`../../assets/ProfilePic.jpg`)}
                    className="img-thumbnail mx-1"
                    alt="me profile pic"
                />
            </div>
            <p>This is a little bit about me:</p>
            <p/>
            <ul>
                <li>Software Engineer for 20+ years</li>
                <li>Lego Enthusiast</li>
                <li>Husband</li>
                <li>Father to 9</li>                
            </ul>
        </section>
    )
}

export default AboutMe;