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
                    <p><span className="detail-head">Duration:</span> June 2019 (2 weeks)</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> Ember.js, SASS, Bootstrap, Sketch, GitHub</p>
                </Col>
            </Row>
            <Col xs={{offset: 1}} className="hide-overflow">
                {/*<i class="fas fa-flask fa-xs"></i> <span className="project-subhead">Research</span>*/}
                <div><i class="fas fa-code-branch"></i> <span className="project-subhead">Approach</span></div>
                <div><i class="fas fa-cloud-showers-heavy fa-xs"></i> <span className="project-subhead">Challenges</span></div>
                <div><i class="fas fa-check-circle fa-xs"></i> <span className="project-subhead">Outcome</span></div>
            </Col>
            <br />
            <br />
            <OtherWork />
            <Footer />
        </div>
    );
}

export default Welcome;