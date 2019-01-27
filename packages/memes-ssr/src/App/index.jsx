import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../Store';
import Layout from './Layout';
import Routes from './Router';

import { globalFetchUserProfile, globalFetchUserProfileExtras } from './actions';

import '../Styles/global.scss';
import '@healthifyme/styles';


class App extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    globalFetchUserProfileAction: PropTypes.func.isRequired,
    globalFetchUserProfileExtrasAction: PropTypes.func.isRequired,

  };


  componentDidMount() {
    const {
      globalFetchUserProfileAction,
      globalFetchUserProfileExtrasAction,
    } = this.props;
    globalFetchUserProfileAction();
    globalFetchUserProfileExtrasAction();
  }

  render() {
    const { profile } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Routes shouldRender user={profile} />
        </Layout>
      </ConnectedRouter>
    );
  }
}


function mapStateToProps(store) {
  return {
    profile: store.user.profile,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    globalFetchUserProfileAction: globalFetchUserProfile,
    globalFetchUserProfileExtrasAction: globalFetchUserProfileExtras,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
