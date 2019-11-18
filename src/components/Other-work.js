import React from 'react';
import '../projects/Projects.css';
import '../App.css';
import { Col } from 'reactstrap';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";

function OtherWork() {
  return (
    <Col xs={{offset: 1, size: 10}} className="hide-overflow">
      <h2 className="subtitle">Checkout Other Work:</h2>
      <div className="underline"></div>
      <br />
      <br />
      <InfiniteCarousel
          breakpoints={[
          {
              breakpoint: 500,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              },
          },
          {
              breakpoint: 768,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              },
          },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={3}
          slidesToShow={3}
          scrollOnDevice={true}
      >
          <div className="more-projects">
            <Link to="/contacts">
              <img
                  alt=''
                  src='contacts.png'
              />
            </Link>
          </div>
          <div className="more-projects">
            <Link to="/app-welcome">
              <img
                  alt=''
                  src='welcome.png'
              />
            </Link>
          </div>
          <div className="more-projects">
            <Link to="/saved">
              <img
                  alt=''
                  src='saved.png'
              />
            </Link>
          </div>
          <div className="more-projects">
            <Link to="/taproom-page">
              <img
                  alt=''
                  src='buroak-taproom.png'
              />
            </Link>
          </div>
          <div className="more-projects">
            <Link to="/autism-aid">
              <img
                  alt=''
                  src='autism-aid.png'
              />
            </Link>
          </div>
          <div className="more-projects">
            <Link to="/techbot">
              <img
                  alt=''
                  src='techbot.png'
              />
            </Link>
          </div>
      </InfiniteCarousel>
    </Col>
  );
}

export default OtherWork;