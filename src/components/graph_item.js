import React, { Component } from 'react';

export default class GraphItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      src: props.graph.url,
      dt: new Date().toISOString()
    }

    this.doStartInterval = this.doStartInterval.bind(this);
  }

  doStartInterval (src) {
    return setInterval(() => {
      var index = src.lastIndexOf('&timdt=') > 0 ? src.lastIndexOf('&timdt=') : src.length;
      var newSrc = src.substring(0, index);
      var now = new Date();
      newSrc+= '&timdt=' + now.getTime();
      this.setState({
        src: newSrc,
        dt: now.toISOString()
      });
    }, 3000);
  }

  doStopInterval (intervalId) {
    clearInterval(intervalId);
  }

  componentDidMount() {
    this.timerID = this.doStartInterval(this.state.src);
  }

  componentWillUnmount() {
    this.doStopInterval(this.timerID);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      src: nextProps.graph.url,
      dt: new Date().toISOString()
    });
    this.doStopInterval(this.timerID);
    this.timerID = this.doStartInterval(nextProps.graph.url);
  }

  render() {
    return (
      <div className="thumbnail">
        <img className="img-thumbnail img-responsive" src={this.state.src} />
        <div className="caption">
          <span className="xtra-small float-right">{this.state.dt}</span>
        	<h4>{this.props.graph.app}-{this.props.graph.instance}</h4>
        	<p><a href={this.props.graph.url}>{this.props.graph.machine}</a> ({this.props.graph.pool})</p>
        </div>
      </div>
    );
  }

}
