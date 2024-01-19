import React from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function InfoModal({
  toggle,
  fname,
  avatar,
  lname,
  country,
  company,
  age,
  phone,
}) {
  return (
    <>
      <ModalHeader toggle={() => toggle(null, null)}>
        Info about {fname} {lname}?
      </ModalHeader>
      <ModalBody>
        <div style={{ textAlign: "center" }}>
          <img width="150" height="150" src={avatar} alt="" />
          <div style={{ padding: "10px" }}>
            <div>
              <strong>Age:</strong> {age}
            </div>
            <div>
              <strong>Country:</strong> {country}
            </div>
            <div>
              <strong>Phone #:</strong> {phone}
            </div>
            <div>
              <strong>Company:</strong> {company}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => toggle(null, null)}>
          Close
        </Button>
      </ModalFooter>
    </>
  );
}
