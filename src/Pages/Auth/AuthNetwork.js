const login = (email , password) =>{
    if(email !== ""){
        if (password !== '') {
        console.log("Login Page------------>");
        console.log("email" , email);
        console.log("password" , password);
       
         }else{
             alert('Empty Password Filed!');
         }
    }else{
        alert('Email can not be empty!');
    }  
} 

const GroupIndicator = (indicate) =>{
    if(indicate !== ''){
        console.log("indicate" , indicate);
        setTimeout(()=>{
            window.location.href = '/sing-up-details'
        },4000);
    }else{
        alert('Please Indicate Your User Group!');
    }

}

export {
    login,
    GroupIndicator,
  
}