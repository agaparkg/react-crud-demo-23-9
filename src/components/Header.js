import React from "react";
import { Button, InputGroup } from "reactstrap";
import Search from "./Search";

export default function Header({
  setSearchQuery,
  searchQuery,
  setModalAction,
  setModal,
}) {
  const handleAddBtnClick = () => {
    setModal(true);
    setModalAction("add");
  };

  return (
    <InputGroup className="w-50 my-2 mx-auto">
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Button className="ms-2" color="primary" onClick={handleAddBtnClick}>
        {/* ms --> margin start */}
        Add New Student
      </Button>
    </InputGroup>
  );
}
