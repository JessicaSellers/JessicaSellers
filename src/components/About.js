import React from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

function About() {
  return (
    <div id="#About">
      <Col xs={{offset: 1}}>
        <h1 className="subtitle">About Me</h1>
        <div className="underline"></div>
      </Col>
      <Row>
        <Col md={{ size: 5, offset: 1 }} xs="12" className="about-text">
          <h5 className="subhead">I am a versatile front-end developer and designer highly skilled in HTML, CSS and JavaScript.</h5>
          <p>
            I've always been drawn to the overlap between design and development. I graduated from the University of Missouri in December 2018 with two degrees, one that focused on programming in a variety of languages and the other that focused on digital marketing and design. With this diverse skillset and passion for development and design, I landed my first job as a jr. front-end developer and designer at a small startup. Here, I got to wear numerous hats and learn to design and code in a rapidly-changing, fast-paced enviroment. From prototyping to getting the CSS just right, I love developing and designing on-screen experiences.
          </p>
          <p>
            Don't hesitate to reach out, you can contact me by email at jessicasellers365@gmail.com
          </p>
        </Col>
        <Col md="5" xs="12">
          <img src="jessica-sellers.png" alt="Jessica Sellers" className="about-photo" height="400" />
        </Col>
      </Row>
    </div>
  );
}

export default About;