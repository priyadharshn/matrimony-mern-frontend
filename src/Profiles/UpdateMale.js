import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateMale = () => {
    const navigate = useNavigate();
    const update = () => {
        navigate("/groom");
    }
    const [First_Name, setFirstName] = React.useState("");
    const [Last_Name, setLastName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phone_Number, setPhoneNumber] = React.useState("");
    const [Age, setAge] = React.useState("");
    const [Gender, setGender] = React.useState("");
    const [Height, setHeight] = React.useState("");
    const [Weight, setWeight] = React.useState("");
    const [Religion, setReligion] = React.useState("");
    const [Profession, setProfession] = React.useState("");
    const [Upload_Photo, setUploadPhoto] = React.useState("");
    const params = useParams();
    useEffect(() => {
        getUsers();
    },[])
    const getUsers = async () => {
        console.log(params);
        let result = await fetch(`http://localhost:5000/getusers/${params.id}`);
        result = await result.json();
        setFirstName(result.First_Name);
        setLastName(result.Last_Name);
        setEmail(result.Email);
        setPhoneNumber(result.Phone_Number);
        setAge(result.Age);
        setGender(result.Gender);
        setHeight(result.Height);
        setWeight(result.Weight);
        setReligion(result.Religion);
        setProfession(result.Profession);
        setUploadPhoto(result.Upload_Photo);
        console.log(result);
    }
    const updateUsers = async(e) => {
    e.preventDefault();
    const users=new FormData();
    users.append("First_Name",First_Name);
    users.append("Last_Name",Last_Name);
    users.append("Email",Email);
    users.append("Phone_Number",Phone_Number);
    users.append("Gender",Gender);
    users.append("Age",Age);
    users.append("Height",Height);
    users.append("Weight",Weight);
    users.append("Profession",Profession);
    users.append("Religion",Religion);
    users.append("Upload_Photo",Upload_Photo);
    try{
        const response=await axios.put(`http://localhost:5000/update/${params.id}`,users)
        if(response.status == '200'){
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setGender('');
            setAge('');
            setHeight('');
            setWeight('');
            setProfession('');
            setReligion('');
            setUploadPhoto('');
            alert("update Successfully..!");
            update();
        }
    }catch(error){
        if(error.response.data.status =='404')
        alert("not update");
    }
}
    return (
        <div>
          <div>
            <nav className="navbar navbar-expand-md">
               <a className="navbar-brand" href='/welcome'>Matrimony.com</a>
               <form className="d-flex">
               </form>
               <a className="nav-link" id="logout">LogOut</a>
            </nav>
         </div>
        <div className="align">
        <div className="container align-items-center">
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">First Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName" name="First_Name" placeholder="First Name" className="form-control" value={First_Name} onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="lastName" className="col-sm-6 control-label">Last Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="lastName" name="Last_Name" placeholder="Last Name" className="form-control" value={Last_Name}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group" controlId="formBasicEmail">
                    <label for="email" className="col-sm-3 control-label">Email</label>
                    <div className="col-sm-9">
                        <input type="email" id="email" placeholder="Email" className="form-control" name="Email" value={Email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </div>
               
                <div className="form-group">
                    <label for="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                    <div className="col-sm-9">
                        <input type="phoneNumber" id="phoneNumber" name="Phone_Number" placeholder="Phone number" className="form-control" value={Phone_Number}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="Height" className="col-sm-3 control-label">Height* </label>
                    <div className="col-sm-9">
                        <input type="number" id="height" name="Height" placeholder="Please write your height in centimetres" className="form-control" value={Height}
                            onChange={(e) => { setHeight(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="weight" className="col-sm-3 control-label">Weight* </label>
                    <div className="col-sm-9">
                        <input type="number" id="weight" name="Weight" placeholder="Please write your weight in kilograms" className="form-control" value={Weight}
                            onChange={(e) => { setWeight(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="weight" className="col-sm-3 control-label">Age </label>
                    <div className="col-sm-9">
                        <input type="number" id="age" name="Age" placeholder="Please write your Age" className="form-control" value={Age}
                            onChange={(e) => { setAge(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="gender">Gender</label>
                    <select
                        id='gender'
                        className="form-select form-select-sm"
                        name="Gender"
                        value={Gender}
                        onChange={(e) => { setGender(e.target.value) }}
                    >
                        <option selected hidden>--Select Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="religion">Religion</label>
                    <select
                        id='religion'
                        className="form-select form-select-sm"
                        name="Religion"
                        value={Religion}
                        onChange={(e) => { setReligion(e.target.value) }}
                    >
                        <option selected hidden>--Select Religion--</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Mustlim">Mustlim</option>
                        <option value="Christian">Christian</option>
                    </select>
                </div>
                <div className="form-group">

                    <label for="rofession">Profession</label>
                    <select
                        id='profession'
                        className="form-select form-select-sm"
                        name="Profession"
                        value={Profession}
                        onChange={(e) => { setProfession(e.target.value) }}
                    >
                        <option selected hidden>--Select Profession--</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Fashion Industry">Fashion Industry</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Lecturer">Lecturer</option>
                        <option value="Financial Manager">Financial Manager</option>
                        <option value="Medical and Health Services Manager">Medical and Health Services Manager</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Entertainment Industry">Entertainment Industry</option>
                        <option value="Designer">Designer</option>
                        <option value="Hotel Management">Hotel Management</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="formFile" className="col-sm-3 control-label">Upload Photo</label>
                    <div className="col-sm-9">
                        <input type="file" className="form-control" name="Upload_Photo" id="formFile"  onChange={(e) => setUploadPhoto(e.target.files[0])}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" id='btns' onClick={updateUsers}>Update</button>
            </form>
        </div>
     </div>
     </div>
    )
}
export default UpdateMale;

