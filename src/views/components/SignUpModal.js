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
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Modal,
} from "reactstrap";

export default function SignUpModal({
  formModal,
  setFormModal,
  googleUser,
  modalError,
  setErrorModal,
}) {

  const history = useHistory();

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
        hidden={!isEmpty(googleUser)}
      >
      </button>
      {!isEmpty(googleUser) && googleUser.loading === undefined &&
        <Button
          className="nav-link d-none d-lg-block"
          color="primary"
          onClick={() => {history.push('/profile')}}
        >
          {`${googleUser.name}  `}
          <i className="tim-icons icon-minimal-right" />
        </Button>
      }
      {!isEmpty(googleUser) && googleUser.loading !== undefined &&
        <Button
          className="nav-link d-none d-lg-block"
          color="info"
        >
          Loading...
        </Button>
      }
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
    </div>
  );
}
