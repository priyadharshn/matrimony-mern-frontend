import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function BrideUsers() {
   const auth = localStorage.getItem('users');
   const navigate = useNavigate();
   const logout = () => {
      localStorage.clear();
      navigate('/home')
   }
   const bride = () => {
      navigate('/bride')
   }
   const message = () =>{
      navigate('/message')
   }
   const params = useParams();
   const [items, setRegisters] = useState([]);
   useEffect(() => {
      getmaleusers([]);
   }, []);
   const getmaleusers = async () => {
      let result = await fetch(`http://localhost:5000/getfemaleusers/${params.id}`);
      result = await result.json();
      setRegisters(result);
   }
   console.log(items);
   const onDeleteData = async () => {
      if (window.confirm("Are you sure remove your account? ")) {
         let response = await axios.delete(`http://localhost:5000/delfemaleusers/${params.id}`);
         if (response.status === 200) {
            alert("Accont Deleted..")
            bride()
         }
         else {
            alert("account Not Deleted..")
         }
      }
   }

   return (
      <div>
         <div>
            <nav className="navbar navbar-expand-md">
               <a className="navbar-brand" href='/welcome'>Matrimony.com</a>
               <form className="d-flex">
                  <input className="form-control me-3" type="text" placeholder="Search" />
               </form>
               <a className="nav-link" id="logout" onClick={logout}>LogOut</a>
            </nav>
         </div>
         <div>
            {
               items.map((item) => {
                  return (
                     <form className="container emp-profile" >
                        <div className="row">
                           <div className="col-md-4">
                              <div className="profile-img">
                                 <img src={item.Upload_Photo} alt="" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="profile-head">
                                 <h5>
                                    {item.First_Name}{item.Last_Name}
                                 </h5>
                                 <h6>
                                    {item.Profession}
                                 </h6>
                              </div>
                           </div>
                           <div className="col-md-8">
                              <div className="tab-content profile-tab" id="myTabContent">
                                 <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Name</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p> {item.First_Name}{item.Last_Name}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Email</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Email}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Phone</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Phone_Number}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Profession</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p> {item.Profession}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Date of Birth</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Birth_Date}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Age</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Age}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Religion</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Religion}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Height</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Height}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Weight</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{item.Weight}</p>
                                       </div>
                                    </div>
                                    <Button className="btn btn-dark" id="btn" type="button" onClick={message}>Message</Button>
                                    {/* <Link to={"/message/" + item._id}><button className="btn btn-dark" id="btn" type="button">Message</button></Link> */}
                                    <Link to={"/update/" + item._id}><button className="btn btn-dark" id="btn" type="button">Edit</button></Link>
                                    <Button className="btn btn-dark" id="btn" type="button" onClick={() => onDeleteData(item._id)}>Remove</Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  )
               })
            }
         </div>
      </div>
   );
}
export default BrideUsers;