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
import BitNavs from "./BitNavs";
import PaginatedImpact from "./PaginatedImpact";

export default function InfoDisplay() {

  const[clickGrid, setClickGrid] = React.useState(0);

  const gridContent = [
    {
      'name' : 'WHAT IS CS WEEK?',
      'desc' : 'CS Week is a week-long social competition among UTCS orgs. UTCS organizations will be competing against each other in a series of challenges, activities, and scavenger hunts to accumulate the most amount of Bits.',
    },
    {
      'name' : 'RULES OF CS WEEK',
      'desc' : 'The Association for Computing Machinery is a UT chapter of the national ACM, and exists to create a community among Computer Science students and anyone interested in technology. ACM holds events that serve its members and the community, and is focused on the advancement of computer science studies and research, furthering computing as a profession and a science.',
    },
    {
      'name' : 'BIT SYSTEM',
      'desc' : 'TX Convergent fosters collaboration within a multidisciplinary student body through hands-on projects, comprehensive education, and open-source philanthropic endeavors.',
    },
    {
      'name' : 'IMPACT',
      'desc' : 'CS Roadshow visits local schools to share information about computing and computing careers.',
    },
  ]

  return (
      <div className="section" style={{backgroundColor: '#232B95'}}>
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5 mr-5" md="5" mt='3'>
              <h1 className="text-primary font-weight-light">
                {gridContent[clickGrid].name}
              </h1>
              {clickGrid === 0 &&
                <div>
                  <h4 className="text-white font-weight-light">
                    {gridContent[clickGrid].desc}
                  </h4>
                </div>}
              {clickGrid === 1 &&
                <div>
                  <blockquote>
                    <p className="blockquote blockquote-white justify-content-center">
                      Students can only sign up for one organization
                    </p>
                    <p className="blockquote blockquote-primary justify-content-center">
                      Organizations compete by obtaining bits in events, scavenger hunts, and other activities
                    </p>
                    <p className="blockquote blockquote-danger justify-content-center">
                      May the best organization win
                    </p>
                  </blockquote>
                </div>}
              {clickGrid === 2 && <BitNavs />}
              {clickGrid === 3 && <PaginatedImpact />}
            </Col>
            <Col className='ml-3'>
              {/* Grid starts here */}
              <Col className='ml-5'>
                {gridContent.map((content, idx) => {
                  if (idx === 0 || idx === 1) {
                    return <GridButton
                      height='220px'
                      width='220px'
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
                  if (idx === 2 || idx === 3) {
                    return <GridButton
                      height='220px'
                      width='220px'
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
