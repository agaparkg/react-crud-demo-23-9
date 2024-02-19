import React, { createContext, useContext, useState, useEffect } from "react";
import createData from "../apiCalls/createData";
import deleteData from "../apiCalls/deleteData";
import fetchData from "../apiCalls/getData";
import updateData from "../apiCalls/updateData";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAction, setModalAction] = useState(null);
  const [modal, setModal] = useState(false);
  const [stId, setStId] = useState(null);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState(null);

  const fetchAndSetState = async () => {
    setIsLoading(false);
    setStudents(await fetchData());
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  };

  useEffect(() => {
    fetchAndSetState();
  }, []);

  const toggle = (id, action) => {
    setStudent(students.find((st) => st.id === id));
    setModalAction(action); // info
    setModal(!modal); // true
    setStId(id);
  };

  const handleStudentDelete = (id) => {
    deleteData(id).then((data) => {
      fetchAndSetState();
    });
  };

  const handleStudentAdd = (newStudent) => {
    createData(newStudent).then((data) => {
      fetchAndSetState();
    });
  };

  const handleStudentEdit = (newStudent) => {
    updateData(newStudent).then((data) => {
      fetchAndSetState();
    });
  };

  const value = {
    searchQuery,
    setSearchQuery,
    modal,
    modalAction,
    setModal,
    stId,
    setStId,
    setModalAction,
    isLoading,
    student,
    students,
    toggle,
    handleStudentAdd,
    handleStudentDelete,
    handleStudentEdit,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContextApi = () => useContext(StateContext);
