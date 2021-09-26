import React, { useState, useEffect } from 'react';
import Saperator from "./Saperator";
import { Link } from "react-router-dom";

const LoginForm = ({setIsAuthenticated}) => {
    const [anyFieldEmpty, setAnyFieldEmpty] = useState(false);
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = (e) => {
        e.preventDefault();
        let allSignupUsers = JSON.parse(localStorage.getItem('SignUpUserDetails'));
        if (allSignupUsers === null) {
            alert('No User Found!');
        } else {
            let foundOrNot = getUsers();
            if (foundOrNot === true) {
                setIsAuthenticated(true);
                localStorage.setItem('loginStatus', 'userLogin');
                // history.push('/dashboard')
            } else {
                if (foundOrNot === 'passwordDidNotMatch') {
                    alert('Username or password incorrect!')
                } else {
                    alert('User not found!')
                }
            }

        }
    }
    const getUsers = () => {
        let found_token = false;
        let allSignupUsers = JSON.parse(localStorage.getItem('SignUpUserDetails'));
        allSignupUsers.map((val) => {
            if (val.email === emailOrUsername || val.username === emailOrUsername) {
                if (val.password === password) {
                    localStorage.setItem('loggedUser' , val.username);
                    found_token = true;
                } else {
                    found_token = 'passwordDidNotMatch';
                }

            }
        });
        return found_token;
    }
    useEffect(() => {
        if (emailOrUsername === '' || password === '') {
            setAnyFieldEmpty(true);
        } else {
            setAnyFieldEmpty(false);
        }

    }, [emailOrUsername, password]);

    return (
        <div>
            <h2 className='text-center text-white pt-5 pb-4'>
                LOGIN
            </h2>
            <form className='form' onSubmit={loginUser}>
                <div className="form-group">
                    <label className='formLable'>Username/Email</label>
                    <input type="text" className="form-control loginForm" onChange={(e) => setEmailOrUsername(e.target.value)} id="" placeholder="Username/Email" />
                </div>
                <div className="form-group">
                    <label className='formLable'>Password</label>
                    <input type="password" className="form-control loginForm" onChange={(e) => setPassword(e.target.value)} id="" placeholder="**********" />

                </div>
                <div className='row ml-0 mr-0  mb-4'>
                    <div className="form-group form-check col-12 p-0">
                        <p className='ForgotPass'>
                            Forgot password?
                        </p>
                    </div>
                </div>

                <button type='submit' disabled={anyFieldEmpty === true ? true : false} className="btn bg-white loginBtn w-100 mt-3">Login</button>
                <Saperator />
                <div className='text-center pb-5'>
                    <Link to="/" >
                        <small className='text-white '>Don't have an account yet? Sign up here</small>
                    </Link>
                </div>
            </form>


        </div>
    );
}

export default LoginForm;