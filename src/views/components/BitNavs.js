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
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

class BitNavs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainTabs: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 1)}
                  >
                    <i className={`icon tim-icons icon-spaceship ${
                      this.state.plainTabs === 1 && 'icon-success'
                    }`} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 2)}
                  >
                    <i className={`icon tim-icons icon-trophy ${
                      this.state.plainTabs === 2 && 'icon-danger'
                    }`} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 3)}
                  >
                    <i className={`icon tim-icons icon-square-pin ${
                      this.state.plainTabs === 3 && 'icon-primary'
                    }`} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 4
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 4)}
                  >
                    <i className={`icon tim-icons icon-map-big ${
                      this.state.plainTabs === 4 && 'icon-danger'
                    }`} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 5
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 5)}
                  >
                    <i className={`icon tim-icons icon-planet ${
                      this.state.plainTabs === 5 && 'icon-warning'
                    }`} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent className="text-left" activeTab={"plainTabs" + this.state.plainTabs}>
            <TabPane tabId="plainTabs1">
              <h4 className='text-white'>
              <font className='text-success'>Participation Bits </font>are earned by
                students signing up for CS Week. 1 Bit is
                awarded to each student that chooses to represent a particular org
              </h4>
            </TabPane>
            <TabPane tabId="plainTabs2">
              <h4 className='text-white'>
              <font className='text-danger'>Event Bits </font>are earned by attending
                and winning events held by other organizations.
                <font className='text-warning'> These events will be the best way
                to earn points for your organization.</font> Typically,
                you will be working alongside the members that are a part of
                your club in order to win as many Bits as you can.
              </h4>
            </TabPane>
            <TabPane tabId="plainTabs3">
              <h4 className='text-white'>
              <font className='text-primary'>Hosting Bits </font>are earned by helping your
                organization host their event. <font className='text-warning'> At a
                minimum, each organization must host at least 1 event. </font>
                Additionally, extra Hosting Bits may be earned by assisting labs
                and other organizations during their events.
              </h4>
            </TabPane>
            <TabPane tabId="plainTabs4">
              <h4 className='text-white'>
                <font className='text-danger'>Scavenger Hunts </font>will be published
                at 9AM everyday on this website. These events will be designed
                in such a way that they will be <font className='text-warning'>
                very difficult to complete on your own,</font> so we highly
                encourage you to work with others!
              </h4>
            </TabPane>
            <TabPane tabId="plainTabs5">
              <h4 className='text-white'>
                <font className='text-warning'>Extra Events </font>are random,
                miscellaneous ways to get extra points for your organization.
                These typically consist of fun, unique activities to get you
                out of your comfort zone
                <br />
              </h4>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default BitNavs;