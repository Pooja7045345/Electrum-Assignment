import React from 'react';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';

const Form = ({ PageType , setIsAuthenticated }) => {
    return (
        <div className='FormContainerColor'>
 
            {
                PageType === 'loginPage'
                    ?
                    <LoginForm setIsAuthenticated={setIsAuthenticated} />
                    :
                   
                <SignupForm />
            }

        </div>
    );
}

export default Form;