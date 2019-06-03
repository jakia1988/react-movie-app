import React from 'react';
import { Card } from 'antd';
import LoginComponent from './LoginFormComponent'
import ContentWrapper from '../../core/ContentWrapper/ContentWrapper';

function LoginForm() {
  return (
    <Card title="Login" className="authWrapper" hoverable={true} style={{ width: 400 }}>
       <LoginComponent/>
    </Card>
  )
}

export default ContentWrapper(LoginForm);