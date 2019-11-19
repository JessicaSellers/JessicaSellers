import React from 'react';
import './Projects.css';
import Navigation from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';
import { Col, Row } from 'reactstrap';
import OtherWork from '../components/Other-work';

function AutismAid() {
    return (
        <div className="Project">
            <Navigation />
            <Col xs={{offset: 1}}>
                <h1 className="subtitle">Autism Aid</h1>
                <div className="underline"></div>
            </Col>
            <Row>
                <Col xs={{offset: 1, size: 10}}>
                    <div className="main-objective"><span className="project-subhead">Main Objective:</span> To create an iOS mobile app that makes it easier for parents of children with Autism to track their child's behavior for doctors</div>
                </Col>
            </Row>
            <Row>
                <Col xs={{offset: 1, size: 3}}>
                    <p><span className="detail-head">Role:</span> iOS Mobile App Developer</p>
                </Col>
                <Col xs="3">
                    <p><span className="detail-head">Duration:</span> March 2017 to May 2017</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> Swift, Xcode, GitHub, Trello</p>
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

export default AutismAid;