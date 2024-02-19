import React from "react";
import { Modal } from "reactstrap";
import DeleteModal from "./DeleteModal";
import InfoModal from "./InfoModal";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { useStateContextApi } from "../../utils/context/context-api";

function AppModal() {
  const { modal, toggle, modalAction } = useStateContextApi();
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {modalAction === "delete" && <DeleteModal />}
        {modalAction === "add" && <AddModal />}
        {modalAction === "edit" && <EditModal />}
        {modalAction === "info" && <InfoModal />}
      </Modal>
    </div>
  );
}

export default AppModal;
