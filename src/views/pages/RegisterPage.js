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
import { useSelector } from "react-redux";
import classnames from "classnames";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [eidFocus, setEidFocus] = React.useState(false);
  const [majorFocus, setMajorFocus] = React.useState(false);
  const [orgFocus, setOrgFocus] = React.useState(false);

  const googleToken = useSelector((state) => state.reducer.jwt_key);
  const googleUser = useSelector((state) => state.reducer.user);

  // Form Values
  const [eidValue, setEidValue] = React.useState('');
  const [majorValue, setMajorValue] = React.useState('');
  const [orgValue, setOrgValue] = React.useState('');


  const createAccount = () => {
    axios.put('https://cs-week-api.herokuapp.com/auth/create', {
      google_id: googleToken,
      uteid: eidValue,
      major: majorValue,
      org: orgValue,
    }).then((response) => {
      // Check response status
      if (response.status === 200) {
        // Redirect
      }
      else {
      }
    }, (error) => {
      // else: have the user sign in again
    })
  }

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png").default}
                      />
                      <CardTitle tag="h4"> Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder={
                              googleUser.name === undefined ?
                              "Full Name" : ''
                            }
                            value={
                              googleUser.name === undefined ?
                              "" : googleUser.name
                            }
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder={
                              googleUser.email === undefined ?
                              "Email" : ''
                            }
                            value={
                              googleUser.email === undefined ?
                              "" : googleUser.email
                            }
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": eidFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-badge" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="UT EID"
                            type="text"
                            onFocus={(e) => setEidFocus(true)}
                            onBlur={(e) => setEidFocus(false)}
                            onChange={(e) => {setEidValue(e.target.value)}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": majorFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-bulb-63" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Computer Science"
                            onFocus={(e) => setMajorFocus(true)}
                            onBlur={(e) => setMajorFocus(false)}
                            onChange={(e) => {setMajorValue(e.target.value)}}
                            id="selectMajor"
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": orgFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-app" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="select"
                            name="select"
                            onFocus={(e) => setOrgFocus(true)}
                            onBlur={(e) => setOrgFocus(false)}
                            onChange={(e) => {setOrgValue(e.target.value)}}
                          >
                          <option>ABCS</option>
                          <option>ACM/A4C</option>
                          <option>Convergent</option>
                          <option>CS Roadshow</option>
                          <option>CS Transfer Society</option>
                          <option>ECLAIR</option>
                          <option>EGaDS</option>
                          <option>Freetail Hackers</option>
                          <option>UTPC</option>
                          </Input>
                        </InputGroup>
                      </Form>
                    </CardBody>
                    <p className="text-white ml-4 mr-3">
                      Please note that you can select <font className='text-success'> one </font>
                      organization to represent.{" "}
                    <font className='text-danger'>You cannot change this later.</font>
                    </p>
                    <Button
                      className="btn-round ml-3 mr-3 mb-3 mt-2"
                      color="primary"
                      size="lg"
                      onClick={createAccount}
                      disabled={
                        googleUser.name === undefined ||
                        googleUser.email === undefined ||
                        eidValue === '' ||
                        majorValue === ''
                      }
                      >
                      Create account!
                    </Button>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
