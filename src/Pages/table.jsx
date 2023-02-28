import React from "react";

function Table() {
  const data = [
    {
      id: 1,
      sNo: 1,
      name: "John Doe",
      dateCreated: "2022-02-10",
      role: "Developer",
      status: "Active",
      action: "Edit",
    },
    {
      id: 2,
      sNo: 2,
      name: "Jane Doe",
      dateCreated: "2022-02-11",
      role: "Designer",
      status: "Inactive",
      action: "Delete",
    },
    {
      id: 3,
      sNo: 3,
      name: "Bob Smith",
      dateCreated: "2022-02-12",
      role: "Manager",
      status: "Active",
      action: "Edit",
    },
    // add more data as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>S.no.</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.sNo}</td>
            <td>{item.name}</td>
            <td>{item.dateCreated}</td>
            <td>{item.role}</td>
            <td>{item.status}</td>
            <td>{item.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
