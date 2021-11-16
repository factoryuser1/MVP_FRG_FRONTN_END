import React from 'react';
import {Link} from "react-router-dom";

function Soldier({soldier, handleDelete}) {


    const handleLocalDelete = (id) => {
        handleDelete(id);
    };
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
            <td>{soldier.married?"Yes": "No"}<button className="btn btn-outline-info">{soldier.married?"Edit": "Add"}</button>
            </td>

            <td>
                <div className="btn-group">
                <Link className="btn btn-info" to={`/edit-soldier/${soldier.id}`}>Edit</Link>
                <button className="btn btn-info" onClick={()=>handleLocalDelete(soldier.id)}>Delete</button>

                {/*<button className="btn btn-danger">Delete</button>*/}
                </div>
            </td>
        </tr>
    );
}

export default Soldier;