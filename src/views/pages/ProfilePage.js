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
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import profileBackground from 'assets/pages/profileBackground.png';

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Col,
  Row,
  Modal,
  FormGroup,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";


function AttendanceModal ({
  formModal,
  setFormModal,
  submitAttendance,
}) {

    const [passwordFocus, setPasswordFocus] = React.useState(false);
    const [password, setPassword] = React.useState('');

    return <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Event Sign In</h3>
              </div>
            </div>
            <div className="modal-body">
              <Form role="form">
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                      onChange={(e) => {setPassword(e.target.value)}} 
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={(e) => { submitAttendance(password) }}
                  >
                    Sign in to event
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
}

export default function ProfilePage() {

  const googleToken = useSelector((state) => state.reducer.jwt_key);
  const googleUser = useSelector((state) => state.reducer.user);

  const [userInfo, setUserInfo] = React.useState({});
  const [extraIndex, setExtraIndex] = React.useState(0);
  const [eventIndex, setEventIndex] = React.useState(0);

  // User information updating
  const [userEID, setUserEID] = React.useState('');
  const [userMajor, setUserMajor] = React.useState('');
  const [userDrive, setUserDrive] = React.useState('');

  // Alert setting
  const [updateReq, setUpdateReq] = React.useState(false);
  const [updateContent, setUpdateContent] = React.useState('');
  const [errorReq, setErrorReq] = React.useState(false);
  const [errorContent, setErrorContent] = React.useState('');

  const [formModal, setFormModal] = React.useState(false);
  const history = useHistory();

  const eventDescription = [
    'TBD', 'TBD', 'CTS', 'QC', 'TBD', 'C', 'EG', 'EC', 'TBD', 'FH',
    'A4C', 'TBD', 'TBD', 'ACM', 'R', 'TBD', 'PC',
  ]

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  React.useEffect(() => {
    if (isEmpty(userInfo) && googleToken !== '') {
      axios.put('https://cs-week-api.herokuapp.com/auth/user_info', {
        google_id: googleToken,
      }).then((response) => {
        // Check response status
        if (response.status === 200) {
          setUserInfo(response.data);
          setUserEID(response.data.uteid);
          setUserMajor(response.data.major);
          setUserDrive(response.data.drive_link);
        }
      }).catch((error) => {
        // else: have the user sign in again
        history.push('/register');
      })
    }
  },[userInfo, googleToken, history]);

  if (googleUser.name === undefined) {
    return (<div className="page-header header-filter" style={{
      backgroundImage : `url(${profileBackground})`,
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

  if (isEmpty(userInfo)) {
    return (<div className="page-header header-filter" style={{
      backgroundImage : `url(${profileBackground})`,
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
              <h2 className="text-white ml-4 mr-3 mt-3">
                Loading...
              </h2>
            </Card>
          </Col>
        </Container>
      </div>
    </div>)
  }

  const submitExtraEventRequest = (idx, msg) => {
    // some axios stuff to do a request
    axios.put('https://cs-week-api.herokuapp.com/auth/extra_event', {
      google_id: googleToken,
      extra_event_id: idx,
    }).then((response) => {
      // Check response status
      if (response.status === 200) {
        setErrorReq(false);
        setUpdateReq(true);
        setUpdateContent(msg);
      }
    }).catch((error) => {
      // else: have the user sign in again
      setUpdateReq(false);
      setErrorReq(true);
      setErrorContent('Oh no! An error occurred. Please contact eclairrobotics@gmail.com if this issue persists');
    })
  }

  const submitAttendance = (code) => {
    // some axios stuff to do a request
    axios.put('https://cs-week-api.herokuapp.com/auth/attendance', {
      google_id: googleToken,
      event_id: code,
    }).then((response) => {
      // Check response status
      if (response.status === 200) {
        setErrorReq(false);
        setUpdateReq(true);
        setUpdateContent(`Successfully recorded your attendance!`);
      }
    }).catch((error) => {
      // else: have the user sign in again
      setUpdateReq(false);
      setErrorReq(true);
      setErrorContent('Oh no! An error occurred. Please contact eclairrobotics@gmail.com if this issue persists');
    })
    setFormModal(false);
  }

  const submitProfileChanges = () => {
    // some axios stuff to do a request
    axios.put('https://cs-week-api.herokuapp.com/auth/update', {
      google_id: googleToken,
      uteid: userEID,
      drive_link: userDrive,
      major: userMajor,
    }).then((response) => {
      // Check response status
      if (response.status === 200) {
        setErrorReq(false);
        setUpdateReq(true);
        setUpdateContent(`Updated your user profile!`);
      }
    }).catch((error) => {
      // else: have the user sign in again
      setUpdateReq(false);
      setErrorReq(true);
      setErrorContent('Oh no! An error occurred. Please contact eclairrobotics@gmail.com if this issue persists');
    })
  }

  return (
    <div className="page-header header-filter" style={{
      backgroundImage : `url(${profileBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>
        <IndexNavbar />
        <AttendanceModal
          formModal={formModal}
          setFormModal={setFormModal}
          submitAttendance={submitAttendance}
        />
        {updateReq && <Alert
            color='success'
            style={{marginTop: '5%', cursor: 'pointer'}}
            onClick={() => {setUpdateReq(false)}}
          >
            {updateContent}
          </Alert>
        }
        {errorReq && <Alert
            color='danger'
            style={{marginTop: '5%', cursor: 'pointer'}}
            onClick={() => {setErrorReq(false)}}
          >
            {errorContent}
          </Alert>
        }
        <Container>
          <Col style={{
              width : '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: updateReq || errorReq ? '7%' : '12%',
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
                    <label>Email address (Cannot change)</label>
                    <Input value={userInfo.email}
                      type="email"
                      readOnly={true}
                      style={{color: 'white'}}/>
                  </FormGroup>
                  <FormGroup className='ml-4 mr-5'>
                    <label>UTEID</label>
                    <Input
                      defaultValue={userEID}
                      type="text"
                      onChange={(e) => {setUserEID(e.target.value)}} 
                    />
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
                    <Col md="4">
                      <FormGroup>
                        <label>Major</label>
                        <Input
                          defaultValue={userMajor}
                          type="text"
                          onChange={(e) => {setUserMajor(e.target.value)}} 
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Google Drive Extra Event Link</label>
                        <Input
                          defaultValue={userDrive}
                          type="text"
                          onChange={(e) => {setUserDrive(e.target.value)}} 
                        />
                      </FormGroup>
                    </Col>
                    <Col md='1'>
                      <Button
                        className="btn-simple"
                        color="primary"
                        onClick={(e) => { submitProfileChanges() }}
                      >
                        <i className="tim-icons icon-pencil" /> Update
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                      <label>Attendance</label>
                      <Row className='ml-1'>
                        <i className="tim-icons icon-minimal-left text-info mr-3 mt-3"
                          onClick={() => {
                            setEventIndex(eventIndex - 5 >= 0 ? eventIndex - 5 : 0);
                          }}
                          style={{cursor: 'pointer'}}
                        />
                        {userInfo.attendance.map((bool, idx) => {
                          if (idx < eventIndex || idx >= eventIndex + 5) {
                            return <></>;
                          }

                          const color = bool ? '#00f2c3' : '#1d8cf8';

                          return <button key={idx} style={{
                                marginLeft : '5px',
                                width : '45px',
                                height : '45px',
                                textAlign : 'center',
                                color: color,
                                borderColor: color,
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                backgroundColor: 'transparent',
                              }}
                              type='button'
                              onClick={(e) => {setFormModal(true)}}
                            >
                            {eventDescription[idx]}
                            </button>
                        })}
                        <i className="tim-icons icon-minimal-right text-info ml-3 mt-3"
                          onClick={() => {
                            setEventIndex(eventIndex + 5 < eventDescription.length ? eventIndex + 5 : extraIndex);
                          }}
                          style={{cursor: 'pointer'}}
                        />
                      </Row>
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <FormGroup>
                      <label>Extra Events</label>
                      <Row className='ml-1'>
                        <i className="tim-icons icon-minimal-left mr-3 mt-3"
                          onClick={() => {
                            setExtraIndex(extraIndex - 5 >= 0 ? extraIndex - 5 : 0);
                          }}
                          style={{cursor: 'pointer'}}
                        />
                        <UncontrolledTooltip placement="bottom" target='tooltipExtraEvent'>
                          Click this extra event for an officer to review your submission in the Google Drive!
                        </UncontrolledTooltip>
                        {userInfo.extra.map((num, idx) => {
                          // Only show 5 extra events at a time
                          if (idx < extraIndex || idx >= extraIndex + 5) {
                            return <></>;
                          }

                          var color = 'white';

                          if (num === 1) {
                            color = '#00f2c3';
                          }
                          else if (num === -1) {
                            color = '#ff8d72';
                          }

                          return <button key={idx}
                                className=""
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
                                  backgroundColor: 'transparent',
                                }}
                                type='button'
                                id='tooltipExtraEvent'
                                onClick={() => {
                                  if (num === 0) {
                                    var newList = userInfo.extra;
                                    newList[idx] = -1;
                                    setUserInfo({'extra': newList, ...userInfo});

                                    submitExtraEventRequest(idx, `Extra event #${idx} is under review!`);
                                  }
                                  else if (num === -1) {
                                    var newList2 = userInfo.extra;
                                    newList2[idx] = 0;
                                    setUserInfo({'extra': newList2, ...userInfo});

                                    submitExtraEventRequest(idx, `Extra event #${idx} is no longer under review!`);
                                  }
                                }}
                              >
                              {`${idx}`}
                              </button>
                        })}
                        <i className="tim-icons icon-minimal-right ml-3 mt-3"
                          onClick={() => {
                            setExtraIndex(extraIndex + 5 < 99 ? extraIndex + 5 : extraIndex);
                          }}
                          style={{cursor: 'pointer'}}
                        />
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
    </div>
  );
}
