const Validation =(data)=>{
    let errors={}


    if(!data.First_Name){
        errors.First_Name="*First Name is Required"
    }
    else{
        // errors.Email="Email already Exists"
    }
     if(!data.Last_Name){
        errors.Last_Name="*Last Name Required"
    }
    else{
        // errors.Password="Password not match"
    }
    if(!data.Email){
        errors.Email="*Email is Required"
    }
    else{

    }
    if(!data.Password){
        errors.Password="*Password is Required"
    }
    else{

    }
    if(!data.Confirm_Password){
        errors.Confirm_Password="*Confirm Password is Required"
    }
    else{

    }
    if(!data.Birth_Date){
        errors.Birth_Date="*Birth Date is Required"
    }
    else{

    }
    if(!data.Phone_Number){
        errors.Phone_Number="*Phone Number is Required"
    }
   

    
    if(!data.Height){
        errors.Height="*Height is Required"
    }
    else{

    }
    if(!data.Weight){
        errors.Weight="*Weight is Required"
    }
    else{

    }

    if(!data.Age){
        errors.Age="*Age is Required"
    }else{

    }
    if(!data.Gender){
        errors.Gender="*Gender is Required"
    }
    else{
    }


    return errors;
    
}

export default Validation;