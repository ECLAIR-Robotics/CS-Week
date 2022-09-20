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
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function RegisterPage() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [eidFocus, setEidFocus] = React.useState(false);
  const [majorFocus, setMajorFocus] = React.useState(false);
  const [orgFocus, setOrgFocus] = React.useState(false);

  const googleToken = useSelector((state) => state.reducer.jwt_key);
  const googleUser = useSelector((state) => state.reducer.user);
  const history = useHistory();

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
        history.push('/profile');
      }
      else {
      }
    }, (error) => {
      // else: have the user sign in again
    })
  }

  if (googleUser.name === undefined) {
    return (<div>
      <IndexNavbar />
      <Container>
        <Col style={{
            'width' : '500px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'margin-top': '10%',
          }}
        >
          <Card className="card-register">
            <h4 className="mt-3" style={{
              'margin-right' : 'auto',
              'margin-left' : 'auto',
              'margin-top' : '20px',
              'color' : '#e36ef4',
              'font-size' : '40px',
              'font-family': 'bdr-mono, sans-serif',
              'font-style': 'normal',
              'font-weight': 300,
            }}>REGISTER</h4>
            <h2 className="text-white ml-4 mr-3 mt-3">
              Please sign in using your utexas gmail account! ^_^
            </h2>
          </Card>
        </Col>
      </Container>
    </div>)
  }

  return (<div>
      <IndexNavbar />
      <Container>
        <Col style={{
            'width' : '500px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'margin-top': '10%',
          }}
        >
          <Card className="card-register">
            <h4 style={{
              'margin-right' : 'auto',
              'margin-left' : 'auto',
              'color' : '#e36ef4',
              'font-size' : '40px',
              'font-family': 'bdr-mono, sans-serif',
              'font-style': 'normal',
              'font-weight': 300
            }}>REGISTER</h4>
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
                  <option>Quantum Collective</option>
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
      </Container>
    </div>
  );
}
