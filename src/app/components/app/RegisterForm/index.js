import React from 'react';
import { Card } from 'antd';
import RegisterComponent from './RegisterFormComponent';
import ContentWrapper from '../../core/ContentWrapper/ContentWrapper';

function RegisterForm() {
  return (
    <Card title="Register" className="authWrapper" hoverable={true} style={{ width: 400 }}>
       <RegisterComponent/>
    </Card>
  )
}

export default ContentWrapper(RegisterForm);