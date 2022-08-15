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
                  <h4 className='text-primary'>Event Bits are earned by attending
                    and winning events held by other organizations.
                    <font className='text-warning'> These events will be the best way
                    to earn points for your organization.</font> Typically,
                    you will be working alongside the members that are a part of
                    your club in order to win as many Bits as you can. The Bit
                    denominations are as follows:
                    <br />
                  </h4>
                  <h4 className='text-white'>
                    1st Place: SOME_AMOUNT 2nd Place: SOME_AMOUNT<br />
                    3rd Place: SOME_AMOUNT 4th Place: SOME_AMOUNT
                    <br />
                    <br />

                    <font className='text-success'>What are some example events?</font><br />
                    Events can be both CS related and Non-CS related. Rest assured,
                    there won't be any interviews or Leet Code questions. Some
                    examples of events are listed below:
                    - Most high scores in arcade games developed by UTCS students<br />
                    - Dodgeball<br />
                    - Playing table tennis against a robotic arm<br />
                    - Jeopardy night or CS Trivia night<br />
                    <br />
                    Please note that these events are subject to likely to change
                    and may not appear in the event this year.
                  </h4>
                </TabPane>
                <TabPane tabId="link2">
                  <h4 className='text-primary'>Hosting Bits are earned by helping your
                    organization host their event. <font className='text-warning'> At a
                    minimum, each organization must host at least 1 event. </font>
                    Additionally, extra Hosting Bits may be earned by assisting labs
                    and other organizations during their events.
                    <br />
                  </h4>
                  <h4 className='text-white'>
                    CS Hosting Bits: SOME_AMOUNT<br />
                    Extra Hosting Bits: SOME_AMOUNT<br /><br />
                    <font className='text-success'>Where are the sign ups for
                    volunteering for helping host other events?</font><br />
                    Currently, we do not have any available hosting spots, but
                    please check this location again later for any updates/links!
                    <br />
                  </h4>
                </TabPane>
                <TabPane tabId="link3">
                  <h4 className='text-primary'>Scavenger Hunts will be published
                    at 9AM everyday on this website. These events will be designed
                    in such a way that they will be <font className='text-warning'>
                    very difficult to complete on your own,</font> so we highly
                    encourage you to work with others!
                    <br />
                  </h4>
                  <h4 className='text-white'>
                    1st: SOME_AMOUNT 2nd: SOME_AMOUNT<br />
                    3rd: SOME_AMOUNT<br /> <br />
                    <font className='text-success'>What challenges should I
                    expect in the scavenger hunts?</font><br />
                    We don't want to spoil any solutions, but there will both
                    virtual and in person components. There will be multiple
                    sections for each scavenger hunt, and you will be able to
                    track your organization's progress here. Some challenges
                    will be fairly intense while some may be tracking down
                    the right information. The scavenger hunt may also differ
                    day-to-day, so try not to panic too much. :)
                    <br />
                  </h4>
                </TabPane>
                <TabPane tabId="link4">
                  <h4 className='text-primary'>
                    Extra Events are blah blah
                    <br />
                  </h4>
                  <h4 className='text-white'>
                    Bits for this Extra Events vary on the event itself
                    <br /> <br />
                    <font className='text-success'>What challenges should I
                    expect in the scavenger hunts?</font><br />
                    We don't want to spoil any solutions, but there will both
                    virtual and in person components. There will be multiple
                    sections for each scavenger hunt, and you will be able to
                    track your organization's progress here. Some challenges
                    will be fairly intense while some may be tracking down
                    the right information. The scavenger hunt may also differ
                    day-to-day, so try not to panic too much. :)
                    <br />
                  </h4>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
