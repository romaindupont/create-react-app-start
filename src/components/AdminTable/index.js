import React from 'react';

const AdminTable = ({ list, saveUserId }) => {
  const selectInput = (e) => {
    if (e.target.checked) {
      saveUserId(parseInt(e.target.value));
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>is_admin</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user,i)=>
        <tr key={i} id={user.id}>
          <td><input type="checkbox" onChange={selectInput} value={user.id}></input></td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.is_admin}</td>
        </tr>)}
      </tbody>
    </table>
  )
}

export default AdminTable;
