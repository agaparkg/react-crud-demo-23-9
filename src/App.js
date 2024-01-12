import "./App.css";
// import { Container, Table } from "reactstrap";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <Header />
      <Students />
    </div>
  );
}

export default App;
