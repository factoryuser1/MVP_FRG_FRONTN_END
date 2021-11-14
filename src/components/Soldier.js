import React from 'react';


function Soldier({soldier,handleUpdate, handleDelete}) {
    return (
        <tr key={soldier.id}>
            <td>{soldier.id}</td>
            <td>{soldier.firstName}</td>
            <td>{soldier.lastName}</td>
            <td>{soldier.age}</td>
            <td>{soldier.dob}</td>
            <td>{soldier.email}</td>
            <td>{soldier.phone}</td>
            <td>{soldier.address}</td>
            <td>{soldier.city}</td>
            <td>{soldier.state}</td>
            <td>{soldier.zip}</td>
            <td>{soldier.soldierRank}</td>
            <td>{soldier.unit}</td>
            <td>{soldier.dodId}</td>
            <td>{soldier.married}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-danger">Edit</button>
                <button className="btn btn-danger">Add Spouse</button>
            </td>
        </tr>
    );
}

export default Soldier;