const Validation =(user)=>{
    let errors={}


    if(!user.Email){
        errors.Email="Email Required"
    }
    else{
        // errors.Email="Email not match"
    }
     if(!user.Password){
        errors.Password="Password Required"
    }
    else{
        // errors.Password="Password not match"
    }
    return errors;
    
}
export default Validation;