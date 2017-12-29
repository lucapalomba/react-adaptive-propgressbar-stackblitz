import React from 'react';
import ReactDOM from 'react-dom';
import AdaptiveProgressBar from './AdaptiveProgressBar';

it('render empty', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdaptiveProgressBar  />, div);
});