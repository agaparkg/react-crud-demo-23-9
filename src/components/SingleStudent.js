import React from "react";

export default function SingleStudent({
  index,
  avatar,
  fname,
  lname,
  age,
  country,
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
      <td>@mdo</td>
    </tr>
  );
}
