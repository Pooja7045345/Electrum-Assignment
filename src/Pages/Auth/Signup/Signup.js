import React from 'react';
import FormComponent from './../Components/Form';

const Signup = () => {
  
    return (
        <div className='container-fluid mt-5'>
            <div className='row m-0 d-flex justify-content-center'>
                <div className='col-4 p-0'>
                <FormComponent PageType='signupPage' />
                </div>
           
            </div>
           
        </div>
    );
}

export default Signup;