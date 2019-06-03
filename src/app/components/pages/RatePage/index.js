import React, {Fragment} from 'react';
import HeaderComponent from '../../app/Header/HeaderComponent';
import Rate from '../../app/Rate';

function RatePage() {
    return (
       <Fragment> 
            <HeaderComponent isLoggedIn = {true}/>
            <Rate/>
       </Fragment>
    )
}

export default RatePage;