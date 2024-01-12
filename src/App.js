import "./App.css";
import { Button, InputGroup, InputGroupText, Input } from "reactstrap";

function App() {
  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <InputGroup className="w-50 my-2 mx-auto">
        <Button color="danger">x</Button>
        <Input placeholder="Search..." />
        <Button color="primary">Add New Student</Button>
      </InputGroup>
    </div>
  );
}

export default App;
