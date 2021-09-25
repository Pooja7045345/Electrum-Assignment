import React from 'react';
import FormComponent from '../Components/Form';
// import LoginImage from "./../../../Utils/Images/online-study 1.svg";
const Login = ({setIsAuthenticated}) => {

    return (
        <div className='container-fluid mt-5'>
            <div className='row m-0 d-flex justify-content-center'>
                <div className='col-4 p-0'>
                <FormComponent PageType='loginPage' setIsAuthenticated={setIsAuthenticated} />
                </div>
           
            </div>
           
        </div>
    );
}

export default Login;