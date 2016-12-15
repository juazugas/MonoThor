import React, { Component } from 'react';

export default class TimerControl extends Component {

  render() {
    return (
      <div className="row">
        <div className="btn-group float-right">
          <button 
            className="btn btn-default"
            onclick={this.props.stopTimer}>Pause</button> &nbsp;
          <button 
            className="btn btn-default"
            onclick={this.props.startTimer}>Start</button>
        </div>
      </div>
    );
  }

}
