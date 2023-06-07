import React from 'react'
import "../pagination.css"



const Users = ({ us, users }) => {
 
  return (
    <div className={us}>
      <h1>Users</h1>
      <table className="table">
        <thead className='barraUp'>
          <tr >
            <th className="col">id</th>
            <th className="col">Name</th>
            <th className="col">Email</th>
            <th className="col">Satatus</th>
            <th className="col">Level</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {users != null ?
            users.map((value) => (
              <tr key={value.id}>
                <td className='textTable'>{value.id}</td>
                <td className='textTable'>{value.fullname}</td>
                <td className='textTable'>{value.email}</td>
                <td className='pay'>Payment</td>
                <td className='textTable'>Beginner</td>
              </tr>
            ))
            : <h1>No hay usuarios</h1>}
        </tbody>
      </table>
    </div>
  )
}

export default Users