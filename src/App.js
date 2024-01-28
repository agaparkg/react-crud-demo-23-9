import { useState } from "react";
import "./App.css";
// import { Container, Table } from "reactstrap";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAction, setModalAction] = useState(null);
  const [modal, setModal] = useState(false);
  const [stId, setStId] = useState(null);

  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <Header
        setModal={setModal}
        setModalAction={setModalAction}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Students
        stId={stId}
        setStId={setStId}
        setModalAction={setModalAction}
        modalAction={modalAction}
        modal={modal}
        setModal={setModal}
        searchQuery={searchQuery}
      />
      <footer>Seytech LLC. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
