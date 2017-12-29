import React from 'react';
import { render } from 'react-dom';
import AdaptiveProgressBar from './AdaptiveProgressBar';

render(
    <AdaptiveProgressBar
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
        }}
    />,
    document.getElementById('app')
);
