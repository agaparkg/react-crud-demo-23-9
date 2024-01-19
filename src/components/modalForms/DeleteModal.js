import React from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function DeleteModal({ toggle, handleStudentDelete, stId }) {
  return (
    <>
      <ModalHeader toggle={toggle}>Delete?</ModalHeader>
      <ModalBody>Are you sure you wanna delete this user?</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleStudentDelete(stId);
            toggle(stId, "delete");
          }}
        >
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}
