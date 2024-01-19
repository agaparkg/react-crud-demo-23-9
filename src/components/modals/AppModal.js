import React from "react";
import { Modal } from "reactstrap";
import DeleteModal from "./DeleteModal";
import InfoModal from "./InfoModal";

function AppModal({
  modal,
  toggle,
  handleStudentDelete,
  stId,
  modalAction,
  student,
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {modalAction === "delete" && (
          <DeleteModal
            stId={stId}
            handleStudentDelete={handleStudentDelete}
            toggle={toggle}
          />
        )}
        {/* {modalAction === "add" && <AddModal />} */}
        {/* {modalAction === "edit" && <EditModal />} */}
        {modalAction === "info" && <InfoModal {...student} toggle={toggle} />}
      </Modal>
    </div>
  );
}

export default AppModal;
