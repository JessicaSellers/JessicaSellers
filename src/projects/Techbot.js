import React from 'react';
import './Projects.css';
import Navigation from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';
import { Col, Row } from 'reactstrap';
import OtherWork from '../components/Other-work';

function Techbot() {
    return (
        <div className="Project">
            <Navigation />
            <Col xs={{offset: 1}}>
                <h1 className="subtitle">MU Techbot</h1>
                <div className="underline"></div>
            </Col>
            <Row>
                <Col xs={{offset: 1, size: 10}}>
                    <div className="main-objective"><span className="project-subhead">Main Objective:</span> To create a chatbot that can solve simple tech issues and create appointments through Tiger Tech for complex issues</div>
                </Col>
            </Row>
            <Row>
                <Col xs={{offset: 1, size: 3}}>
                    <p><span className="detail-head">Role:</span> Full Stack Developer</p>
                </Col>
                <Col xs="3">
                    <p><span className="detail-head">Duration:</span> September 2018 to November 2018</p>
                </Col>
                <Col xs="4">
                    <p><span className="detail-head">Tools:</span> HTML, CSS, JavaScript, Dialogflow, Firebase, Bulma, GitHub, Photoshop</p>
                </Col>
            </Row>
            <Col xs={{offset: 1}}>
                {/*<i class="fas fa-flask fa-xs"></i> <span className="project-subhead">Research</span>
                <div><i class="fas fa-code-branch"></i> <span className="project-subhead">Approach</span></div>
                <div><i class="fas fa-cloud-showers-heavy fa-xs"></i> <span className="project-subhead">Challenges</span></div>*/}
                <div><i class="fas fa-check-circle fa-xs"></i> <span className="project-subhead">Outcome</span></div>
                Go to the live site <a target="_blank" rel="noopener noreferrer" href="https://mu-tech-support.firebaseapp.com/view_homepage.html">here.</a>
                <br />
                <br />
            </Col>
            <Row>
            <Col md={{offset: 1, size:7}} xs={{offset:1, size:10}}>
            Website Design
                <img src="techbot-project.png" alt="Taproom" width="100%" />
            </Col>
            <Col md={{offset:0, size:3}}xs={{offset:1, size:10}}>
            Chatbot
                <iframe
                allow="microphone;"
                width="100%"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/acaa20f9-bfb1-48b3-a056-74177632020b">
                </iframe>
            </Col>
            </Row>
            <br />
            <br />
            <OtherWork />
            <Footer />
        </div>
    );
}

export default Techbot;