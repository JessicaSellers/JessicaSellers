import React, { useState } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Col,
  Row } from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="welcome">Welcome, I'm Jessica Sellers.</h1>
        <div className="personal-summary">A front-end developer and designer based in Chicago, IL.</div>
        <div className="arrow">
          &darr;
        </div>
      </header>
      <div className="sticky">
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src="logo.png" alt="Jessica Sellers" height="25px"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#Work">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Jessica-Sellers.pdf" target="_blank" rel="noopener noreferrer">Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      <div id="Work">
        <Col xs={{offset: 1}}>
          <h1 className="subtitle">My Work</h1>
          <div className="underline"></div>
        </Col>
        <Row>
          <Col md={{ size: 3, offset: 1 }} xs="12" className="no-column-padding">
          <a href="/contacts">
            <div class="hovereffect">
              <img src="contacts.png" alt="" />
              <div class="overlay">
                <h2>Add Contacts Feature</h2>
                <h5></h5>
                <p>
                  Created a "native-seeming" contacts feature on a non-native mobile app. It allows users to invite and find friends using their phone contacts.
                </p>
              </div>
            </div>
            </a>
          </Col>
          <Col md="auto" xs="12" className="no-column-padding">
            <a href="/welcome-screen">
              <div class="hovereffect">
                <img src="welcome.png" alt="" />
                <div class="overlay">
                  <h2>App Welcome Screen</h2>
                  <h5></h5>
                  <p>
                    Created slides a new user can swipe through to get an idea of what they can expect from using Pearachute.
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md="auto" xs="12" className="no-column-padding">
            <a href="/saved">
              <div class="hovereffect">
                <img src="saved.png" alt="" />
                <div class="overlay">
                  <h2>Saved Feature</h2>
                  <h5></h5>
                  <p>
                    Worked on a feature that allows users to save kid's activities they may want to book later or locations they like.
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 3, offset: 1 }} xs="12" className="no-column-padding">
          <a href="/taproom-page">
            <div class="hovereffect">
              <img src="buroak-taproom.png" alt="" />
              <div class="overlay">
                <h2>Bur Oak Taproom Page</h2>
                <h5></h5>
                <p>
                  Created a page that shows off Bur Oak's taproom. It displays what beers are on tap and additional information on what to expect.
                </p>
              </div>
            </div>
            </a>
          </Col>
          <Col md="3" xs="12" className="no-column-padding">
            <a href="/autism-aid">
              <div class="hovereffect">
                <img src="autism-aid.png" alt="" />
                <div class="overlay">
                  <h2>Autism Aid</h2>
                  <h5></h5>
                  <p>
                    Worked on an app that gives parents an easier way to track a child with autisms' behaviors that doctors request them to track.
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md="4" xs="12" className="no-column-padding">
            <a href="/techbot">
              <div class="hovereffect">
                <img src="techbot.png" alt="" />
                <div class="overlay">
                  <h2>MU Techbot</h2>
                  <h5></h5>
                  <p>
                    Using Google's dialogflow API, I worked on a team to create a chatbot to solve students' tech issues.
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </div>
      <div id="About">
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
            <img src="jessica-sellers2.png" alt="Jessica Sellers" className="about-photo" height="450" />
          </Col>
        </Row>
      </div>
    <div className="footer-margin">
      <Row>
        <svg xmlns="http://www.w3.org/2000/svg" class="footer-line" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <path d="M1280 30h-27.4c-.4-.2-.9-.1-1.5-.3-1.8.5-2.9-.1-4.6-.2-1.7.1-3.3.3-5 .3-7.2.1-14-.5-21-.6-.6 0-1.1-.1-1.7-.2-4.8-.5-9.6-.5-14.2 0-1.7.2-3.5.4-5.1.3-3.1-.2-6.3 0-9.4 0-4.4 0-8.6-.3-12.9-.2-4.8.1-9-.8-13.8-.5-.2 0-.7-.1-.9-.1-1.5-.3-3.1-.3-5-.2-1.1.1-2.2.1-3.5 0-3.1 0-3.1 0-6.4.4-2-.1-3.9-.4-5.7-.4-2.6 0-2.9-.6-4.6-.8h-.5c-2.4.1-3.9-.2-5.5-.6-1.7-.4-3.7-.6-6.1-.3-.7.1-1.8 0-2.8 0-3.7-.3-7.5-.5-11.2-.8-6.1-.6-11.9-1.1-18-1.7-2.8-.3-5.3-.6-6.8-1.1-2.4.1-4.6.2-6.8.4-2.8-.3-5.5-.7-7-1.4-.4-.2-1.8-.4-2.4-.5-4 .1-7.7.3-11.4.4-.5-.1-1.1-.3-1.8-.4-1.3-.1-2.6-.4-3.7-.3-3.7.2-7 0-10.5-.1-3.7-.1-6.6-.4-9.6-.9-2-.4-4.4-.8-7.5-.4-1.7.2-3.9.1-5.7.2-2.2.1-4.4 0-6.3-.2-1.8-.3-3.5-.4-5.7-.3-2.6.1-4.8 0-6.8-.3-2-.2-4-.4-6.1-.5-1.8-.1-4.2-.1-5.3-.6-1.3-.5-3.3-.6-5.1-.6-2.9 0-5.3-.2-7.5-.6-1.8-.3-3.7-.5-6.1-.4-1.3 0-2.9 0-3.9-.2-2-.4-4.2-.4-6.8-.5-1.8-.8-4.6-1.2-8.6-1-3.3-.4-7.4-.2-10.1-.9-.9-.3-2.9-.3-4.4 0-2.2.3-4.6.3-6.8 0-2.6-.4-5.1-.3-7.7-.1-5.5.5-11 .9-17.1 1-.9 0-1.8.1-2.8.3-2.8.4-5.3.6-8.5.4-2-.1-4.2 0-6.6-.1-2.4.4-4.6.9-8.1.9-.7 0-1.5.1-2 .2-3.3.6-6.8.7-10.5.4-7-.4-14.2-.7-21.3-.9-1.3 0-2.6-.2-3.9-.3-4 .8-8.6.8-13.4.6-3.3-.1-6.6-.5-10.3-.5-1.5 0-3.5-.2-4.6-.6-.6-.2-1.3-.3-2.6-.2h-2.2c-5.3-.8-12-1.1-15.8-2.4-6.1-.2-12-.4-17.6-.6-4.8-.2-9.6-.3-14.3.2-1.1.1-2.8.1-4 0-1.3-.1-2.2-.1-3.3 0-2.8.3-5.3 0-7.5-.4-1.5.2-2.6.4-3.9.6-1.5.1-2.9.3-4.4.3-4.2-.1-8.6-.1-12.9 0-1.5 0-2.8-.1-3.7-.4-2-.6-4.8-.6-7.5-.7-4-.1-8.1-.2-12-.4-2.6-.5-4-1.2-7.7-1.4-2.8.4-5.7.3-8.8.1-1.8-.1-3.3-.3-4.8-.6-1.3-.2-2.6-.6-4-.6-2.8-.1-5.3-.3-6.8-.9-.2.3-.9.2-1.5.2-3.5-.3-7.4-.2-10.8-.6-.9-.2-2.6.1-3.9.1-.7 0-1.5 0-2.2-.1-1.5-.1-2.9-.2-4.6-.3-4.4-.2-8.5-.7-12.1-1.4-.9-.2-2-.4-3.1-.4-2 0-3.7-.3-5.3-.6-2.6-.4-5.1-.8-8.1-1.1-3.9-.4-7.5-.9-12.3-.7-3.1.1-6.4-.6-7-1.3-.4-.7-2-1.1-3.7-1.6-2.4 0-4.6-.1-6.6-.1-3.7 0-7.4-.2-11 .1-3.7.3-7.5.5-11.6.1-1.7-.1-3.5 0-5.5 0-1.5.7-3.5 1.1-6.6 1.1-2.8 0-4.4.4-6.1.8-.9.2-1.7.4-2.6.6-3.3-.3-4.2-.3-8.6 0-.7 0-1.5.1-2.2.1s-1.5.1-2 .2c-2.2.4-4 .8-7 .9-.6 0-1.3.2-1.7.4-.9.3-1.7.6-2.6.8-3.5-.2-6.4 0-9.7.2-5 .2-10.1.2-15.3.3-5 0-10.1 0-14.9-.4-.4 0-.7-.1-1.1-.1-3.7-.1-7.4-.4-10.8.2-.7.1-1.8.1-2.8.2-3.5.3-6.8.4-10.1-.1-4-.6-8.5-.1-12.7 0-.7 0-1.5.2-1.8.3-1.3.5-3.3.5-5.3.5h-3.3c-2.4 1.1-3.5 1.4-8.3 2.2-1.5.2-3.1.4-4.8.6-2.4.3-5 .3-7.5.2-3.1-.1-6.3-.2-9.2-.4-1.3 0-2.8-.1-3.9-.3-2.6-.5-4.8-.6-7.5-.1-1.2.3-3.4.3-3.6.6-.9.6-3.1.7-4.8.9-3.5.6-7.2.9-9.6 1.8-1.3.5-3.3.8-5.1 1.1-2 .4-4 .8-6.3.9-3.3.2-6.1.6-7.7 1.2-1.3 0-2.4 0-3.3.1-1.1.1-2 .3-3.1.4-.9.1-2 0-2.8 0-.9.1-1.5.5-2.4.6-1.7.2-3.5.4-5.3.6-4.2.3-8.6.3-12.5.7-4.8.5-9.4.7-14.3.4h-1.8c-5.1-.3-10.5-.2-15.3-.8-3.1-.5-6.8-.6-10.8-.5-3.3.1-6.6-.1-9.7-.5-1.7-.2-3.5-.5-5.3-.6-2.2-.1-4-.2-5.7-.7-.6-.2-1.8-.3-2.6-.2-3.3.1-6.1-.2-9-.5-2.8-.2-5.1-.5-6.6-1-2.6-.9-6.4-1-10.7-.8-2.6.2-5 .5-6.1 1-.7.4-2.2.6-3.5.8-1.1.2-2.8.3-3.5.5-1.5.4-3.3.5-5 .7-4.2.6-9 .7-13.6.8-7.2.2-14.5.5-21.5-.3-1.7-.2-3.5-.2-5.3.1 0 .7-1.8 1-3.9 1.4-2 .4-3.9.8-6.1 1-3.7.6-6.8 1.3-11 1.8-5.3.6-10.7 1.1-16 1.7-3.9.4-7.5.7-11 1.2-1.3.2-2.9.3-4.4.4-2.6.2-5.7.2-7.9.6-3.3.6-6.6.7-10.5.7-2.4 0-5 .3-7.4.4-3.1.8-7.5.9-11.2 1.5-2.6.4-5.1.4-7.9.2-3.7-.2-7.4-.3-11 0-.9.1-2 .1-2.9 0-4.8-.3-9-.1-12.5.8-.4.1-.9.1-1.5.2-4 .6-9 .7-12.9 1.3-2.4-.1-4.2 0-5.3.6-.2.1-1.5.1-2.2.2-1.1 0-2.6 0-3.5.1l-7.2.3H0"></path>
        </svg>
      </Row>
      <Row className="footer"> 
        <Col xs="1"></Col>
        <Col xs="5">
        <br />
          Contact Me - jessicasellers365@gmail.com
        </Col>
        <Col xs="6">
          <br />
          <a href="https://github.com/JessicaSellers" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-lg icons github-icon"></i></a>
          <a href="https://www.linkedin.com/in/jessica-sellers-034/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-lg icons linkedIn-icon"></i></a>
          <a href="Jessica-Sellers.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf fa-lg icons resume-icon"></i></a>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
