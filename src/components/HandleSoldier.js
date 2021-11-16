import React, {useEffect, useState} from 'react';
// import {useHistory, useNavigate} from 'react-router-dom';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {addNewSoldier, getSoldierById, updateSoldier} from "../services/SoldierService";

function HandleSoldier() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [soldierRank, setSoldierRank] = useState('');
    const [unit, setUnit] = useState('');
    const [dodId, setDodId] = useState('');
    const [married, setMarried] = useState();//do not assign boolean state for checkbox, otherwise, checkbox will not be checked upon render

    const navigate = useNavigate();
    // const history = useHistory();
    const {id} = useParams();

    function resetPage() {
        setFirstName('');
        setLastName('');
        setAge('');
        setDob('');
        setEmail('');
        setPhone('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setSoldierRank('');
        setUnit('');
        setDodId('');
        setMarried(true);
        navigate('/soldier');

    }

    function handleSubmit(e) {
        e.preventDefault()
        const newSoldier = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            dob: dob,
            email: email,
            phone: phone,
            address: address,
            city: city,
            state: state,
            zip: zip,
            soldierRank: soldierRank,
            unit: unit,
            dodId: dodId,
            married: married
        };
        console.log("soldier data object from react form after submit " + newSoldier); //soldier data object from react form after submit
        if(id > 0){
            updateSoldier(id, newSoldier).then((soldier)=>{
                console.log("Inside UpdateSoldier " + soldier.data) //soldier data object returned from backend API after post
                resetPage();
            }).catch((e)=>{
                console.error(e);
            })
        } else if(id === undefined){
            addNewSoldier(newSoldier).then((soldier)=>{
                console.log("Inside AddNewSoldier" + soldier.data) //soldier data object returned from backend API after post
                resetPage();
            }).catch(e => {
                alert(e.response.data.message);
                console.error(e);
            });
        }
    }

    useEffect(() => {
        if(id){
            getSoldierById(id).then((soldier)=>{
                console.log("Inside get by id: "+ soldier.data.id) //soldier data object returned from backend API after get by id
                setFirstName(soldier.data.firstName);
                setLastName(soldier.data.lastName);
                setAge(soldier.data.age);
                setDob(soldier.data.dob);
                setEmail(soldier.data.email);
                setPhone(soldier.data.phone);
                setAddress(soldier.data.address);
                setCity(soldier.data.city);
                setState(soldier.data.state);
                setZip(soldier.data.zip);
                setSoldierRank(soldier.data.soldierRank);
                setUnit(soldier.data.unit);
                setDodId(soldier.data.dodId);
                setMarried(soldier.data.married);
                console.log(soldier.data.married)
            }).catch(e => {
                console.error(e);
            });
        }

    }, []);

   let title = () => {
        if (!id) {
            return <h2 className="text-center">Add New Soldier</h2>
        } else {
            return <h2 className="text-center">Edit Soldier</h2>
        }
    }

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-check mb-2">
                                    <label htmlFor="married" className="form-check-label">Married</label>
                                    <input id="married" type="checkbox" name="married" value={married}
                                           className="form-check-input" defaultChecked={married}
                                           onChange={(e) => setMarried(e.target.checked)}/>
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">First Name</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"firstName"}
                                           placeholder="Enter First Name"
                                           value={firstName}
                                           onChange={e => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"lastName"}
                                           placeholder="Enter Last Name"
                                           value={lastName}
                                           onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"age"}
                                           placeholder="Enter Age"
                                           value={age}
                                           onChange={e => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">DoB</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"dob"}
                                           placeholder="Enter Date of Birth"
                                           value={dob}
                                           onChange={e => setDob(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"email"}
                                           placeholder="Enter Email"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Phone</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"phone"}
                                           placeholder="Enter Phone"
                                           value={phone}
                                           onChange={e => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Street Address</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"address"}
                                           placeholder="Enter Street Address"
                                           value={address}
                                           onChange={e => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">City</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"city"}
                                           placeholder="Enter City"
                                           value={city}
                                           onChange={e => setCity(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">State</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"state"}
                                           placeholder="Enter State"
                                           value={state}
                                           onChange={e => setState(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Zip Code</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"zip"}
                                           placeholder="Enter Zip Code"
                                           value={zip}
                                           onChange={e => setZip(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Rank</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"rank"}
                                           placeholder="Enter Rank"
                                           value={soldierRank}
                                           onChange={e => setSoldierRank(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">Unit</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"unit"}
                                           placeholder="Enter Unit"
                                           value={unit}
                                           onChange={e => setUnit(e.target.value)}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-sm">DoDID</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Small"
                                           aria-describedby="inputGroup-sizing-sm"
                                           name={"dodId"}
                                           placeholder="Enter Unit"
                                           value={dodId}
                                           onChange={e => setDodId(e.target.value)}
                                    />
                                </div>

                                <button className="btn btn-success" onClick={(e) => handleSubmit(e)}> Submit</button>
                                <span> </span>
                                <Link to="/soldier" className="btn btn-danger"> Cancel</Link>
                                <span> </span>
                                {(
                                    (married && id)?
                                        <Link to="/add-spouse" className="btn btn-success"> Add / Edit Spouse</Link>
                                        :""

                                )}
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default HandleSoldier;
