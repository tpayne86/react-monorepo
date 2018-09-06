import React from 'react';
import PropTypes from 'prop-types';
import './Header.styles.scss';

import { TextBoxWithButon } from '@healthifyme/elements';

const Header = ({ addTodo }) => (
  <div className="theader theader__wrapper padding--lg">
    <TextBoxWithButon placeholder="Add a todo" onAction={addTodo} buttonText="add" />
  </div>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default Header;
