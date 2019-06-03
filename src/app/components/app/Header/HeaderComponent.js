import React from 'react'
import { Layout } from 'antd';
import NavigationComponent from './Navigation/NavigationComponent';

const { Header} = Layout; 

function HeaderComponent({isLoggedIn}) {
    return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo">OMDb</div>   
    { isLoggedIn &&
     <NavigationComponent/>
    }
    </Header>
    )
}

export default HeaderComponent;
