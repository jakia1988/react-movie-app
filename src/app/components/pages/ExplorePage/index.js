import React, {Fragment} from 'react';
import HeaderComponent from '../../app/Header/HeaderComponent';
import Explore from '../../app/Explore';

function ExplorePage() {
    return (
       <Fragment> 
            <HeaderComponent isLoggedIn = {true}/>
            <Explore/>
       </Fragment>
    )
}

export default ExplorePage;