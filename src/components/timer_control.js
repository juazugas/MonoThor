import React, { Component } from 'react';
import { STOP_TIMER } from '../actions/types';

function TimerControl (props) {
  const timerActive = props.timer === STOP_TIMER;

  return (
    <div className="row timer-control">
      <div className="btn-group float-right">
        <button
          title="Pause"
          disabled={timerActive}
          className="btn btn-secondary"
          onClick={props.stopTimer}>
          <i className="fa fa-fw fa-pause"> </i>
        </button> &nbsp;
        <button
          title="Resume"
          disabled={!timerActive}
          className="btn btn-secondary"
          onClick={props.startTimer}>
          <i className="fa fa-fw fa-play"> </i>
        </button>
      </div>
    </div>
    );

}
TimerControl.propTypes = {
  timer: React.PropTypes.string.isRequired,
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

export default TimerControl;
