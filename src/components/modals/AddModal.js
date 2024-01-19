import React from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function AddModal({ toggle }) {
  return (
    <>
      <ModalHeader toggle={toggle}>Delete?</ModalHeader>
      <ModalBody>Are you sure you wanna delete this user?</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => {}}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}
