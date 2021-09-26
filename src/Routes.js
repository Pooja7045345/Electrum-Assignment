import React , { useState , useEffect } from 'react';
import AuthRoutes from './Pages/Auth/AuthRoutes';
import DashboardRoutes from './Pages/Dashboard/DashboardRoutes';
const Routes = () => {
    let [ isAuthenticated , setIsAuthenticated ] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('loginStatus') === 'userLogin') {
            setIsAuthenticated(true);
        }
    },[]);

    return (
        <>
            { isAuthenticated === true ? <DashboardRoutes setIsAuthenticated = {setIsAuthenticated} />  : <AuthRoutes setIsAuthenticated = {setIsAuthenticated} />  }
            
            
        </>
    )
}

export default Routes;