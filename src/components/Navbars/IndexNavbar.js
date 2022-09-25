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
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import SignUpModal from "views/components/SignUpModal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  setGoogleToken,
  setGoogleUser,
  setCreateUser,
} from "views/reduxFiles/reduxGoogle.js"
import jwt_decode from 'jwt-decode';

export default function IndexNavbar({
  navColor='info'
}) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  const googleToken = useSelector((state) => state.reducer.jwt_key);
  const googleUser = useSelector((state) => state.reducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // Google stuff
  const [formModal, setFormModal] = React.useState(false);

  const [modalError, setErrorModal] = React.useState('');

  React.useEffect(() => {
    if (googleToken === '') {

      const googleCallback = (res) => {
        var userObject = jwt_decode(res.credential);

        if (userObject.hd === 'utexas.edu') {

          //document.getElementById('google_signup').hidden = true;
          dispatch(setGoogleUser({'loading' : 'loading'}));
          dispatch(setCreateUser(true));

          // Do API call to see if user exists
          //axios.post('https://cs-week-api.herokuapp.com/auth/signin', {
          axios.post('https://cs-week-api.herokuapp.com/auth/signin', {
            google_id: res.credential,
            email: userObject.email,
          }).then((response) => {
            // Check response status
            if (response.status === 200) {
              var resJson = response.data;

              dispatch(setGoogleUser(userObject));
              dispatch(setGoogleToken(res.credential));
              dispatch(setCreateUser(resJson.create_user));

              if (resJson.create_user) {
                // If user doesn't have an account, create one
                history.push('/register');
              }
              else {
                history.push('/profile');
              }
            }
            else {
              setErrorModal('An error occurred when signing in. Please try again.')
            }
          }, (error) => {
            // else: have the user sign in again
            setErrorModal(`${error}. If the error persists, please reach out to eclairrobotics@gmail.com for support.`);
          })
        }
        else {
          var temp = 'Only UT students are allowed to participate in CS Week. ';
          temp += 'Please sign in using a gmail account authorized by the University of Texas at Austin.';
          setErrorModal(temp);
          dispatch(clear());
          //document.getElementById('google_signup').hidden = false
        }
      }
      
      const google = window.google;

      if (google !== undefined) {
        google.accounts.id.initialize({
          client_id: "66587737847-galid6ft98binr278396v6lqm88b5ub2.apps.googleusercontent.com",
          callback: googleCallback
        })

        google.accounts.id.renderButton(
          document.getElementById("google_signup"),
          { theme : "outline", size: "large" }
        )
      }
    }
  }, [googleToken, dispatch, history])

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

  const navStyleProps = {
    fontFamily: 'bdr-mono, sans-serif',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    //backgroundColor: '#e14eca',
    backgroundColor: '#16206A',
    color : '#ffffff',
    border : 'none',
    outline : 'none',
    marginTop : '7px',
    marginRight : '50px',
    paddingLeft : '1px',
    paddingRight : '25px',
    paddingTop : '5px',
    paddingBottom : '5px',
    borderRadius : '8px',
  };

  return (
    <Navbar
      className={"fixed-top"}
      color-on-scroll="100"
      expand="lg"
      style={{
        backgroundColor : color === "navbar-transparent" ? 'transparent' : "#E36EF4"
      }}
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand" style={{
              fontFamily: 'bdr-mono, sans-serif',
              fontStyle: 'normal',
              fontWeight: '300',
          }}>
            CREATED BY
            <span> ECLAIR</span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Coded by<br />
            Sahil Jain (eclairrobotics@gmail.com)<br /><br />
            Designed by<br />
            Irene Chamorro-Beckenhauer<br />
            Taylor Mason<br />
            Sujeong Oh<br />
            Sai Veda Rallabandi<br />
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
          </div>
          <Nav navbar>
            <NavItem>
              <button
                style={navStyleProps}
                onClick={() => { history.push('/') }}
              >
                <i className="tim-icons icon-minimal-right" />
                {`ABOUT CS WEEK`}
              </button>
            </NavItem>
            <NavItem>
              <button
                style={navStyleProps}
                onClick={() => { history.push('/schedule') }}
              >
                <i className="tim-icons icon-minimal-right" />
                {`SCHEDULE`}
              </button>
            </NavItem>
            <NavItem>
              <button
                style={navStyleProps}
                onClick={() => { history.push('/points') }}
              >
                <i className="tim-icons icon-minimal-right" />
                {`POINTS`}
              </button>
            </NavItem>
            <NavItem>
              <SignUpModal
                formModal={formModal}
                setFormModal={setFormModal}
                googleUser={googleUser}
                modalError={modalError}
                setErrorModal={setErrorModal}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
