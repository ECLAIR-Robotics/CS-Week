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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import SignUpModal from "views/components/SignUpModal";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function IndexNavbar({
  navColor='info'
}) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  const [googleToken, setGoogleToken] = React.useState('');
  const [googleUser, setGoogleUser] = React.useState({});

  // Google stuff
  const [formModal, setFormModal] = React.useState(false);

  React.useEffect(() => {
    if (googleToken === '') {

      const googleCallback = (res) => {
        var userObject = jwt_decode(res.credential);
        console.log('in google callback')
        console.log(userObject);

        if (userObject.hd === 'utexas.edu') {
          console.log('utexas')

          // Do API call to see if user exists
          //axios.post('https://cs-week-api.herokuapp.com/auth/signin', {
          axios.post('http://localhost:5000/auth/signin', {
            google_id: res.credential,
            email: userObject.email,
          }).then((response) => {
            // Check response status
            if (response.status === 200){
              var resJson = response.json();

              if (resJson["create_user"]) {
                // Redirect to a create user page
                console.log('create user')
              }
              else {
                console.log('do not create user')
                // User exists. Sign them in
                setGoogleUser(userObject);
                setGoogleToken(res.credential);
                document.getElementById('google_signup').hidden = true
              }
            }
          }, (error) => {
            // else: have the user sign in again
          })
        }
        //else {
        //  // Sign Out
        //  setGoogleToken('');
        //  setGoogleUser({});
        //  document.getElementById('google_signup').hidden = false
        //}
      }

      /* global google */
      google.accounts.id.initialize({
        client_id: "66587737847-galid6ft98binr278396v6lqm88b5ub2.apps.googleusercontent.com",
        callback: googleCallback
      })

      google.accounts.id.renderButton(
        document.getElementById("google_signup"),
        { theme : "outline", size: "large" }
      )
    }
  }, [googleToken])

  // useEffect for changing the navcolor on each page
  React.useEffect(() => {
    const changeColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setColor(`bg-${navColor}`);
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[navColor]);

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            Created by
            <span> ECLAIR</span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Coded by Sahil Jain
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/">
                  <i className="tim-icons icon-paper" />
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to="/about">
                  <i className="tim-icons icon-bullet-list-67" />
                  About Us
                </DropdownItem>
                <DropdownItem tag={Link} to="/schedule">
                  <i className="tim-icons icon-calendar-60" />
                  Schedule
                </DropdownItem>
                <DropdownItem tag={Link} to="/scavenger">
                  <i className="tim-icons icon-puzzle-10" />
                  Scavenger Hunt
                </DropdownItem>
                <DropdownItem tag={Link} to="/sponsors">
                  <i className="tim-icons icon-headphones" />
                  Sponsors
                </DropdownItem>
                <DropdownItem tag={Link} to="/extra">
                  <i className="tim-icons icon-trophy" />
                  Extra Events
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <SignUpModal
                formModal={formModal}
                setFormModal={setFormModal}
                googleUser={googleUser}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
