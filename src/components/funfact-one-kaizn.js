import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactData } from "@/data";

const FunfactOne = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="commonSection testimonial_2">
      <Container>
        <Row>
          {FunfactData.map(({ title, countNumber }, index) => (
            <Col lg={3} md={3} sm={3} key={index}>
              <div className="singlefunfact text-center">
                <h1 className="timer">
                </h1>
                <h3></h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunfactOne;
