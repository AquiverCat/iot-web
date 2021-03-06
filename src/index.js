import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './style.css';
import AppHeader from './component/header/';

const { Header, Footer, Content} = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minWidth: 1300}}>
        <Header className="header">
          <AppHeader />
        </Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
