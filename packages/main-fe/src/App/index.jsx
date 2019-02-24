import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '@nikaah/utilities/lib/redux/';
import Layout from './Layout';
import { facebookLocalData } from './actions';

import '../Styles/global.css';

class App extends React.Component {
  static propTypes = {
    facebookLocalDataAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { facebookLocalDataAction } = this.props;
    facebookLocalDataAction();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout user={{}} />
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
      facebookLocalDataAction: facebookLocalData,
    },
    dispatch,
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
