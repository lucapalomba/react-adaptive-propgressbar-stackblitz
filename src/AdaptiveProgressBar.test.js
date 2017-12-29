import React from 'react';
import ReactDOM from 'react-dom';
import AdaptiveProgressBar from './AdaptiveProgressBar';

it('render empty', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdaptiveProgressBar  />, div);
});

it('render with complete configuration%', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AdaptiveProgressBar 
        percentages={[
            { value: 25.5, color: '#121C25' },
            { value: 50.2, color: '#13314D' }
        ]}
        text={'Time I am writing code in a day'}
        legend={{
            enabled: true
        }}
        colors={{
            activeColor: '#121C25',
            inactiveColor: '#2D587B',
            labelColor: '#9CB1BF'
        }} />, div);
});