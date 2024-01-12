import React from "react";
import { Button, Input } from "reactstrap";

export default function Search({ setSearchQuery, searchQuery }) {
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
