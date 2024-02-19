import React from "react";
import { Container, Table, Spinner } from "reactstrap";
import SingleStudent from "./SingleStudent";
import AppModal from "./modals/AppModal";
import { useStateContextApi } from "../utils/context/context-api";

export default function Students() {
  const { searchQuery, modal, students, isLoading } = useStateContextApi();

  const filteredStudents = students.filter(
    (student) =>
      student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="border p-2 scrolling" fluid>
      {!isLoading ? (
        <Spinner color="primary">Loading...</Spinner>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => {
              return (
                <SingleStudent {...student} key={student.id} index={index} />
              );
            })}
          </tbody>
        </Table>
      )}
      {modal && <AppModal />}
    </Container>
  );
}
