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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";
import { setCreateUser } from "views/reduxFiles/reduxGoogle.js"
import registerBackground from 'assets/pages/registerBackground.png';

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
  const createUser = useSelector((state) => state.reducer.createUser);
  const dispatch = useDispatch();
  const history = useHistory();

  // Form Values
  const [eidValue, setEidValue] = React.useState('');
  const [majorValue, setMajorValue] = React.useState('');
  const [orgValue, setOrgValue] = React.useState('');

  if (!createUser) {
    history.push('/profile')
  }

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
        dispatch(setCreateUser(false));
        history.push('/profile');
      }
      else {
      }
    }, (error) => {
      // else: have the user sign in again
    })
  }

  if (googleUser.name === undefined) {
    return (<div className="page-header header-filter" style={{
        backgroundImage : `url(${registerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div>
      <IndexNavbar />
      <Container>
        <Col style={{
            width : '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
          }}
        >
          <Card className="card-register">
            <h4 className="mt-3" style={{
              marginRight : 'auto',
              marginLeft : 'auto',
              marginTop : '20px',
              color : '#e36ef4',
              fontSize : '40px',
              fontFamily: 'bdr-mono, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
            }}>REGISTER</h4>
            <h2 className="text-white ml-4 mr-3 mt-3" style={{textAlign: 'center'}}>
              Please sign in using your utexas gmail account! ^_^
            </h2>
            <h4 className="text-white ml-4 mr-3" style={{textAlign: 'center'}}>
              For the best experience on this site, please view this website on a laptop.
            </h4>
          </Card>
        </Col>
      </Container>
    </div>
    </div>)
  }

  return (<div className="page-header header-filter" style={{
      backgroundImage : `url(${registerBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>
      <IndexNavbar />
      <Container>
        <Col style={{
            width : '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10%',
          }}
        >
          <Card className="card-register">
            <h4 style={{
              marginRight : 'auto',
              marginLeft : 'auto',
              marginTop : '20px',
              color : '#e36ef4',
              fontSize : '40px',
              fontFamily: 'bdr-mono, sans-serif',
              fontStyle: 'normal',
              fontWeight: 300,
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
                    readOnly={true}
                    style={{color: 'white'}}
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
                    readOnly={true}
                    style={{color: 'white'}}
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
                    placeholder="Major(s)"
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
                  <option style={{color: 'black'}}>ACM/A4C</option>
                  <option style={{color: 'black'}}>Convergent</option>
                  <option style={{color: 'black'}}>CS Roadshow</option>
                  <option style={{color: 'black'}}>CS Transfer Society</option>
                  <option style={{color: 'black'}}>ECLAIR</option>
                  <option style={{color: 'black'}}>EGaDS</option>
                  <option style={{color: 'black'}}>Freetail Hackers</option>
                  <option style={{color: 'black'}}>Girls Who Code</option>
                  <option style={{color: 'black'}}>Quantum Collective</option>
                  <option style={{color: 'black'}}>UTPC</option>
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
    </div>
  );
}
