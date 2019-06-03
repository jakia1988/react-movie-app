import React, {Fragment} from 'react';
import HeaderComponent from '../../app/Header/HeaderComponent';
import Dashboard from '../../app/DashBoard';

function DashboardPage() {
    return (
       <Fragment> 
        <HeaderComponent isLoggedIn = {true}/>
        <Dashboard/>
       </Fragment>
    )
}

export default DashboardPage;