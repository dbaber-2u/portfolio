

const projects = [
    { name: "Project 1", root: "project1" },
    { name: "Project 2", root: "project2" },
    { name: "Project 3", root: "project3" },
    { name: "Project 4", root: "project4" },
    { name: "Project 5", root: "project5" },
    { name: "Project 6", root: "project6" }
];

function Portfolio() {
    return (
        <section>
            <div className="w3-panel w3-red">
                <p>The following are examples and not real</p>
            </div>
            <div className="flex-row">
                {projects.map((prj, i) => (
                <div>
                <p><a href={`https://github.com/dbaber-2u/${prj.root}`}>{prj.name}</a></p>
                <img
                    src={require(`../../assets/programming${i+1}.jpg`)}
                    className="img-thumbnail mx-1"
                    alt={prj.name}
                    href={`http://dbaber-2u.github.io/${prj.root}`}
                />
                </div>    
                ))}
            </div>
            
        </section>
    )
}

export default Portfolio;