import React, { useState  , useEffect} from 'react';
import { UpdateRequest } from './../DashboardHandler';
function EditUser({singleUser}) {
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avtar, setAvtar] = useState('');
    useEffect(()=>{
        setFirstName(singleUser.first_name);
        setLastName(singleUser.last_name);
    },[singleUser]);
    const editUser = async (e) => {
        e.preventDefault();
        let data = {
            first_name: firstName,
            last_name: lastName,
            avatar: avtar
        }
        let result = await UpdateRequest('https://reqres.in/api/users/' + singleUser.id , data);
        if (result.id !== '') {
            alert('User Edited Successfully');
            close();
        }
    }

    const close = () => {
        document.getElementById('editpostpopup').style.display = 'none';
        setLastName('');
        setFirstName('');
        document.getElementById('file').value = '';
    }
    return (
        <div className='containerPopup' id='editpostpopup'>

            <form className='adduserPop' onSubmit={editUser}>
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

                <button  type='submit' className='btn bg-white loginBtn mt-3'>
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditUser;