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

  return (<div>
      <IndexNavbar />
      <Container>
        <Col style={{
            'width' : '800px',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'margin-top': '15%',
          }}
        >
          <Card className="card-register" style={{height: '400px'}}>
            <h4 className="mt-3" style={{
              'margin-right' : 'auto',
              'margin-left' : 'auto',
              'color' : '#e36ef4',
              'font-size' : '40px',
              'font-family': 'bdr-mono, sans-serif',
              'font-style': 'normal',
              'font-weight': 300
            }}>{googleUser.name}</h4>
            <CardBody>
              <Form className='ml-3 mr-3'>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Email address</label>
                      <Input defaultValue={userInfo.email} type="email" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>UTEID</label>
                      <Input defaultValue={userInfo.uteid} type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Major</label>
                      <Input defaultValue={userInfo.major} type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Google Drive Extra Event Link</label>
                      <Input placeholder={userInfo.drive_link} type="text" />
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
