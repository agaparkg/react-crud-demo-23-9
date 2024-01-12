import React, { useEffect, useState } from "react";
import { Container, Table, Spinner, Button } from "reactstrap";
import fetchData from "../utils/apiCalls/getData";
import SingleStudent from "./SingleStudent";

export default function Students() {
  //   const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndSetState = async () => {
    // console.log(await fetchData());
    setIsLoading(false);
    setStudents(await fetchData());
    setIsLoading(true);
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

  //   Conditional Rendering
  //   let content;
  //   if (isLoading) {
  //     content = <div>Hello World</div>;
  //   } else {
  //     content = <div>Bye bye World</div>;
  //   }

  //   && logical operator

  const handleStudentDelete = (id) => {
    console.log(id);
  };

  return (
    <Container className="border p-2">
      {/* <Button onClick={() => fetchAndSetState()}>Refetch</Button> */}
      {/* {isLoading && <div>Hello World</div>} */}
      {/* {isLoading ? <div>Hello World</div> : <div>Bye bye World</div>} */}
      {students.length === 0 && !isLoading ? (
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
            {students.map((student, index) => {
              return (
                <SingleStudent
                  handleStudentDelete={handleStudentDelete}
                  key={student.id}
                  {...student}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
