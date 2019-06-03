import React, {Fragment, Component} from 'react'
import { Menu, Avatar, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

class NavigationComponent extends Component {
  constructor(){
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem('currentUser'))
    }
  }
     
  componentDidMount() {
     const isLoggedIn =  JSON.parse(localStorage.getItem('currentUser'));
     if(isLoggedIn === null || isLoggedIn === undefined){
         this.props.history.push('/')
     }
  }
  onUserLogout(){
     localStorage.removeItem('currentUser');
     window.location.href = "/";
  }
  render() {
    return (
      <Fragment>
          <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><NavLink  exact activeClassName="current" to="/dashboard"><Icon type="home" /> Dashboard</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink  exact activeClassName="current" to="/explore"><Icon type="heart" /> Explore</NavLink></Menu.Item>
          <Menu.Item key="3" disabled><NavLink  exact activeClassName="current" to="/settings"><Icon type="setting" /> Settings</NavLink></Menu.Item>

          
          <SubMenu
            title={
              <span className="submenu-title-wrapper-logout">
                <Avatar style={{ color: '#ffffff', backgroundColor: '#1890ff' }}>{this.state.user.email.charAt(0).toUpperCase()}</Avatar> &nbsp;
                {this.state.user.email}
              </span>
            }
          >
          <Menu.Item key="logout" onClick={this.onUserLogout}><Icon type="logout" /> Logout</Menu.Item>
          </SubMenu>


        </Menu>
      </Fragment>
    )
  }
}

export default withRouter(NavigationComponent);
