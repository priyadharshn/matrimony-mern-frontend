import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

function Bride() {
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
         [profileVisible, setProfileVisible] = useState(false),
         [messageVisible, setmessageVisible] = useState(false);
   const [search, setSearch] = useState("");
   useEffect(() => {
      getRegisters();
   }, []);
   const getRegisters = async () => {
      let result = await fetch('http://localhost:5000/getfemaleusers');
      result = await result.json();
      setRegisters(result);
   }
   console.log(users);

   return (
      <div >
         <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="/Welcome">Matrimony.com</a>
            <form className="d-flex">
               <input className="form-control me-3" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
               {/* <button className="btn btn-outline-warning" type="button" >Search</button> */}
            </form>
            <a className="nav-link" id="logout"  onClick={logout}>LogOut</a>
         </nav>
         <div>
            {
               users.filter((item) => {
                  return search.toLowerCase() === ""
                     ? item
                     : item.Profession.toLowerCase().includes(search);
               })
                  .map((item) => {
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
                                             <label>Profession</label>
                                          </div>
                                          <div className="col-md-6">
                                             <p>{item.Profession}</p>
                                          </div>
                                          <div className="row">
                                         
                                       </div>
                                       <Link to={"/viewbride/"+item._id}><button  className="btn btn-dark" id="btn" type="button">view</button></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     )
                  })
            }
         </div>
      </div >
   );
}
export default Bride;










/* 
          <div className='brides'>
         {
               users.map((item) =>
                  <ul key={item}>
                     <li>{item.First_Name}</li> 
                     <li>{item.Last_Name}</li>
                     <li>{item.Email}</li>
                     <li>Birth_Date</li>
                     <li>{item.Phone_Number}</li>
                     <li>{item.Gender}</li>
                     <li>{item.Age}</li>
                     <li>{item.Height}</li>
                     <li>{item.Weight}</li>
                  </ul>
               )
            } */
/* <div className="bride"> 
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {
            users.map((item)=> {
               return(
             <main className="grid">
                        <article>
                           <div className="text">                         
                              <h4 className='a'>Name:{item.First_Name}{item.Last_Name}</h4>
                              <h5 className='a'>Mobile:{item.Phone_Number}</h5>
                              <h5 className='a'>Height:{item.Height}</h5>
                              <h5 className='a'>Weight:{item.Weight}</h5>
                              <h5 className='a'>Age:{item.Age}</h5>
                              <button className="btn btn-dark" type="button">Chat</button>
                              <button className="btn btn-dark">Edit</button>
                           </div>
                        </article>
                     </main>
               )
            })
         }
</div>
         </div>     */
         {/* <button className="btn btn-dark" id="btn" type="button" onClick={message}>Message</button> */}
         {/* <button className="btn btn-dark" id="btn" type="button" onClick={() =>setProfileVisible(true)}>View</button> */}
         {/* <a className="btn btn-dark" id="btn" type="button">Edit</a> */}
   