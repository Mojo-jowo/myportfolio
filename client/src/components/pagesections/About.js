import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

import basketball from '../images/basketball.svg';
import swimming from '../images/swimming.svg';
import story from '../images/story.svg';
import netlify from '../images/netlify.png';
import me from '../images/me.jpg';

function About() {
    return (
        <>
        <div className="aboutme">
            <section className="profile-pic">
                <img src={me} alt="Me" className="me" />
            </section>

            <section className="profile-statement">
                <h1 className="statement-header">About me</h1>
                <p className="statement-content">
                    <span className="intro">Hi I am Andrew Lewis Ojowo.</span> <br /> <span className="codename">Codename: Mojo-jowo.</span> <br className="br"/>
                    <article className="br">
                     I am a web designer and developer currently venturing in freelance projects. I live in Kenya, beautiful country with a whole lot of issues just like any other home. Creativity and logic are my fuel and like wood to fire they make me burn so bright with life and enthusiasm and thus why I find programming a rush. The enfusion problem solving and design, in code and in my life is a skill I am proud to possess. My developing process is iterative, I approach each task as a learning experience and as an opportunity to fail for that is how progress is achieved. Besides programming I enjoy life in many different ways, I am a sports guy, a big <span className="heat">HEAT</span> fan of the NBA, support the <span className="mancity">Manchester City</span>  in the English premier league and a die hard of Kogalo Fc <span className="gor">(Gormahia)</span> in my home country. I love to engage in talks of all kinds and would consider myself a storyteller. Culture defines who we area and where we are going and I am eternally grateful for I know who I am and where I come from and would love for everyone to embrace themselves and their homes.
                    </article>

                </p>

            </section>

            <section className="activities">
                <h1 className="activities-header">Activities I enjoy:</h1>
                <figure className="activity1">
                    <img src={ basketball } alt="basketball" className="activityicon" />
                    <figcaption className="activityname">Basketball</figcaption>
                </figure>
                <figure className="activity2">
                    <img src={ swimming } alt="swimming" className="activityicon" />
                    <figcaption className="activityname">Swimming</figcaption>
                </figure>
                <figure className="activity3">
                    <img src= { story } alt="Storytelling" className="activityicon" />
                    <figcaption className="activityname">Storytelling</figcaption>
                </figure>

            </section>

            <section className="tool-container">
                <h1 className="toheader">Tools:</h1>
                <figure className="tool1">
                    <img src="https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png" alt="Visual studio code" className="toolicon" />
                    <ficaption className="toolname">
                        Visual studio code
                    </ficaption>
                </figure>
                <figure className="tool2">
                    <img src="https://img.icons8.com/windows/32/000000/github.png" alt="Github" className="toolicon" />
                    <ficaption className="toolname">
                        Github
                    </ficaption>
                </figure>
                <figure className="tool3">
                    <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" alt="Adobe Xd" className="toolicon" />
                    <ficaption className="toolname">
                        Adobe Xd
                    </ficaption>
                </figure>
                <figure className="tool4">
                    <img src={ netlify } alt="Netlify" className="toolicon" />
                    <ficaption className="toolname">
                        Netlify
                    </ficaption>
                </figure>
                <figure className="tool5">
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/pen-2.png" alt="Pen and Paper" className="toolicon" />
                    <ficaption className="toolname">
                        Pen and Paper
                    </ficaption>
                </figure>
                <figure className="tool6">
                    <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material-ui" className="toolicon" />
                    <ficaption className="toolname">
                        Material-ui
                    </ficaption>
                </figure>
                <figure className="tool7">
                    <img src="https://img.icons8.com/color/48/000000/twitter--v2.png" alt="Twitter" className="toolicon" />
                    <ficaption className="toolname">
                        Twitter
                    </ficaption>
                </figure>
                <figure className="tool8">
                    <img src="https://img.icons8.com/ios-filled/50/000000/codepen.png" alt="Codepen" className="toolicon" />
                    <ficaption className="toolname">
                        Codepen
                    </ficaption>
                </figure>
            </section>

        </div>            
        </>
    )
}

export default About;
