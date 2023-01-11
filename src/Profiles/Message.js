import  { useEffect, useState } from 'react';
// import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Message(){
   const navigate = useNavigate();
   const logout = () => {
      localStorage.clear();
      navigate('/home')
   }
   const [Email, setEmail] = useState('');
   const [Message, setMessage] = useState('');
   const msg_api = async (e) => {
      e.preventDefault();
      const users = new FormData();
      users.append("Email", Email);
      users.append("Message",Message);
      localStorage.setItem("Email", JSON.stringify(Email));
      localStorage.setItem("Message", JSON.stringify(Message));
      try {
          const response = await axios.post('http://localhost:5000/msg/msg', users)
          if (response.status == '200') {
            console.log(users)
              setEmail('');
              setMessage('');
              alert("Sent Successfully..!");
          }
      } catch (error) {
          if (error.response.data.status == '404')
              alert("not success");
      }
  }
   return (
      <div>
      <div>
      <nav className="navbar navbar-expand-md">
         <a className="navbar-brand" href='/welcome'>Matrimony.com</a>
         <form className="d-flex">
         </form>
         <a className="nav-link" id="logout" onClick={logout}>LogOut</a>
      </nav>
   </div>
      <div>
         <div className="container" id="container">
            <div className="card mt-5">
               <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
                  <i className="fas fa-chevron-left"></i>
                  <span className="pb-3"  id="msg">Messenger</span>
                  <i className="fas fa-times"></i>
               </div>
                  <input type="text" className="form-control" id="int" placeholder="Sender/Receiver" name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} required/>
               <div className="d-flex flex-row p-3">
                  <div className="chat ml-2 p-3"></div>
               </div>
               <div className="d-flex flex-row p-3">
                  <div className=" mr-2 p-3"><span className="text-muted"></span></div>
               </div>
               <div className="d-flex flex-row p-3">
                  <div className="chat ml-2 p-3"><span className="text-muted dot"></span></div>
               </div>
               <div className="form-group px-4">
                  <textarea className="form-control" rows="5" placeholder="Type Your Message../Receive Message" name='Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
                  <button className="btn btn-dark" id="bts" onClick={msg_api}>Send</button>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
}
export default Message;











// //    <div>
//       //       <form className="features">
//       //          <h2 className="color">Send Message</h2>
//       //          <div className="col-lg-4 col-md-4 col-sm-12">
//       //             <div className="form-group">
//       //                <input type="text" className="form-control" id='width' placeholder="Name" name="" />
//       //             </div>
//       //             <div className="form-group">
//       //                <input type="email" className="form-control" id='width' placeholder="Email Address" name="email" />
//       //             </div>
//       //             <div className="form-group">
//       //                <textarea className="form-control" placeholder="Your Message/ Receive Message" id='width' rows="4"></textarea>
//       //             </div>
//       //             <input type="submit" className="btn btn-dark" id="btnss" value="Send" name="" />
//       //          </div>
//       //       </form>
//       //    </div>
// =====================================================
//    const [message, setMessage]=useState("");
//    const [messageReceive, setMessageReceive]=useState("");
// const sendMsg=()=>{
//  socket.emit("send_message", {message: message});
// };
// useEffect(()=>{
// socket.on("receive_message", (data)=>{
//    setMessageReceive(data.message);
//    alert(data.message);
// })
// },[socket])
// const socket = io.connect("http://localhost:5000");
// import io from 'socket.io-client';
// const [data, setData] = useState([]);

// useEffect(() => {
//   localStorage.setItem('dataKey', JSON.stringify(data));
// }, [data]);