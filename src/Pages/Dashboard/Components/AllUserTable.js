import React, { useState, useEffect } from 'react';
import { GetRequest } from './../DashboardHandler';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import EditUser from './EditUser';
function AllUserTable() {
    const [pages, setPages] = useState(1);
    const [allData, setData] = useState([]);
    const [singleUser , setSingleUser] = useState([]);
    useEffect(() => {
        getAllUser();
    }, [pages]);

    const getAllUser = async () => {
        let result = await GetRequest("https://reqres.in/api/users?page=" + pages);
        setData(result.data)
    }

    const openEditPopup = async (userId)=>{
        document.getElementById('editpostpopup').style.display = 'block';
        let result = await GetRequest("https://reqres.in/api/users/"+userId);
        setSingleUser(result.data)
    }
    return (
        <div className='mt-5 pl-4 pr-4'>
            <h2 className='mb-4'>All User Table</h2>
            <table id='allUserTable' className='border table table-striped'>
                <thead className='text-center'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">irst Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        allData.length !== 0
                            ?
                            allData.map((tableData, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{tableData.first_name}</td>
                                    <td>{tableData.last_name}</td>
                                    <td><img src={tableData.avatar} alt='' width='80px' /></td>
                                    <td>

                                        <DropdownButton
                                            className="dropDown mt-3 commentDropdown"
                                            title={
                                                'Edit/Delete'
                                            }
                                        >
                                            <Dropdown.Item
                                            onClick={()=>openEditPopup(tableData.id)}
                                            >
                                                Edit
                                </Dropdown.Item>
                                            <Dropdown.Item
                                            >
                                                Delete
                                </Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            })
                            :
                            <tr>
                                <td></td>
                                <td></td>
                                <td>No Record Found</td>
                                <td></td>
                                <td></td>

                            </tr>
                    }

                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item" ><button className="btn page-link" onClick={() => setPages(pages === 1 ? 1 : pages - 1)}>Previous</button></li>
                    <li className="page-item" ><button disabled={
                        allData.length === 0
                            ? true : false} onClick={() => setPages(pages === 12 ? 1 : pages + 1)} className="btn page-link" >Next</button></li>
                </ul>
            </nav>
            <EditUser singleUser={singleUser} />
        </div>
       
    );
}

export default AllUserTable;