import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd'; 
import { Link, withRouter } from 'react-router-dom';
import {checkAuth} from '../../../services/loginService';


class LoginFormComponent extends Component {
  componentDidMount(){
    const isloggedIn = localStorage.getItem('currentUser');
    if(isloggedIn !==null && isloggedIn !== undefined){
      this.props.history.push('/dashboard')
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const isloggedIn = checkAuth(values);
        isloggedIn ? this.props.history.push('/dashboard') : this.props.history.push('/register');
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{type: 'email', message: 'Please enter a not valid E-mail!'}, { required: true, message: 'Please enter your email.' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password.' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button> &nbsp; Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    );
  }
}

const LoginComponent = Form.create({ name: 'login' })(LoginFormComponent);


export default withRouter(LoginComponent);