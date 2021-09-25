import React, { useState, useEffect } from 'react';
import './../Auth.css';
import Saperator from "./Saperator";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayValidEmail, setDisplayValidEmail] = useState(true);
    const [anyFieldEmpty, setAnyFieldEmpty] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    let history = useHistory();
    const signUpUser = (e) => {
        e.preventDefault();
        let allSignupUsers = JSON.parse(localStorage.getItem('SignUpUserDetails'));
        if (password !== confirmPassword) {
            setPasswordMatch(true);
        } else {
            if(allSignupUsers !== null){
                allSignupUsers.map((val)=>{
                   if(val.email === email || val.username === username){
                       alert('User Alerady Exists');
                   }else{
                    signupProcess();
                   }
                });

            }else{
                signupProcess();
            }
            
        }

    }
    const signupProcess = () =>{
        let item = {
            id: Math.round(Math.random() * 10000000),
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword
        }
        if(localStorage.getItem('SignUpUserDetails') === null) {
            localStorage.setItem('SignUpUserDetails', JSON.stringify([item]));
        } else {
            let previous_array = JSON.parse(localStorage.getItem('SignUpUserDetails'));
            previous_array.push(item);
            localStorage.setItem('SignUpUserDetails' , JSON.stringify(previous_array))
        }
        history.push('/login')
    }
    const validateEmail = () => {
        if (email !== '') {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.match(filter)) {
                setDisplayValidEmail(true);
            } else {
                setDisplayValidEmail(false);
            }
        } else {
            setAnyFieldEmpty(true);
        }


    }

    useEffect(() => {
        if (firstName === '' || lastName === '' || username === '' || password === '' || confirmPassword === '') {
            setAnyFieldEmpty(true);
        } else {
            setAnyFieldEmpty(false);
        }

    }, [firstName, lastName, username, password, confirmPassword]);

    return (
        <div className="text-center textWhite formCenter" id='signup'>
            <h3 className="pt-3"> Sign up </h3>
            <form onSubmit={signUpUser}>
                <div className="form-group text-left">
                    <label className='formLable'>First name</label>
                    <input type="text" className="form-control loginForm" onChange={(e) => setFirstName(e.target.value)} id="" placeholder="First name" />

                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Last name</label>
                    <input type="text" className="form-control loginForm" onChange={(e) => setLastName(e.target.value)} id="" placeholder="Last name" />

                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Username</label>
                    <input type="text" className="form-control loginForm" onChange={(e) => setUsername(e.target.value)} id="" placeholder="Username" />

                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Email</label>
                    <input type="email" className="form-control loginForm" onChange={(e) => setEmail(e.target.value)} id="" onBlur={validateEmail} placeholder="Email" />
                    {
                        displayValidEmail === false ? <p className='text-danger'> <small> Invalid Email formate!</small></p> : ''
                    }
                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Password</label>
                    <input type="password" className="form-control loginForm" onChange={(e) => setPassword(e.target.value)} id="" placeholder="Password" />
                    {
                        passwordMatch === true ? <p className='text-danger'> <small> Passwords does not match!</small></p> : ''
                    }
                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Confirm password </label>
                    <input type="password" className="form-control loginForm" onChange={(e) => setConfirmPassword(e.target.value)} id="" placeholder="Confirm password " />

                </div>
                <button type='submit' disabled={anyFieldEmpty === true ? true : false} className='btn bg-white loginBtn w-100 mt-3'>
                    Sign up
                </button>
            </form>
            <Saperator />
            <Link to='/login' className='textDecoration'>
                <p className='text-white'>Already have account?</p>
            </Link>

        </div>
    );
}

export default SignupForm;