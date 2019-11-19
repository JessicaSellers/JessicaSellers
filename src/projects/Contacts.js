import React from 'react';
import './Projects.css';
import Navigation from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';
import { Col, Row } from 'reactstrap';
import OtherWork from '../components/Other-work';

function Contacts() {
    return (
        <div className="Project">
            <Navigation />
            <Col xs={{offset: 1}}>
                <h1 className="subtitle">Contacts Feature</h1>
                <div className="underline"></div>
            </Col>
            <Row>
                <Col xs={{offset: 1, size: 10}}>
                    <div className="main-objective"><span className="project-subhead">Main Objective:</span> To create a native contacts feature that works on Android and iOS that makes it easier for users to invite and add friends</div>
                </Col>
            </Row>
            <Row>
                <Col xs={{offset: 1, size: 3}}>
                    <p><span className="detail-head">Role:</span> Lead Developer and Designer</p>
                </Col>
                <Col xs="3">
                    <p><span className="detail-head">Duration:</span> July 2019 to August 2019</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> Ember.js, SASS, Ruby on Rails, CSS Grid, GoNative.io, Adobe XD, Balsamiq, Photoshop, GitHub</p>
                </Col>
            </Row>
            <Col xs={{offset: 1, size:10}}>
                {/*<i class="fas fa-flask fa-xs"></i> <span className="project-subhead">Research</span>*/}
                <div><i class="fas fa-code-branch"></i> <span className="project-subhead">Work Flow</span></div>
                <ol>
                    <li>Once I had the requirements from my team, I started looking at examples of other popular apps that have this feature such as Snapchat. I also researched bets practices and the best way to ask a user for contact permissions.</li>
                    <li>After I had a good idea of the user flow, I sketched it out and talked it over with the other developers on my team. Once I had that feedback I started creating some higher fidelity prototypes to show the rest of my team. While I was working on that I started reading through the GoNative.io documentation and getting the general functionality working and creating test data.</li>
                    <li>Once I got feedback on those designs I started working on the CSS, building the back end and API calls. I then tested my work in our staging environment and fixed any issues I was not able to catch with my test data.</li>
                    <li>I then started fine tuning my code (fixing little bugs, ordering the retrieved phone numbers alphabetically, etc.). I also got another round of feedback from my team and made changes based on that.</li>
                    <li>Once I felt like my code was ready to be released I started testing it locally and in our staging environment. I wrote down test cases to ensure my code passed before releasing it. After passing all of the tests, my team released the code. </li>
                </ol>
                <div><i class="fas fa-cloud-showers-heavy fa-xs"></i> <span className="project-subhead">Challenges</span></div>
                <ul>
                    <li><b>Testing</b> - because the app I was working on was not native and instead used GoNative.io, I could only test using mock data locally. This made it so I really had to think through every possible use case, but I think it ultimately made me a much more defensive programmer.</li>
                    <li><strong>Trouble-shooting</strong> - there did not seem to be many other developers attempting this same task, so trouble-shooting could be difficult. Luckily, GoNative’s team was very helpful when problems arose.</li>
                    <li><b>Permissions</b> - I think any time you are asking a user permission to use their data it is a bit of a challenge. I did a lot of research on this when deciding how to deal with it and determined that the best way is to ask when the user is expecting it and have developed some trust with your brand.</li>
                </ul>
                <div><i class="fas fa-check-circle fa-xs"></i> <span className="project-subhead">Outcome</span></div>
                A live version of this feature can be found on the <b>Pearachute Kids</b> mobile app.
                <br />
                <br />
                <img src="native-contacts.png" alt="Native Contacts" width="100%" />
            </Col>
            <br />
            <br />
            <OtherWork />
            <Footer />
        </div>
    );
}

export default Contacts;