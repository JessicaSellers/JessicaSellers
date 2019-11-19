import React from 'react';
import './Projects.css';
import Navigation from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';
import { Col, Row } from 'reactstrap';
import OtherWork from '../components/Other-work';

function Welcome() {
    return (
        <div className="Project">
            <Navigation />
            <Col xs={{offset: 1}} className="hide-overflow">
                <h1 className="subtitle">App Welcome Screen</h1>
                <div className="underline"></div>
            </Col>
            <Row className="hide-overflow">
                <Col xs={{offset: 1, size: 10}}>
                    <div className="main-objective"><span className="project-subhead">Main Objective:</span> To create an app landing page for non-logged in users that conveys Pearachute's mission and what users can expect from the product</div>
                </Col>
            </Row>
            <Row className="hide-overflow">
                <Col xs={{offset: 1, size: 3}}>
                    <p><span className="detail-head">Role:</span> Front-End Developer and Designer</p>
                </Col>
                <Col xs="3">
                    <p><span className="detail-head">Duration:</span> June 2019 (1 week)</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> Ember.js, SASS, Bootstrap, Sketch, GitHub</p>
                </Col>
            </Row>
            <Col xs={{offset: 1, size: 10}} className="hide-overflow">
                {/*<i class="fas fa-flask fa-xs"></i> <span className="project-subhead">Research</span>
                <div><i class="fas fa-binoculars"></i> <span className="project-subhead">Overview</span></div>*/}
                <div><i class="fas fa-cloud-showers-heavy fa-xs"></i> <span className="project-subhead">Challenges</span></div>
                <ul>
                    <li><b>Getting the design right</b> - This is the first glimpse the user gets of the app experience after downloading, so the design needed to be perfect. It needed to represent the brand well and set the tone for what the user can expect from the brand. It ended up taking a few iterations but I am really happy with this overall design. This was validated when analytics tools found this page had an extremely low bounce rate.</li>
                </ul>
                <div><i class="fas fa-check-circle fa-xs"></i> <span className="project-subhead">Outcome</span></div>
                A live version of this feature can be found on the <b>Pearachute Kids</b> mobile app.
                <br />
                <br />
                <img src="welcome-slides.png" alt="Pearachute Welcome" width="100%" />
            </Col>
            <br />
            <br />
            <OtherWork />
            <Footer />
        </div>
    );
}

export default Welcome;