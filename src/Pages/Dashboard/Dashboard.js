import React, { useState } from 'react';
import SideNav from './Components/Sidenav';
import Header from './Components/Header';
import AllUserTable from './Components/AllUserTable';
import AddUserPopup from "./Components/AddUserPopup";
function Dashboard({ setIsAuthenticated }) {
    let [loggedUser, setLoggedUser] = useState(localStorage.getItem("loggedUser"));

    
    const logout = () => {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('loginStatus');
        setLoggedUser(null);
        setIsAuthenticated(false);
    }
    return (
        <div className='container-fluid p-0'>
            <div className='row m-0'>
                <div className='col-2 p-0 sidenavContainerColor'>
                    <SideNav />
                </div>
                <div className='col-10 p-0'>
                    <Header loggedUser={loggedUser} logout={logout} />
                    <AllUserTable />

                </div>
            </div>
            <AddUserPopup />
        </div>
    );
}

export default Dashboard;