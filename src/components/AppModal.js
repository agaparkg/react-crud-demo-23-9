import React from "react";
import { Modal } from "reactstrap";
import DeleteModal from "./modalForms/DeleteModal";

function AppModal({ modal, toggle, handleStudentDelete, stId, modalAction }) {
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
        {/* {modalAction === "info" && <InfoModal />} */}
      </Modal>
    </div>
  );
}

export default AppModal;
