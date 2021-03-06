import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Button from '@healthifyme/ui-components/lib/elements/Button';
import Spinner from '@healthifyme/ui-components/lib/elements/Spinner';
import { Wrapper, Mains } from './Home.styles';

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  selectUser = (user) => {
    if (user && user.value) {
      const { history } = this.props;
      const encoded = window.encodeURIComponent(user.value);
      history.push(`/book-consultation/${encoded}`);
    }
  };

  render() {
    return (
      <Wrapper>
        <Button
          onClick={() => {}}
          label="button for this text now hmr"
          meta="this is a text button"
        />
        <Mains className="margin margin--auto margin-top--xxlg flex flex--col flex--center">
          <h1>Do you want to see a very bad grid of original Memes ?</h1>
          <h1>Do you want to see a very bad grid of original Memes ?</h1>
          <img
            src="https://i.kym-cdn.com/photos/images/original/000/210/119/9b3.png"
            alt="meme"
          />
          <h1>
            <Link href="meme" to="meme">
              click Meme
            </Link>
          </h1>

          <Button onClick={() => {}} label="hannad rehman" meta="_ref.meta" />
          <Spinner visible />
        </Mains>
      </Wrapper>
    );
  }
}

export default withRouter(Home);
