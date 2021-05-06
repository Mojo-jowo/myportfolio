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
            </section>

            <section className="languages">
                <h1 className="languageheader">Languages</h1>
            </section>
        </div>

        <div className="devprocess-container">
            <section className="devprocess-header">
                <h1 className="devheader">Development process:</h1>
            </section>

            <section className="process">
                <figure className="process1"></figure>
                <figure className="process1"></figure>
                <figure className="process1"></figure>
                <figure className="process1"></figure>
            </section>
        </div>
            
        </>
    )
}

export default Skills
