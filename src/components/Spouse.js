import React from 'react';

function Spouse({spouse}) {
    return (
        <tr key={spouse.id}>
            <td>{spouse.id}</td>
            <td>{spouse.firstName}</td>
            <td>{spouse.lastName}</td>
            <td>{spouse.email}</td>
            <td>{spouse.phone}</td>
            <td>{spouse.address}</td>
            <td>{spouse.city}</td>
            <td>{spouse.state}</td>
            <td>{spouse.zip}</td>
            <td>{spouse.occupation}</td>
            <td>{spouse.company}</td>
            <td>{spouse.complete}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-danger">Edit</button>
            </td>
        </tr>
    );
}

export default Spouse;