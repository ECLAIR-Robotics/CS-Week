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
  Container,
  Col,
  Row,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  CardBody,
  TabContent
} from "reactstrap";
import classnames from "classnames";
import SignUpModal from "./SignUpModal";

export default function Bits() {
  const [iconTabs, setIconsTabs] = React.useState(0);

  const colors = ["primary", "info", "success", "warning", "danger"]

  return (
    <Container>
      <h1 className={`text-primary font-weight-light`}>
        Bit System
      </h1>
      <Row>
        <Col className="ml-auto mr-auto" md="4">
          <Nav className={`nav-pills-${colors[iconTabs]} flex-column`} pills>
            <NavItem>
              <NavLink
                className={classnames({
                  active: iconTabs === 0,
                })}
                onClick={() => setIconsTabs(0)}
              >
                <i className="tim-icons icon-spaceship" />
                Participation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: iconTabs === 1,
                })}
                onClick={() => setIconsTabs(1)}
              >
                <i className="tim-icons icon-square-pin" />
                Event
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: iconTabs === 2,
                })}
                onClick={() => setIconsTabs(2)}
              >
                <i className="tim-icons icon-planet" />
                Hosting
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: iconTabs === 3,
                })}
                onClick={() => setIconsTabs(3)}
              >
                <i className="tim-icons icon-map-big" />
                Scavenger Hunt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: iconTabs === 4,
                })}
                onClick={() => setIconsTabs(4)}
              >
                <i className="tim-icons icon-trophy" />
                Extra Events
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col className="ml-auto mr-auto">
          <Card>
            <CardBody>
              <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                <TabPane tabId="link0">
                  <h4 className='text-primary'>Participation Bits are earned by
                    <font className='text-warning'> CS students </font>
                    signing up for CS Week. You are only allowed to sign up
                    for <font className='text-danger'>1 organization to represent.
                    </font><br />
                  </h4>
                  <h4 className='text-white'>
                    1 Participation Bit is awarded to each UTCS student that
                    chooses to represent a particular org <br />
                    <br />

                    <font className='text-success'>I'm not a UTCS student, but I
                    still want to participate! Is there a way for me to still be
                    a part of CS Week?</font><br />
                    Yes, don't worry! Non-CS students are still allowed to sign up and
                    earn every other bit type that is available. We understand that
                    many of you are interested in the CS community or are in a field
                    that ties very closely to computer science. This would be a
                    great opportunity to find people with similar interests!
                    <br />
                    <br />
                    In order to sign up, please refer to the following link:
                  </h4>
                  <SignUpModal />
                </TabPane>
                <TabPane tabId="link1">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. <br />
                    <br />
                    Dynamically innovate resource-leveling customer service
                    for state of the art customer service.
                  </p>
                </TabPane>
                <TabPane tabId="link2">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables
                    for real-time schemas. <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
