import React, { Component } from 'react';
import { STOP_TIMER } from '../actions/types';

export default (props) => {
  const timerActive = props.timer === STOP_TIMER;

  return (
    <div className="row">
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
