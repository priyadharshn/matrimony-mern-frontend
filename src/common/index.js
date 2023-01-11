// export const baseurl="http://localhost:5000/groom_registration,http://localhost:5000/bride_registration";



// const reg_api=(userDetails,dispatch)=>{

//     const baseurl="http://localhost:5000/registration";
//         // e.preventDefault()

        
       
//         const userReg= {
//             method: 'POST',

//             // body:userDetails
//             body: json(userDetails)

//           };
//           fetch(baseurl,userReg)
//           .then((res)=>console.log("user",res));
          
    
        
---------------------------------------

{/* 
 
{/* <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'> 


    users.map((item) => { */}
{/* //       return (
//          <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//                <Card.Title>Name:{item.First_Name}{item.Last_Name}</Card.Title>
//                <Card.Title>Mobile:{item.Phone_Number}</Card.Title>
//                <Card.Title>Height:{item.Height}</Card.Title>
//                <Card.Title>Weight:{item.Weight}</Card.Title>
//                <Card.Title>Age:{item.Age}</Card.Title>
//                <Card.Text>
//                </Card.Text>
//                <Button variant="primary">Go somewhere</Button>
//                 <button className="btn btn-dark" type="button">Chat</button>
//                 <button className="btn btn-dark" type="button">Edit</button>


//             </Card.Body>
//          </Card>
//       )
//    })
// }


 </div>  */}

{/* //   <div className="bride">
//             <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

//                { */}
{/* //                   users.map((item) => { */}

{/* //                      return (

//                         <main class="grid">
//                            <article>
//                               <div class="text">
//                                  <h4 className='a'>Name:{item.First_Name}{item.Last_Name}</h4>
//                                  <h5 className='a'>Mobile:{item.Phone_Number}</h5>
//                                  <h5 className='a'>Height:{item.Height}</h5>
//                                  <h5 className='a'>Weight:{item.Weight}</h5>
//                                  <h5 className='a'>Age:{item.Age}</h5>
//                                  <button className="btn btn-dark" type="button">Chat</button>
//                                  <button className="btn btn-dark" onClick={Reg}>Edit</button>

//                               </div>
//                           </article>
//                          </main>
//                      )
//                   })
//                }
//             </div>
//             </div>  */}
======================================
<div>
{
         
         users.map((item)=> {
            
            return(
          
        <form>
       <div class="container emp-profile">
            {/* <div class="row"> */}
                {/* <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://cdn0.weddingwire.in/article/7496/original/1280/jpg/16947-indian-groom-wedding-dress-manyavar.jpeg" alt=""/>
                    </div>
                </div> */}
                <div class="col-md-6">
                    <div class="profile-head">
                                <h5>
                                   {item.First_Name}{item.Last_Name}
                                </h5>
                                {/* <h6>
                                    Web Developer and Designer
                                </h6> */}
                        
                    </div>
                </div>
            </div>
   
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p> {item.First_Name}{item.Last_Name}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{item.Email}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>{item.Phone_Number}</p>
                                        </div>
                                    </div>
                                    {/* <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div> */}
                        </div>

                        
                    </div>
                
         
            </div>
        </form> 

             
            )
         })
      }
</div>
