import React from 'react';
import ReactDOM from 'react-dom';
import { mount,shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import AdaptiveProgressBar from './AdaptiveProgressBar';

configure({ adapter: new Adapter() });

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

describe('renders progress bars correctly', () => {

    it('renders two child progress bars', () => {
        const wrapper = mount( <AdaptiveProgressBar         
            percentages={[
                { value: 25.5, color: '#121C25' },
                { value: 50.2, color: '#13314D' }
            ]}
        /> );
        expect(wrapper.find('.child').length).toEqual(2);
    });

    it('renders one child progress bars', () => {
        const wrapper = mount( <AdaptiveProgressBar         
            percentages={[
                { value: 25.5, color: '#121C25' },
            ]} /> );
        expect(wrapper.find('.child').length).toEqual(1);
    });

    it('renders noone child progress bars wuth empty configuration', () => {
        const wrapper = mount( <AdaptiveProgressBar         
            percentages={[]} /> );
        expect(wrapper.find('.child').length).toEqual(0);
    });

    it('renders noone child progress bars if not configured', () => {
        const wrapper = mount( <AdaptiveProgressBar /> );
        expect(wrapper.find('.child').length).toEqual(0);
    });

    it('renders noone child progress bars if not configured but others', () => {
        const wrapper = mount( <AdaptiveProgressBar
            text={'Time I am writing code in a day'}
            legend={{
                enabled: true
            }}
            colors={{
                activeColor: '#121C25',
                inactiveColor: '#2D587B',
                labelColor: '#9CB1BF'
            }}
            /> );
        expect(wrapper.find('.child').length).toEqual(0);
    });



});