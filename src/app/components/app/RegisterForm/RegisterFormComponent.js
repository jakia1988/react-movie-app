import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../../services/registerService';


class RegisterFormComponent extends Component {
  constructor(){
     super();
     this.state = {
        confirmDirty: false
     } 
  }   
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
        registerUser(values);
        this.props.history.push('/login');
      }
    });
  };
    
  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '91',
        })(
        <Select style={{ width: 70 }}>
            <Select.Option value="91">+91</Select.Option>
        </Select>,
        );
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{required: true, message: 'Please enter your name'}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Name"
            />,
          )}
        </Form.Item>
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
         <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password.' },{validator: this.validateToNextPassword}],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please enter your phone number!' }],
          })(<Input addonBefore={prefixSelector} placeholder="Contact" type="text" maxLength={10} style={{ width: '100%' }} />)}
        </Form.Item>
       <Form.Item>
          {getFieldDecorator('address', {
            rules: [{required: true, message: 'Please enter your address'}],
          })(
            <Input.TextArea
              rows={4}   
              placeholder="Address"
            />,
          )}
        </Form.Item>
        <Form.Item>          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button> &nbsp; Or <Link to="/">Login</Link>
        </Form.Item>
      </Form>
    );
  }
}

const RegisterComponent = Form.create({ name: 'register' })(RegisterFormComponent);


export default withRouter(RegisterComponent);