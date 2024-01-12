import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "reactstrap";

export default function Students() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  // componentDidMount(){}
  useEffect(() => {
    // console.log("componentDidMount");
    const fetchData = async () => {
      const url = "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students";

      try {
        const res = await fetch(url);
        const data = await res.json();

        setStudents(data);
      } catch (error) {}
    };

    fetchData();
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
            <td>
              <Button onClick={() => setName("John")}>Change</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
