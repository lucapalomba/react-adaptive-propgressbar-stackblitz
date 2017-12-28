import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';

// TODO use Lint (When i discover how to do this in StackBlitz ;) );
// TODO perhaps can be a functional Component (see here-> https://codepen.io/lucapalomba/pen/oGYNJp ). But for future purposes I need React Transitions and LifeCycles.
// TODO convert/test in 16.X ?

class AdaptiveProgressBar extends React.Component {
  checkPercentagesData(percentagesSeries) {
    const realPercentages = percentagesSeries.map(
      ({ value, color } = percentage) => {
        value = value > 100 ? 100 : value < 0 ? 0 : value;
        color = color || this.props.colors.activeColor;
        return { value, color };
      }
    );

    return realPercentages;
  }

  prepareLegendtext(percentagesSeries) {
    return percentagesSeries.map(percentage => `${percentage.value}%`).join("/");
  }

  render() {
    const {
      percentages = [],
      text = false,
      legend: { enabled: legendEnabled = false },
      colors: {
        activeColor = "red",
        inactiveColor = "blue",
        labelColor = "white"
      }
    } = this.props;

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

// TODO propTypes.

render(
  <AdaptiveProgressBar
    percentages={[
      { value: 25.5, color: "#121C25" },
      { value: 50.2, color: "#13314D" }
    ]}
    text={"Time I am writing code in a day"}
    legend={{
      enabled: true
    }}
    colors={{
      activeColor: "#121C25",
      inactiveColor: "#2D587B",
      labelColor: "#9CB1BF"
    }}
  />,
  document.getElementById("app")
);
