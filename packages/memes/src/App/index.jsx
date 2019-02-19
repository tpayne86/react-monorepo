import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '@healthifyme/utilities/lib/redux/';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import {
  globalFetchUserProfile,
  globalFetchUserProfileExtras,
} from './actions';
import theme from '../app.theme';

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
        <ThemeProvider theme={theme}>
          <Layout user={profile} />
        </ThemeProvider>
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
  return bindActionCreators(
    {
      globalFetchUserProfileAction: globalFetchUserProfile,
      globalFetchUserProfileExtrasAction: globalFetchUserProfileExtras,
    },
    dispatch,
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
