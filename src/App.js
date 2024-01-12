import { useState } from "react";
import "./App.css";
// import { Container, Table } from "reactstrap";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Students searchQuery={searchQuery} />
      <footer>Seytech LLC. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
