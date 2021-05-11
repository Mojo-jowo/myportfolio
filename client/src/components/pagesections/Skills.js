import React from 'react';

import './Skills.css';

function Skills() {
    return (
        <>
        <div className="skills-container">
            <section className="skills-header">
                <h1 className="sheader">Skills & Experience:</h1>
            </section>

            <section className="skill">
                <h1 className="skillheader">Skills:</h1>
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
                <h1 className="languageheader">Languages:</h1>
                <i class="fab fa-react" id="langicon1">
                    <aside className="langname">React</aside>
                </i>
                <i class="fab fa-html5" id="langicon2">
                    <aside className="langname">Html</aside>
                </i>
                <i class="fab fa-css3" id="langicon3">
                    <aside className="langname">CSS</aside>
                </i>
                <i class="fab fa-js" id="langicon4">
                    <aside className="langname">Javascript</aside>
                </i>
                <i class="fab fa-node" id="langicon5">
                    <aside className="langname">Node.js</aside>
                </i>
                <i class="fab fa-npm" id="langicon6">
                    <aside className="langname">Node package manager</aside>
                </i>
                <p className="express" id="langicon7">Express.js</p>
                <p className="sql" id="langicon8">sql</p>
            </section>

            <div className="experience-container">
                <section className="experience-header">
                    <h1 className="expheader">Experience:</h1>

                    <article className="experience1">
                        <aside>2020 - 2021</aside>
                        <aside>Frontend developer</aside>
                        <aside>Freelancing</aside>
                    </article>
                </section>
            </div>

        </div>

        
            
        </>
    )
}

export default Skills
