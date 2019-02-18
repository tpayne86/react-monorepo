import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Menu,
} from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../Router';

import { Content as AppContent, Logo } from './styles';


const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

toggle = () => {
  this.setState(prevState => (
    {
      collapsed: !prevState.collapsed,
    }
  ));
}

render() {
  const { user } = this.props;
  return (
    <Layout>
      <Header>
        <Link href="/" to="/">
          <Logo className="logo">
            React Memes
          </Logo>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Content>
        <AppContent>
          <Routes shouldRender user={user} />
        </AppContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          Hannad Rehman ©2019
      </Footer>
    </Layout>
  );
}
}

export default AppLayout;
