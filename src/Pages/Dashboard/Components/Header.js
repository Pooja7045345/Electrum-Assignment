import React  from 'react';

function Header({loggedUser , logout}) {
 
    return (
        <div className='headerContainer'>
            <ul className='list-unstyled text-dark font-weight-bold d-flex justify-content-end' id='header'>
                <li>
                   Hi , {loggedUser}
                </li>
                <li onClick={logout}>
                    Logout
                </li>
            

            </ul>
        </div>
    );
}

export default Header;