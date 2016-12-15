import React, { Component } from 'react';

export default (props) => {

  return (
    <div className="row">
      <div className="btn-group float-right">
        <button
          className="btn btn-default"
          onClick={props.stopTimer}>Pause</button> &nbsp;
        <button
          className="btn btn-default"
          onClick={props.startTimer}>Start</button>
      </div>
    </div>
    );

}
