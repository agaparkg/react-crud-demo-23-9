import React, { useEffect, useState } from "react";
import { Container, Table, Spinner } from "reactstrap";
import fetchData from "../utils/apiCalls/getData";
import SingleStudent from "./SingleStudent";
import deleteData from "../utils/apiCalls/deleteData";
import AppModal from "./modals/AppModal";

export default function Students({
  searchQuery,
  stId,
  modal,
  setStId,
  setModal,
  modalAction,
  setModalAction,
}) {
  //   const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState(null);

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

  const toggle = (id, action) => {
    setStudent(students.find((st) => st.id === id));
    setModalAction(action); // info
    setModal(!modal); // true
    setStId(id);
  };

  const handleStudentDelete = (id) => {
    deleteData(id).then((data) => {
      //   console.log("Successfully deleted student", data);
      fetchAndSetState();
    });
  };

  const filteredStudents = students.filter(
    (student) =>
      student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="border p-2" fluid>
      {/* <Button onClick={() => fetchAndSetState()}>Refetch</Button> */}
      {/* {isLoading && <div>Hello World</div>} */}
      {/* {isLoading ? <div>Hello World</div> : <div>Bye bye World</div>} */}
      {filteredStudents.length === 0 && !isLoading ? (
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
                <SingleStudent
                  toggle={toggle}
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
      <AppModal
        modalAction={modalAction}
        stId={stId}
        modal={modal}
        toggle={toggle}
        student={student}
        handleStudentDelete={handleStudentDelete}
      />
    </Container>
  );
}
