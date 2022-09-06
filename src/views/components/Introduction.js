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
          <Row className='justify-content-md-center'>
            {/* Grid starts here */}
            <Col>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                ABCS
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                ACM/A4C
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                Convergent
              </Button>
            </Col>
            <div className="w-100" />
            <Col>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                CS Roadshow
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                CS Transfer Society
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                ECLAIR
              </Button>
            </Col>
            <div className="w-100" />
            <Col>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                EGaDS
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                Freetail Hackers
              </Button>
              <Button color="primary" style={{width: "125px", height: "125px"}}>
                UTPC
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
