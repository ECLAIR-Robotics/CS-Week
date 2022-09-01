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
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
} from "reactstrap";
import classnames from "classnames";

export default function SignUpModal({
  formModal,
  setFormModal,
  googleUser,
  modalError,
  setErrorModal,
}) {

  const [uteidFocus, setuteidFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [majorFocus, setMajorFocus] = React.useState(false);
  const [orgFocus, setOrgFocus]     = React.useState(false);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const demoModal = (modalError !== '');

  return (
    <div>
      <button
        id="google_signup"
        href=""
        onClick={() => {setFormModal(true)}}
        style={{ background: "none", border: "none", padding: 0 }}
      >
        <i className="tim-icons icon-triangle-right-17" />
      </button>
      {!isEmpty(googleUser) &&
        <Button
          className="nav-link d-none d-lg-block"
          color="primary"
          href="/profile"
        >
          {`${googleUser.name}  `}
          <i className="tim-icons icon-minimal-right" />
        </Button>
      }
      {modalError !== '' && 
        <Modal isOpen={demoModal} toggle={() => setErrorModal('')}>
          <div className="modal-header justify-content-center">
            <button 
              className="close"
              onClick={() => setErrorModal('')}>
              <i className="tim-icons icon-simple-remove" />
            </button>
            <h4 className="title title-up">Oh no! An error occurred</h4>
          </div>
          <div className="modal-body">
            <p>{modalError}</p>
          </div>
          <div className="modal-footer ml-auto mr-auto">
            <Button
              color="danger"
              type="button"
              onClick={() => setErrorModal('')}
            >
              Close
            </Button>
          </div>
        </Modal>
      }
      {/* Start Form Modal */}
      <Modal
        modalClassName="modal-black"
        isOpen={formModal}
        toggle={() => setFormModal(false)}
      >
        <div className="modal-header justify-content-center">
          <button className="close" onClick={() => setFormModal(false)}>
            <i className="tim-icons icon-simple-remove text-white" />
          </button>
          <div className="text-muted text-center ml-auto mr-auto">
            <h3 className="mb-0">Sign in</h3>
          </div>
        </div>
        <div className="modal-body">
          <div className="btn-wrapper text-center">
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                src={require("assets/img/google.svg").default}
              />
            </Button>
          </div>
          <div className="text-center text-muted mb-4 mt-3">
            <small>Or sign in with credentials</small>
          </div>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": emailFocus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-email-85" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  onFocus={(e) => setEmailFocus(true)}
                  onBlur={(e) => setEmailFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": majorFocus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-pencil" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Major"
                  type="major"
                  onFocus={() => setMajorFocus(true)}
                  onBlur={() => setMajorFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": uteidFocus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="UTEID"
                  type="uteid"
                  onFocus={() => setuteidFocus(true)}
                  onBlur={() => setuteidFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": orgFocus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-globe-2" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Organization"
                  type="organization"
                  onFocus={() => setOrgFocus(true)}
                  onBlur={() => setOrgFocus(false)}
                />
              </InputGroup>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="primary" type="button">
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
      {/* End Form Modal */}
    </div>
  );
}
