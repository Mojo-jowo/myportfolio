import React from 'react';

import './Skills.css';

function Skills() {
    return (
        <>
        <div className="skills-container">
            <section className="skills-header">
                <h1 className="sheader">Skills and langauges:</h1>
            </section>

            <section className="skill">
                <h1 className="skillheader">Skills</h1>
                <p className="skicontent">
                Capability to build both Frontend and Backend of a website
                </p>
                <p className="skicontent">
                Build responsive Web designs.
                </p>
                <p className="skicontent">
                Building CRUD web applications 
                </p>
                <p className="skicontent">
                Creating Algorithms and Data structures 
                </p>
                <p className="skicontent">
                GIT
                </p>
                <p className="skicontent">
                Good at arithmetic
                </p>
                <p className="skicontent">
                Easily sociable with people
                </p>
            </section>

            <section className="languages">
                <h1 className="languageheader">Languages</h1>
                <i class="fab fa-react" id="langicon">React</i>
                <i class="fab fa-html5" id="langicon">Html</i>
                <i class="fab fa-css3" id="langicon">CSS</i>
                <i class="fab fa-js" id="langicon">Javascript</i>
                <i class="fab fa-node" id="langicon">Node.js</i>
                <i class="fab fa-npm" id="langicon">Node package manager</i>
                <p className="express" id="langicon">Express.js</p>
                <p className="sql" id="langicon">sql</p>
            </section>
        </div>

        <div className="devprocess-container">
            <section className="devprocess-header">
                <h1 className="devheader">Development process:</h1>
            </section>

            <section className="process">
            <figure className="process1">
                    <figcaption className="processname">
                        Drawing of designs on paper 
                    </figcaption>
                </figure>
                <figure className="process2">
                    <figcaption className="processname">
                        Creating of mockups in Adobe Xd
                    </figcaption>
                </figure>
                <figure className="process3">
                    <figcaption className="processname">
                        Writing of design notes in Evernote 
                    </figcaption>
                </figure>
                <figure className="process4">
                    <figcaption className="processname">
                        Layout the page using code 
                    </figcaption>
                </figure>
                <figure className="process5">
                    <figcaption className="processname">
                        Add content to the page and design its elements
                    </figcaption>
                </figure>
                <figure className="process6">
                    <figcaption className="processname">
                        Writing documentation and deploy the project 
                    </figcaption>
                </figure>
            </section>
        </div>
            
        </>
    )
}

export default Skills
