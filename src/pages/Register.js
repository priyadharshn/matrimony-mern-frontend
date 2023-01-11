import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import validation from "../Validation/RegisterValidation";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const log = () => {
        navigate("/login");
    }
    const profile = () => {
        alert("Please Login...!!")
        navigate("/login")
    }
    const welcome=()=>{
        navigate('/')
    }
    const [First_Name, setFirstName] = useState('');
    const [Last_Name, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirm_Password, setConfirmPassword] = useState('');
    const [Phone_Number, setPhoneNumber] = useState('');
    const [Age, setAge] = useState('');
    const [Birth_Date, setBirthDate] = useState('');
    const [Gender, setGender] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [Religion, setReligion] = useState('');
    const [Profession, setProfession] = useState('');
    const [Upload_Photo, setUploadPhoto] = useState('');

    const reg_api = async (e) => {
        e.preventDefault();
        const users = new FormData();
        users.append("First_Name", First_Name);
        users.append("Last_Name", Last_Name);
        users.append("Email", Email);
        users.append("Password", Password);
        users.append("Confirm_Password", Confirm_Password);
        users.append("Phone_Number", Phone_Number);
        users.append("Gender", Gender);
        users.append("Age", Age);
        users.append("Birth_Date", Birth_Date);
        users.append("Height", Height);
        users.append("Weight", Weight);
        users.append("Profession", Profession);
        users.append("Religion", Religion);
        users.append("Upload_Photo", Upload_Photo);
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("Password", JSON.stringify(Password));
        localStorage.setItem("Confirm_Password", JSON.stringify(Confirm_Password));
        localStorage.setItem("Gender", JSON.stringify(Gender));
        try {
            const response = await axios.post('http://localhost:5000/registration', users)
            if (response.status == '200') {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setPhoneNumber('');
                setGender('');
                setAge('');
                setHeight('');
                setWeight('');
                setProfession('');
                setReligion('');
                setUploadPhoto('');
                alert("Register Successfully..!");
                log();
            }
        } catch (error) {
            if (error.response.data.status == '404')
                alert("not register");
        }
    }
    return (
    <div>
        <div>        
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand"  onClick={welcome}>Matrimony.com</a>
                <div className="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={profile}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="register">
            <div className="container align-items-center">
                <form className="form-horizontal" >
                    <h2 className="center">Registration</h2>
                    <div className="form-group">
                        <label for="firstName" className="col-sm-3 control-label">First Name</label>
                        <div className="col-sm-9">
                            <input type="text" id="firstName" name="First_Name" placeholder="First Name" className="form-control"
                                onChange={(e) => setFirstName(e.target.value)} value={
                                    First_Name}
                            />
                            {/* {errors.First_Name && <p style={{ color: "red", fontSize: "15px" }}>{errors.First_Name}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="lastName" className="col-sm-6 control-label">Last Name</label>
                        <div className="col-sm-9">
                            <input type="text" id="lastName" name="Last_Name" placeholder="Last Name" className="form-control"
                                onChange={(e) => setLastName(e.target.value)} value={Last_Name}
                            />
                            {/* {errors.Last_Name && <p style={{ color: "red", fontSize: "15px" }}>{errors.Last_Name}</p>} */}
                        </div>
                    </div>
                    <div className="form-group" controlId="formBasicEmail">
                        <label for="email" className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-9">
                            <input type="email" id="email" placeholder="Email" className="form-control" name="Email"
                                onChange={(e) => setEmail(e.target.value)} value={Email}
                            />
                            {/* {errors.Email && <p style={{ color: "red", fontSize: "15px" }}>{errors.Email}</p>} */}
                        </div>
                    </div>
                    <div className="form-group" controlId="formBasicPassword">
                        <label for="password" className="col-sm-3 control-label">Password</label>
                        <div className="col-sm-9">
                            <input type="password" id="password" name="Password" placeholder="Password" className="form-control"
                                onChange={(e) => setPassword(e.target.value)} value={Password}
                            />
                            {/* {errors.Password && <p style={{ color: "red", fontSize: "15px" }}>{errors.Password}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password" className="col-sm-3 control-label">Confirm Password</label>
                        <div className="col-sm-9">
                            <input type="password" id="password" name="Confirm_Password" placeholder="Password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)}
                                value={Confirm_Password}
                            />
                            {/* {errors.Confirm_Password && <p style={{ color: "red", fontSize: "15px" }}>{errors.Confirm_Password}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="BirthDate" className="col-sm-3 control-label">Date of Birth*</label>
                        <div className="col-sm-9">
                            <input type="date" id="birthDate" name="Birth_Date" className="form-control" value={Birth_Date} onChange={(e) => setBirthDate(e.target.value)}
                            />
                            {/* {errors.Birth_Date && <p style={{ color: "red", fontSize: "15px" }}>{errors.Birth_Date}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="phoneNumber" className="col-sm-3 control-label">Phone number </label>
                        <div className="col-sm-9">
                            <input type="phoneNumber" id="phoneNumber" name="Phone_Number" placeholder="Phone number" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)}
                                value={Phone_Number}
                            />
                            {/* {errors.Phone_Number && <p style={{ color: "red", fontSize: "15px" }}>{errors.Phone_Number}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="Height" className="col-sm-3 control-label">Height* </label>
                        <div className="col-sm-9">
                            <input type="number" id="height" name="Height" placeholder="Please write your height in centimetres" className="form-control"
                                onChange={(e) => setHeight(e.target.value)} value={Height}
                            />
                            {/* {errors.Height && <p style={{ color: "red", fontSize: "15px" }}>{errors.Height}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="weight" className="col-sm-3 control-label">Weight* </label>
                        <div className="col-sm-9">
                            <input type="number" id="weight" name="Weight" placeholder="Please write your weight in kilograms" className="form-control"
                                onChange={(e) => setWeight(e.target.value)} value={Weight}
                            />
                            {/* {errors.Weight && <p style={{ color: "red", fontSize: "15px" }}>{errors.Weight}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="weight" className="col-sm-3 control-label">Age </label>
                        <div className="col-sm-9">
                            <input type="number" id="weight" name="Age" placeholder="Please write your Age" className="form-control"
                                onChange={(e) => setAge(e.target.value)} value={Age}
                            />
                            {/* {errors.Age && <p style={{ color: "red", fontSize: "15px" }}>{errors.Age}</p>} */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="gender">Gender</label>
                        <select
                            id='gender'
                            className="form-select form-select-sm"
                            name="Gender"
                            value={Gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option selected hidden>--Select Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {/* {errors.Gender && <p style={{ color: "red", fontSize: "15px" }}>{errors.Gender}</p>} */}
                    </div>
                    <div className="form-group">
                        <label for="religion">Religion</label>
                        <select
                            id='religion'
                            className="form-select form-select-sm"
                            name="Religion"
                            value={Religion}
                            onChange={(e) => setReligion(e.target.value)}
                        >
                            <option selected hidden>--Select Religion--</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Mustlim">Mustlim</option>
                            <option value="Christian">Christian</option>
                        </select>
                        {/* {errors.Religion && <p style={{ color: "red", fontSize: "15px" }}>{errors.Religion}</p>} */}
                    </div>
                    <div className="form-group">

                        <label for="profession">Profession</label>
                        <select
                            id='profession'
                            className="form-select form-select-sm"
                            name="Profession"
                            value={Profession}
                            onChange={(e) => setProfession(e.target.value)}
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
                        {/* {errors.Profession && <p style={{ color: "red", fontSize: "15px" }}>{errors.Profession}</p>} */}
                    </div>
                    <div className="form-group">
                        <label for="formFile" className="col-sm-3 control-label">Upload Photo</label>
                        <div className="col-sm-9">
                            <input type="file" className="form-control" name="Upload_Photo" id="formFile" onChange={(e) => setUploadPhoto(e.target.files[0])}
                            />
                            {/* {errors.Upload_Photo && <p style={{ color: "red", fontSize: "15px" }}>{errors.Upload_Photo}</p>} */}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark" id='btns' onClick={reg_api}>Register</button>
                    <a role="button" href="/login">Go to Login</a>
                </form>
            </div>
        </div>
    </div>
    );
}
export default Register;























// const [data, setState] = useState({
//     First_Name: "", Last_Name: "", Email: "", Password: "", Confirm_Password: "", Birth_Date: "", Phone_Number: "", Height: "", Weight: "", Age: "", Gender: "",
//     Profession: "", Religion: "",
//     //  Upload_Photo:""
// })
// const [errors, setError] = useState({})
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...data, [name]: value, });
// };
// const reg_api = (e) => {
//     e.preventDefault()
//     setError(validation(data));
//     const userReg = fetch('http://localhost:5000/registration',{
//         method: 'POST',
//         withCredentials: true,
//         crossorigin: true,
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then((res) => {
//         console.log("post data", data);
//         console.log("users", res);
//         localStorage.setItem("users", JSON.stringify(data));
//     })
//     return userReg
// }
// useEffect(() => {
//     if (Object.keys(errors).length === 0 && (
//         First_Name !== "" && 
//     Last_Name !== "" && 
//     Email !== "" && 
//     Password !== "" && 
//     Confirm_Password !== "" && 
//     Birth_Date !== "" && 
//     Phone_Number !== "" && 
//     Height !== "" && 
//     Weight !== "" && 
//     Age !== "" && 
//     Gender !== "")) {
//         alert("Register Successfully...!!");
//         log();
//     }
// }, [errors])