import React from 'react';
import { useState } from 'react';
function SideNav() {
const openAddPopup =()=>{
    document.getElementById('addpostpopup').style.display = 'block';
}
    const [sideNavOptions] = useState([{
        name: 'DASHBOARD',

    }, {
        name: 'Page 1',

    }, {
        name: 'Page 2',

    }, {
        name: 'Page 3',

    }, {
        name: 'Page 4',

    }
    ]
    )
    return (
        <div className='row m-0'>
            <div className='col-12 text-center logo '>
                XYZ
            </div>
            <div className='col-12 p-0 text-center'>

                <div className='w-100'>
                    <ul className='list-unstyled mb-0'>

                        {
                            sideNavOptions.map((val, i) => {
                                return <li key={i} className={val.name === 'DASHBOARD' ? 'dashboard' : 'other'}>
                                    <p>{val.name}</p>
                                </li>
                            })
                        }
                        <li className='other' onClick={openAddPopup}>
                            <p> Add user</p>

                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default SideNav;