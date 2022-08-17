/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row, Col, Button, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "",
    caption: "",
  },
];

export default function Introduction() {
  return (
      <div className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h2 className="text-primary font-weight-light">
                What is CS Week?
              </h2>
              <p className="text-white mb-3">
                CS Week is a week-long competition social between UTCS orgs. UTCS organizations
                will be competing against each other in a series of challenges, activities, and
                scavenger hunts to accumulate the most amount of Bits
              </p>
              <div className="btn-wrapper mb-3">
                <h5 className="text-success d-inline">
                  Learn more about CS Week
                </h5>
                <Button
                  className="btn-link"
                  color="success"
                  href="/about"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="tim-icons icon-minimal-right" />
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
  );
}
