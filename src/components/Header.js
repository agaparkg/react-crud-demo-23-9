import React from "react";
import { Button, InputGroup } from "reactstrap";
import Search from "./Search";

export default function Header({ setSearchQuery, searchQuery }) {
  return (
    <InputGroup className="w-50 my-2 mx-auto">
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Button className="ms-2" color="primary">
        {/* ms --> margin start */}
        Add New Student
      </Button>
    </InputGroup>
  );
}
