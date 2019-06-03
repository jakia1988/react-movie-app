import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom';
import HeaderComponent from '../../app/Header/HeaderComponent';
import RegisterForm from '../../app/RegisterForm';

function RegisterPage() {
    return (
       <Fragment> 
        <HeaderComponent/>
        <RegisterForm/>
       </Fragment>
    )
}

export default withRouter(RegisterPage);