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
import {
Button,
Col,
Container,
Row,
} from "reactstrap";

export default function Introduction() {
  return (
      <div className="section mb-5 mt-5">
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5" md="5">
              <h1 className="text-white font-weight-light">
                Level up your UTCS experience with one of our participating
                student organizations
              </h1>
            </Col>
          </Row>
          <Row className='row-grid justify-content-md-center'>
            {/* Grid starts here */}
            <Col lg="auto mr-2 ml-2">
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  ABCS
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  ACM/A4C
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  Convergent
                </Button>
              </Row>
            </Col>
            <Col lg="auto mr-2 ml-2">
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  CS Roadshow
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  CS Transfer Society
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  ECLAIR
                </Button>
              </Row>
            </Col>
            <Col lg="auto mr-2 ml-2">
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  EGaDS
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  Freetail Hackers
                </Button>
              </Row>
              <Row>
                <Button color="primary" size="lg" className='mr-auto ml-auto'>
                  UTPC
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
