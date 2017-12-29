import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

// TODO use Lint (When i discover how to do this in StackBlitz ;) );
// TODO perhaps can be a functional Component (see here-> https://codepen.io/lucapalomba/pen/oGYNJp ). But for future purposes I need React Transitions and LifeCycles.
// TODO convert/test in 16.X ?

class AdaptiveProgressBar extends React.Component {
    
    checkPercentagesData(percentagesSeries) {
        const realPercentages = percentagesSeries.map(
            ({ value, color }) => {
                value = value > 100 ? 100 : value < 0 ? 0 : value;
                color = color || this.props.colors.activeColor;
                return { value, color };
            }
        );

        return realPercentages;
    }

    prepareLegendtext(percentagesSeries) {
        return percentagesSeries.map(percentage => `${percentage.value}%`).join('/');
    }

    render() {
        const { percentages = [] } = this.props; 
        const { text = false } = this.props;
        const { legend: { enabled: legendEnabled = false } = false } = this.props;
        const { colors : { activeColor = 'red', inactiveColor = 'transparent', labelColor = 'white' } = false } = this.props;

        // avoid data pollution; TODO, check data all togheter, thresholds and sums
        const realPercentages = this.checkPercentagesData(percentages);

        //prepare text;
        const legendText = legendEnabled
            ? this.prepareLegendtext(percentages)
            : null;

        //change style on results
        const parentStyle = {
            backgroundColor: inactiveColor
        };

        const childStyle = percentage => {
            return {
                width: `${percentage.value}%`,
                backgroundColor: `${percentage.color}`
            };
        };

        const labelStyle = {
            color: labelColor
        };

        // TODO, allow single bar messages instead a Text.
        return (
            <div className="progressbar-container">
                <div className="label" style={labelStyle}>
                    {text}
                </div>
                {legendText && (
                    <div className="legend" style={labelStyle}>
                        {legendText}
                    </div>
                )}
                <div className="progress" style={parentStyle}>
                    {realPercentages.map(percentage => (
                        <div className="child" style={childStyle(percentage)} />
                    ))}
                </div>
            </div>
        );
    }
}

export default AdaptiveProgressBar;

// TODO propTypes.
