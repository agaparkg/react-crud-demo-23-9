import React from "react";
import { Button } from "reactstrap";
import { useStateContextApi } from "../utils/context/context-api";

export default function SingleStudent({
  avatar,
  fname,
  lname,
  age,
  country,
  id,
  index,
}) {
  const { toggle } = useStateContextApi();
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
        <Button onClick={() => toggle(id, "edit")}>
          <i className="fa fa-pencil"></i>
        </Button>
        <Button
          color="danger"
          className="mx-2"
          onClick={() => toggle(id, "delete")}
        >
          <i className="fa fa-trash"></i>
        </Button>
        <Button color="primary" onClick={() => toggle(id, "info")}>
          <i className="fa fa-info"></i>
        </Button>
      </td>
    </tr>
  );
}
