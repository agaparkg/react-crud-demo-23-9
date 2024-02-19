import React from "react";
import { Button, InputGroup } from "reactstrap";
import Search from "./Search";
import { useStateContextApi } from "../utils/context/context-api";

export default function Header() {
  const { setModalAction, setModal } = useStateContextApi();

  const handleAddBtnClick = () => {
    setModal(true);
    setModalAction("add");
  };

  return (
    <InputGroup className="w-50 my-2 mx-auto">
      <Search />
      <Button className="ms-2" color="primary" onClick={handleAddBtnClick}>
        {/* ms --> margin start */}
        Add New Student
      </Button>
    </InputGroup>
  );
}
