import React from 'react';

const button = ({onClick, label}) => {
  return <button type='submit'onClick={onClick}>{label}</button>
}

export default button;