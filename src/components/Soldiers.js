import React, {useEffect, useState} from 'react'
import axios from "axios";
import Soldier from "./Soldier";
import {Route} from "react-router-dom";

const Soldiers = () => {
    const [soldiers, setSoldiers] = useState([]);
    const SOLDIER_URL = "localhost:8080/api/frg/soldier";
    const SOLDIER_URL_WITH_PROXY = "/api/frg/soldier";

    useEffect(() => {
        getAllSoldiers()
    }, []);

    const getAllSoldiers = () => {
        axios.get(SOLDIER_URL_WITH_PROXY).then((result) => {
            if (result.status === 200) {
                console.log("SUCCESS: Soldiers List Returned!")
                setSoldiers(result.data)
                console.log(result.statusText)
            } else {
                console.log("ERROR: Soldiers List is Empty!!")
                setSoldiers([])
                console.log(result.statusText)
            }
        }).catch(e => {
            console.error(e);
        });
    }
    const handleAdd = async (soldier) => {
        await axios.post(SOLDIER_URL_WITH_PROXY, soldier);
        // await axios.post(SOLDIER_URL, soldier);
        getAllSoldiers();
    }

    const handleUpdate = async (soldier) => {
        await axios.patch(`${SOLDIER_URL_WITH_PROXY}/${soldier.id}`);
        // await axios.patch(`${SOLDIER_URL}/${soldier.id}`);
        getAllSoldiers();
    }
    const handleDelete = async (soldier) => {
        await axios.delete(`${SOLDIER_URL_WITH_PROXY}/${soldier.id}`)
        // await axios.delete(`${SOLDIER_URL}/${soldier.id}`)
        getAllSoldiers();
    }

    const handleGetById = async (soldier) => {
        await axios.get(`${SOLDIER_URL_WITH_PROXY}/${soldier.id}`)
        // await axios.get(`${SOLDIER_URL}/${soldier.id}`)
    }

    const handleGetByFNameAndLName = async (soldier) => {
        await axios.get(`${SOLDIER_URL_WITH_PROXY}/${soldier.firstName}&${soldier.last_name}`)
        // await axios.get(`${SOLDIER_URL}/${soldier.firstName}&${soldier.last_name}`)
    }

    return (
        <div className="container">
            <h2 className="text-center">Alpha Company FRG- Soldiers List</h2>
            <a href="/add-soldier" className="btn btn-primary mb-2" role="button">Add New Soldier</a>
            <span> </span>
            <a href="/spouse" className="btn btn-primary mb-2" role="button">Display Spouses List</a>

            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Phone #</th>
                    <th>Home Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Rank</th>
                    <th>Unit</th>
                    <th>DoDID</th>
                    <th>Married</th>
                </tr>
                </thead>
                <tbody>
                {
                    soldiers.map((soldier) => {
                        return (
                            <Soldier
                                key={soldier.id}
                                soldier={soldier}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
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

export default Soldiers;