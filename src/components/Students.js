import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "reactstrap";
import fetchData from "../utils/apiCalls/getData";

export default function Students() {
  //   const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const fetchAndSetState = async () => {
    // console.log(await fetchData());
    setStudents(await fetchData());
  };

  // componentDidMount(){}
  useEffect(() => {
    fetchAndSetState();
    // console.log("componentDidMount");
    // fetchData().then((data) => setStudents(data));

    // IIFE
    // (async () => {
    //   setStudents(await fetchData());
    // })();
  }, []);

  //   useEffect(() => {
  //     // console.log("componentDidUpdate");
  //   }, [name]);

  console.log(students);
  return (
    <Container className="border p-2">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
