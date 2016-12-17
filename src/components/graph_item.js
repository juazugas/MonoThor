import React, { Component } from 'react';
import { START_TIMER, STOP_TIMER } from '../actions/types';

export default class GraphItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: props.graph.url,
      dt: new Date().toISOString()
    }
    this.timerID = false;

    this.doStartInterval = this.doStartInterval.bind(this);
    this.doStopInterval = this.doStopInterval.bind(this);
    this.isRunningInterval = this.isRunningInterval.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  doStartInterval (src) {
    this.timerID = setInterval(() => {
      var index = src.lastIndexOf('&timdt=') > 0 ? src.lastIndexOf('&timdt=') : src.length;
      var newSrc = src.substring(0, index);
      var now = new Date();
      newSrc+= '&timdt=' + now.getTime();
      this.updateImage(newSrc, now.toISOString());
    }, 3000);
  }

  updateImage(src, date = new Date().toISOString()) {
    this.setState({
      src: src,
      dt: date
    });
  }

  doStopInterval () {
    clearInterval(this.timerID);
    this.timerID = false;
  }

  isRunningInterval() {
    return this.timerID !== false;
  }

  componentDidMount() {
    this.doStartInterval(this.state.src);
  }

  componentWillUnmount() {
    this.doStopInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timer === START_TIMER && !this.isRunningInterval()) {
      this.doStartInterval(this.state.src);
    } else if (nextProps.timer === STOP_TIMER && this.isRunningInterval()) {
      this.doStopInterval();
    } else if (nextProps.graph.url !== this.props.graph.url) {
      this.updateImage(nextProps.graph.url);
      this.doStopInterval();
      this.doStartInterval(nextProps.graph.url);
    }
  }

  onErrorImage (event) {
    event.target.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  }

  render() {
    return (
      <div className="thumbnail">
        <img
          className="img-thumbnail img-responsive"
          src={this.state.src}
          onError={this.onErrorImage.bind(this)} />
        <div className="caption">
          <span className="xtra-small float-right">{this.state.dt}</span>
          <h4>{this.props.graph.app}-{this.props.graph.instance}</h4>
          <p><a href={this.props.graph.url}>{this.props.graph.machine}</a> ({this.props.graph.pool})</p>
        </div>
      </div>
    );
  }

}
