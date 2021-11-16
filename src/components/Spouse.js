import React from 'react';
import {Link} from "react-router-dom";

function Spouse({spouse, handleDelete}) {

    const handleLocalDelete = (id) => {
        handleDelete(id);
    };
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
            <td>{spouse.complete?"Yes":"No"}</td>
            <td>
                <div className="btn-group">
                <Link className="btn btn-outline-info" to={`/edit-spouse/${spouse.id}`}>Edit</Link>
                <button className="btn btn-info" onClick={()=>handleLocalDelete(spouse.id)}>Delete</button>
                </div>

            </td>
        </tr>
    );
}

export default Spouse;