import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table