import React, {useEffect, useState} from 'react'
import axios from "axios";
import Soldier from "./Soldier";
import {Route} from "react-router-dom";
import {getSoldiers, addNewSoldier, updateSoldier,
    deleteSoldier, getSoldierById, getSoldierByEmail}
    from "../services/SoldierService";

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
    const handleDelete = async (id) => {
        await deleteSoldier(id);
        getAllSoldiers();
    }
    const handleAdd = async (soldier) => {
        await addNewSoldier(soldier);
        getAllSoldiers();
    }
    const handleUpdate = async (soldier) => {
        await updateSoldier(soldier)
        getAllSoldiers();
    }
    const handleGetById = async (soldier) => {
        await getSoldierById(soldier);
    }
    const handleGetByEmail = async (soldier) => {
        await getSoldierByEmail(soldier)
    }

    return (
        <div className="container">
            <h2 className="text-center">Alpha Company FRG- Soldiers List</h2>
            <a href="/add-soldier" className="btn btn-primary mb-2" role="button">Add New Soldier</a>
            <span> </span>
            <a href="/spouse" className="btn btn-primary mb-2" role="button">Display Spouses List</a>
            <span> </span>
            <a href="/add-soldier" className="btn btn-outline-info mb-2" role="button">Search Soldier</a>
            <span> </span>
            <a href="/soldier" className="btn btn-outline-info mb-2" role="button">Export MS Excel</a>
            <span> </span>
            <a href="/soldier" className="btn btn-outline-info mb-2" role="button">Generate Mass Email</a>

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
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    (soldiers.constructor==[].constructor) && soldiers.map((soldier) => {
                        return (
                            <Soldier
                                key={soldier.id}
                                soldier={soldier}
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