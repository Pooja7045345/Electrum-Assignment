import React, { useState } from 'react';
import { PostRequest } from './../DashboardHandler';
function AddUserPopup(props) {


    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [avtar, setAvtar] = useState('');

    const addUser = async (e) => {
        e.preventDefault();
        let data = {
            first_name: firstName,
            last_name: lastName,
            avatar: avtar
        }
        let result = await PostRequest('https://reqres.in/api/users', data);
        if (result.id !== '') {
            alert('User Added Successfully');
            close();
        }
    }

    const close = () => {
        document.getElementById('addpostpopup').style.display = 'none';
        setLastName('');
        setFirstName('');
        document.getElementById('file').value = '';

    }
    return (
        <div className='containerPopup' id='addpostpopup'>

            <form className='adduserPop' onSubmit={addUser}>
                <div className='btn btn-danger float-right' onClick={close} style={{
                    marginTop: '-30px'
                }}>
                    X
            </div>
                <div className="form-group text-left">
                    <label className='formLable'>First name</label>
                    <input type="text" className="form-control loginForm" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="" placeholder="First name" />

                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Last name</label>
                    <input type="text" className="form-control loginForm" value={lastName} onChange={(e) => setLastName(e.target.value)} id="" placeholder="Last name" />

                </div>
                <div className="form-group text-left">
                    <label className='formLable'>Avatar</label>
                    <input type="file" id='file' className="form-control loginForm" onChange={(e) => setAvtar(e.target.value)} />

                </div>

                <button disabled={firstName !== '' || lastName !== '' || avtar !== '' ? false : true } type='submit' className='btn bg-white loginBtn mt-3'>
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddUserPopup;