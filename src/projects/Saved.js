import React from 'react';
import './Projects.css';
import Navigation from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';
import { Col, Row } from 'reactstrap';
import OtherWork from '../components/Other-work';

function Saved() {
    return (
        <div className="Project">
            <Navigation />
            <Col xs={{offset: 1}}>
                <h1 className="subtitle">Saved Feature</h1>
                <div className="underline"></div>
            </Col>
            <Row>
                <Col xs={{offset: 1, size: 10}}>
                    <div className="main-objective"><span className="project-subhead">Main Objective:</span> To create a way for users to save activities they want to go to and their favorite locations</div>
                </Col>
            </Row>
            <Row>
                <Col xs={{offset: 1, size: 3}}>
                    <p><span className="detail-head">Role:</span> Front-End Developer and Designer</p>
                </Col>
                <Col xs="3">
                    <p><span className="detail-head">Duration:</span> May 2019 to July 2019</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> Ember.js, SASS, Ruby on Rails, Sketch, Balsamiq, CSS Grid, GitHub</p>
                </Col>
            </Row>
            <Col xs={{offset: 1}}>
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

export default Saved;