import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Groom() {
   const auth = localStorage.getItem('users');
   const navigate = useNavigate();
   const logout = () => {
      localStorage.clear();
      navigate('/home')
   }
   const navigates = useNavigate();
   const message = () => {
      navigates("/message");
   }
   const [users, setRegisters] = useState([]),
      [messageVisible, setmessageVisible] = useState(false),
      [profileVisible, setProfileVisible] = useState(false);
   const [search, setSearch] = useState("");
   useEffect(() => {
      getRegisters([]);
   }, []);
   const getRegisters = async () => {
      let result = await fetch('http://localhost:5000/getmaleusers');
      result = await result.json();
      setRegisters(result);
   }
   console.log(users);

   return (
      <div>
         <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href='/welcome'>Matrimony.com</a>
            <form className="d-flex">
               <input className="form-control me-3" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
               {/* <button className="btn btn-outline-warning" type="button">Search</button> */}
            </form>
            <a className="nav-link" id="logout" onClick={logout}>LogOut</a>
         </nav>
         <form>
            {
               users.filter((user) => {
                  return search.toLowerCase() === ""
                     ? user
                     : user.Profession.toLowerCase().includes(search);

               }).map((user) => {
                  return (
                     <form className="container emp-profile" >
                        <div className="row">
                           <div className="col-md-4">
                              <div className="profile-img">
                                 <img src={user.Upload_Photo} alt="" />
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="profile-head">
                                 <h5>
                                    {user.First_Name}{user.Last_Name}
                                 </h5>
                                 <h6>
                                    {user.Profession}
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
                                          <p> {user.First_Name}{user.Last_Name}</p>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Email</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{user.Email}</p>
                                       </div>
                                    </div>

                                    <div className="row">
                                       <div className="col-md-6">
                                          <label>Profession</label>
                                       </div>
                                       <div className="col-md-6">
                                          <p>{user.Profession}</p>
                                       </div>
                                       <Link to={"/viewgroom/" + user._id} className="btn btn-dark" id="btn" type="button" aria-hidden="true" >View</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  )
               })
            }
         </form>
      </div>
   );
}
export default Groom;








// {
//    messageVisible && (
//       <div>
//          <form className="features">
//             <div className="col-lg-4 col-md-4 col-sm-12">
//                <div className="form-group">
//                   <input type="text" className="form-control" id='width' placeholder="Name" name="Name" />
//                </div>
//                <div class="form-group">
//                   <input type="email" className="form-control" id='width' placeholder="Email Address" name="Email" />
//                </div>
//                <div class="form-group">
//                   <textarea className="form-control" placeholder="Your Message/Receive Message" id='width' rows="4"></textarea>
//                </div>
//                <input type="submit" className="btn btn-dark" id="btnss" value="Send" name="Msg" />
//             </div>
//          </form>
//       </div>
//    )
// }   <button className="btn btn-dark" id="btn" type="button">Message</button> 
//    <button className="btn btn-dark" id="btn" >Hide</button>