
import React, { Component }  from 'react';
import { Layout } from 'antd';

const {Content } = Layout;

const ContentWrapper = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return (
        <Content style={{ padding: '0 50px', marginTop: 84 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '90vh' }}>
                  <WrappedComponent {...this.props} />
            </div>
        </Content>
      
      );
    }
  }
    
  return HOC;
};

export default ContentWrapper;