import React from "react";
import { Button, InputGroup } from "reactstrap";
import Search from "./Search";

export default function Header() {
  return (
    <InputGroup className="w-50 my-2 mx-auto">
      <Search />
      <Button className="ms-2" color="primary">
        {/* ms --> margin start */}
        Add New Student
      </Button>
    </InputGroup>
  );
}
