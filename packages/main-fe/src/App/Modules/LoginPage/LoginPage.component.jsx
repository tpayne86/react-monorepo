import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import Loading from '@nikaah/ui-components/lib/compounds/Loading';
import Alert from '@nikaah/ui-components/lib/compounds/Alert';
import { Wrapper } from '@nikaah/ui-components/lib/elements/Styled';
import { facebookLogin } from '../../actions';
import {
  FACEBOOK_APP_ID,
  ALERT_MESSAGES,
} from '../../../Constants/app/app.constants';
import {
  userLoadingSelector,
  userFailureSelector,
  isLoggedInSelector,
} from './LoginPage.selectors';
import { Login } from './LognPage.styles';

class LoginPage extends React.Component {
  static propTypes = {
    facebookLoginAction: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    userLoading: PropTypes.bool.isRequired,
    userFailure: PropTypes.object,
    changeRoute: PropTypes.func.isRequired,
  };

  static defaultProps = {
    userFailure: null,
  };

  componentDidMount() {
    const { isLoggedIn, changeRoute } = this.props;
    if (isLoggedIn) {
      changeRoute('/');
    }
  }

  handleFacebookLogin = (data) => {
    const { facebookLoginAction } = this.props;
    facebookLoginAction(data);
  };

  render() {
    const { userLoading, userFailure } = this.props;
    return (
      <Wrapper>
        <Login>
          <Loading loading={userLoading} size="large">
            {() => (
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                fields="name,email,picture"
                callback={this.handleFacebookLogin}
                size="medium"
              />
            )}
          </Loading>
          <Alert
            hasAlert={userFailure !== null}
            alertTitle={ALERT_MESSAGES.GENERIC}
          />
        </Login>
      </Wrapper>
    );
  }
}
const mapState = (store) => ({
  isLoggedIn: isLoggedInSelector(store),
  userLoading: userLoadingSelector(store),
  userFailure: userFailureSelector(store),
});
const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      facebookLoginAction: facebookLogin,
      changeRoute: (route) => push(route),
    },
    dispatch,
  );

export default connect(
  mapState,
  mapDispatch,
)(LoginPage);
