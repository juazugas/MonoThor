import React, { Component } from 'react';
import { connect } from 'react-redux';
import GraphItem from '../components/graph_item';
import TimerControl from '../components/timer_control';

class GraphList extends Component {

  renderGraphItems () {
    return this.props.graphs.map( (graph) => {
      return (
        <div className="col-md-4" key={graph.machine}>
          <GraphItem graph={graph} timer={this.props.timer} />
        </div>
      );
    });
  }

  render() {
    if (!this.props.graphs) {
      return <div className="container">Select the app to monitor</div>;
    }

    const { startTimer, stopTimer, timer } = this.props;

    return (
      <div className="container">
        <TimerControl 
          startTimer={startTimer} 
          stopTimer={stopTimer} 
          timer={timer} />
        <div className="row">
          {this.renderGraphItems()}
        </div>
      </div>
    );
  }

}

function mapStateToProps (state) {
  console.log(state);
  return {
    graphs: state.graphs,
    timer: state.timer
  }
}

export default connect(mapStateToProps)(GraphList);
