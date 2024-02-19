import React from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useStateContextApi } from "../../utils/context/context-api";

export default function DeleteModal() {
  const { toggle, handleStudentDelete, stId } = useStateContextApi();
  return (
    <>
      <ModalHeader toggle={toggle}>Delete?</ModalHeader>
      <ModalBody>Are you sure you wanna delete this user?</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleStudentDelete(stId);
            toggle(null, null);
          }}
        >
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={() => toggle(null, null)}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}
