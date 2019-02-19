import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Button from '@healthifyme/ui-components/lib/elements/Button';
import './Home.styles.scss';

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
      <div className="home home__wrapper">
        <Button
          onClick={() => {}}
          label="button for this text"
          meta="this is a text button"
        />
        <section className="home__mains margin margin--auto margin-top--xxlg flex flex--col flex--center">
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
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
