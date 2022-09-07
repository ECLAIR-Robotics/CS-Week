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
      'desc' : 'The organization works to build and empower members of Texas Computer Science and the broader Black community to pursue technology related education and careers. We hope to inspire and equip the next diverse generation of thoughtful technologists!',
      'link' : 'https://www.cs.utexas.edu/~abcs/',
    },
    {
      'name' : 'ACM/A4C',
      'desc' : 'The Association for Computing Machinery is a UT chapter of the national ACM, and exists to create a community among Computer Science students and anyone interested in technology. ACM holds events that serve its members and the community, and is focused on the advancement of computer science studies and research, furthering computing as a profession and a science.',
      'link' : 'http://texasacm.org/',
    },
    {
      'name' : 'Convergent',
      'desc' : 'TX Convergent fosters collaboration within a multidisciplinary student body through hands-on projects, comprehensive education, and open-source philanthropic endeavors.',
      'link' : 'https://www.txconvergent.org/',
    },
    {
      'name' : 'CS Roadshow',
      'desc' : 'CS Roadshow visits local schools to share information about computing and computing careers.',
      'link' : 'https://www.cs.utexas.edu/roadshow/',
    },
    {
      'name' : 'CS Transfer Society',
      'desc' : "We're a student org created by transfer students, for transfer students. We know firsthand how tough it can be to find your way and your people after transferring into the CS major or into UT more generally. If you're an internal transfer, external transfer, or ATP student we hope to see you there!",
      'link' : 'https://www.cs.utexas.edu/undergraduate-program/student-organizations',
    },
    {
      'name' : 'ECLAIR',
      'desc' : 'The Engineering and Computational Learning of Artificial Intelligence in Robotics (ECLAIR) is a club at UT Austin dedicated to helping all robot-loving students to transform their passionate robotics ideas into reality.',
      'link' : 'https://eclair-robotics.github.io/',
    },
    {
      'name' : 'EGaDS',
      'desc' : 'The Electronic Game Developers Society, also known as EGaDS, is a student organization of the University of Texas at Austin, TX, completely dedicated to computer and video game development. We are currently one of the world’s largest nonprofit membership organizations serving all individuals who are aspirants to become game developers. We are totally committed to advancing their careers and enhancing the lives of game developers.',
      'link' : 'http://egads-austin.org/',
    },
    {
      'name' : 'Freetail Hackers',
      'desc' : 'Freetail Hackers is an organization focused on bringing students who are passionate about technology together to build cool tech, learn new skills, and become involved in the hackathon and tech communities. We put on HackTX, an annual hackathon that brings students from all over the country to build new technology.',
      'link' : 'https://freetailhackers.com/',
    },
    {
      'name' : 'UTPC',
      'desc' : 'The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure.',
      'link' : 'https://www.cs.utexas.edu/users/utpc/',
    },
  ]

  return (
      <div className="section mb-5 mt-5 ml-5">
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5 mr-5" md="5">
              {clickGrid === -1 &&
                <h1 className="text-white font-weight-light">
                  Level up your UTCS experience with one of our participating
                  student organizations
                </h1>
              }
              {clickGrid !== -1 &&
                <div>
                  <h1 className="text-primary font-weight-light">
                    {gridContent[clickGrid].name}
                  </h1>
                  <h4 className="text-white font-weight-light">
                    {gridContent[clickGrid].desc}
                  </h4>
                  <h4 className="text-white font-weight-light">
                    <a
                      className="font-weight text-success mt-5"
                      href={gridContent[clickGrid].link}
                      target='_blank'
                      rel="noreferrer"
                    >
                      Learn more {` ${gridContent[clickGrid].name}`}
                      <i className="tim-icons icon-minimal-right text-success ml-2 mb-1" />
                    </a>
                  </h4>
                </div>
              }
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
