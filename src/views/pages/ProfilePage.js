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
import axios from "axios";

// reactstrap components
import {
  Card,
  CardBody,
  Form,
  Input,
  Container,
  Col,
  Row,
  FormGroup,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function ProfilePage() {

  const googleToken = useSelector((state) => state.reducer.jwt_key);
  const googleUser = useSelector((state) => state.reducer.user);

  const [userInfo, setUserInfo] = React.useState({});
  const [requestComplete, setRequestComplete] = React.useState(false);
  const history = useHistory();

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  React.useEffect(() => {
    if (isEmpty(userInfo) && !requestComplete && googleToken !== '') {
      axios.put('https://cs-week-api.herokuapp.com/auth/user_info', {
        google_id: googleToken,
      }).then((response) => {
        // Check response status
        console.log(response)
        if (response.status === 200) {
          setRequestComplete(true);
          setUserInfo(response.data);
        }
      }).catch((error) => {
        // else: have the user sign in again
        history.push('/register');
      })
    }
  },[userInfo, requestComplete, googleToken, history]);

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
            <h2 className="text-white ml-4 mr-3 mt-3">
              Please sign in using your utexas gmail account! ^_^
            </h2>
          </Card>
        </Col>
      </Container>
    </div>)
  }

  if (isEmpty(userInfo)) {
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
            <h2 className="text-white ml-4 mr-3 mt-3">
              Loading...
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
            'width' : '800px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'margin-top': '12%',
          }}
        >
          <Card className="card-register" style={{height: '450px'}}>
            <Row>
              <Col>
                <div>
                  <h4 className="mt-3" style={{
                    color : '#e36ef4',
                    fontSize : '44px',
                    fontFamily : 'bdr-mono, sans-serif',
                    fontStyle : 'normal',
                    fontWeight : 300,
                    textAlign : 'center',
                  }}>{googleUser.name}</h4>
                </div>
                <FormGroup className='ml-4 mr-5'>
                  <label>UTEID</label>
                  <Input defaultValue={userInfo.uteid} type="text" />
                </FormGroup>
                <FormGroup className='ml-4 mr-5'>
                  <label>Email address</label>
                  <Input defaultValue={userInfo.email} type="email" />
                </FormGroup>
              </Col>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/avatar/question.png").default}
                style={{
                  width: "180px",
                  height: "180px",
                  marginTop: "30px",
                  marginRight: "120px",
                }}
              />
            </Row>
            <CardBody>
              <Form className='ml-2 mr-2'>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Major</label>
                      <Input defaultValue={userInfo.major} type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Google Drive Extra Event Link</label>
                      <Input placeholder={userInfo.drive_link} type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                    <label>Attendance</label>
                    <Row className='ml-1'>
                      {userInfo.attendance.map((bool, idx) => {
                        const color = bool ? '#00f2c3' : '#1d8cf8';

                        return <blockquote>
                          <p style={{
                              marginLeft : '5px',
                              width : '45px',
                              height : '45px',
                              textAlign : 'center',
                              color: color,
                              borderColor: color,
                              borderStyle: 'solid',
                              borderWidth: '1px',
                            }}
                          >
                          {bool}
                          </p>
                        </blockquote>
                      })}
                    </Row>
                    </FormGroup>
                  </Col>
                  <Col md='6'>
                    <FormGroup>
                    <label>Extra Events</label>
                    <Row className='ml-1'>
                      {userInfo.extra.map((num, idx) => {
                        var color = 'white';

                        if (num === 1) {
                          color = '#00f2c3';
                        }
                        else if (num === -1) {
                          color = '#ff8d72';
                        }

                        return <p className=""
                            style={{
                              marginLeft : '5px',
                              width : '45px',
                              height : '45px',
                              textAlign : 'center',
                              color: color,
                              borderColor: color,
                              borderStyle: 'solid',
                              borderWidth: '1px',
                              verticalAlign: 'auto',
                              top: '50%',
                            }}
                          >
                          {idx}
                          </p>
                      })}
                    </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
