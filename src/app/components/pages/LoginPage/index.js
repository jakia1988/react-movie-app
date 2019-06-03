import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import HeaderComponent from '../../app/Header/HeaderComponent';
import LoginForm from '../../app/LoginFrom';

function LoginPage() {
    return (
       <Fragment> 
        <HeaderComponent isLoggedIn={false}/>
        <LoginForm/>
       </Fragment>
    )
}

export default withRouter(LoginPage);