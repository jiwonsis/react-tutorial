import React from 'react';
import PropTypes from 'prop-types';

const spanStyle = {
  color: '#ae5856',
};

const InlineError = ({ text }) => <span style={spanStyle}>{text}</span>;

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;