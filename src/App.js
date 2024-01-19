import { useState } from "react";
import "./App.css";
// import { Container, Table } from "reactstrap";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // modalAction: delete, edit, add, info
  const [modalAction, setModalAction] = useState(null);
  const [modal, setModal] = useState(false);
  const [stId, setStId] = useState(null);

  const toggle = (id, action) => {
    setModalAction(action); // info
    setModal(!modal); // true
    setStId(id);
  };

  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <Header
        toggle={toggle}
        setModalAction={setModalAction}
        modal={modal}
        modalAction={modalAction}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Students
        toggle={toggle}
        stId={stId}
        setModalAction={setModalAction}
        modalAction={modalAction}
        modal={modal}
        searchQuery={searchQuery}
      />
      <footer>Seytech LLC. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
