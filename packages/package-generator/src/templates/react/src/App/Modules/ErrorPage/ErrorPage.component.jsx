import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import errorImag from '../../../Assets/Images/utilities/page-not-found.png';
import { ROUTE_ERROR } from '../../../Constants/app/app.constants';

import { Wrapper, Section, BaseImage } from './ErrorPage.styles';

const ErrorPage = ({ match }) => {
  const {
    params: { type },
  } = match;
  return (
    <Wrapper>
      <Section>
        <BaseImage src={errorImag} alt={type || ROUTE_ERROR.NOT_FOUND} />
      </Section>
      <Section>
        <h1>ERROR :{type || ROUTE_ERROR.NOT_FOUND} </h1>
      </Section>
    </Wrapper>
  );
};

ErrorPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(ErrorPage);
