import React from "react";
import { Button, Input } from "reactstrap";
import { useStateContextApi } from "../utils/context/context-api";

export default function Search() {
  const { setSearchQuery, searchQuery } = useStateContextApi();

  return (
    <>
      {searchQuery && (
        <Button onClick={() => setSearchQuery("")} color="danger">
          x
        </Button>
      )}
      <Input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search..."
      />
    </>
  );
}
