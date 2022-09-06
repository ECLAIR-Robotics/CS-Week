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
Col,
Container,
Row,
} from "reactstrap";
import GridButton from "./GridButton";

export default function OrgDisplay() {

  const[clickGrid, setClickGrid] = React.useState(-1);

  const gridContent = [
    {
      'name' : 'ABCS',
      'desc' : 'some description here',
    },
    {
      'name' : 'ACM/A4C',
      'desc' : 'some description here',
    },
    {
      'name' : 'Convergent',
      'desc' : 'some description here',
    },
    {
      'name' : 'CS Roadshow',
      'desc' : 'some description here',
    },
    {
      'name' : 'CS Transfer Society',
      'desc' : 'some description here',
    },
    {
      'name' : 'ECLAIR',
      'desc' : 'some description here',
    },
    {
      'name' : 'EGaDS',
      'desc' : 'some description here',
    },
    {
      'name' : 'Freetail Hackers',
      'desc' : 'some description here',
    },
    {
      'name' : 'UTPC',
      'desc' : 'some description here',
    },
  ]

  return (
      <div className="section mb-5 mt-5 ml-5">
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5 mr-5" md="5">
              <h1 className="text-white font-weight-light">
                Level up your UTCS experience with one of our participating
                student organizations
              </h1>
            </Col>
            <Col className='ml-3'>
              {/* Grid starts here */}
              <Col className='ml-5'>
                {gridContent.map((content, idx) => {
                  if (idx === 0 || idx === 1 || idx === 2) {
                    return <GridButton
                      click={clickGrid === idx}
                      content={content.name}
                      setClick={setClickGrid}
                      gridIndex={idx}/>
                  }
                  return <></>
                })}
              </Col>
              <div className="w-100" />
              <Col className='ml-5'>
                {gridContent.map((content, idx) => {
                  if (idx === 3 || idx === 4 || idx === 5) {
                    return <GridButton
                      click={clickGrid === idx}
                      content={content.name}
                      setClick={setClickGrid}
                      gridIndex={idx}/>
                  }
                  return <></>
                })}
              </Col>
              <div className="w-100" />
              <Col className='ml-5'>
                {gridContent.map((content, idx) => {
                  if (idx === 6 || idx === 7 || idx === 8) {
                    return <GridButton
                      click={clickGrid === idx}
                      content={content.name}
                      setClick={setClickGrid}
                      gridIndex={idx}/>
                  }
                  return <></>
                })}
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
