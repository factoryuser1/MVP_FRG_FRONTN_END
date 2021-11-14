import React, {useEffect, useState} from 'react'
import axios from "axios";
import Spouse from "./Spouse";

const Spouses = () => {
    const [spouses, setSpouses] = useState([]);
    // const SOLDIER_URL = "localhost:8080/api/frg/spouse";
    const SPOUSE_URL_WITH_PROXY = "/api/frg/spouse";

    useEffect(() => {
        getAllSpouses()
    }, []);

    const getAllSpouses = () => {
        axios.get(SPOUSE_URL_WITH_PROXY).then((result) => {
            if (result.status === 200) {
                console.log("SUCCESS: Spouses List Returned!")
                setSpouses(result.data)
                console.log(result.statusText)
            } else {
                console.log("ERROR: Spouses List is Empty!!")
                setSpouses([])
                console.log(result.statusText)
            }
        }).catch(e => {
            console.error(e);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">Alpha Company FRG- Spouses List</h2>

            <a href="/add-spouse" className="btn btn-primary mb-2" role="button">Add New Spouse</a>
            <span> </span>
            <a href="/soldier" className="btn btn-primary mb-2" role="button">Display Soldiers List</a>

            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone #</th>
                    <th>Home Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Occupation</th>
                    <th>Company</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {
                    spouses.map((spouse) => {
                            return (
                                <Spouse
                                    key={spouse.id}
                                    spouse={spouse}
                                />
                            )
                        }
                    )
                }

                </tbody>
            </table>

        </div>
    );
}

export default Spouses;