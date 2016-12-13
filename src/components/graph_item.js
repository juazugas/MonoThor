import React, { Component } from 'react';

export default class GraphItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      src: props.graph.url,
      dt: new Date().toISOString()
    }
  }

  componentDidMount() {
    var intervalId = setInterval(() => {
      var now = new Date();
      var index = this.state.src.lastIndexOf('&timdt=') > 0 ? this.state.src.lastIndexOf('&timdt=') : this.state.src.length;
      var newSrc = this.state.src.substring(0, index);
      newSrc+= '&timdt=' + now.getTime();
      console.log(now.toISOString(), newSrc);
      this.setState({
        src: newSrc,
        dt: now.toISOString()
      });
    }, 3000);
    this.setState({
      interval: intervalId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
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
