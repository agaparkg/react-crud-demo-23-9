import React from "react";
import { Button } from "reactstrap";

export default function SingleStudent({
  index,
  avatar,
  fname,
  lname,
  age,
  country,
  id,
  handleStudentDelete,
  toggle,
}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <img width="100" src={avatar} alt="" />
      </td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{age}</td>
      <td>{country}</td>
      <td>
        <Button>
          <i className="fa fa-pencil"></i>
        </Button>
        <Button color="danger" className="mx-2" onClick={() => toggle(id)}>
          <i className="fa fa-trash"></i>
        </Button>
        <Button color="primary">
          <i className="fa fa-info"></i>
        </Button>
      </td>
    </tr>
  );
}
