import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GraphItem from '../components/graph_item';
import TimerControl from '../components/timer_control';
import { startTimer, stopTimer } from '../actions/index';

class GraphList extends Component {

  renderGraphItems () {
    return this.props.graphs.map( (graph) => {
      return (
        <div className="col-md-4"
          key={graph.machine}>
          <GraphItem graph={graph}
            timer={this.props.timer} />
        </div>
      );
    });
  }

  render() {
    if (!this.props.graphs || this.props.graphs.length==0) {
      return <div className="container graph-list">Select the app to monitor</div>;
    }

    const { startTimer, stopTimer, timer } = this.props;

    return (
      <div className="container graph-list">
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
GraphList.propTypes = {
  graphs: React.PropTypes.array.isRequired,
  timer: React.PropTypes.string.isRequired,
  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    graphs: state.graphs,
    timer: state.timer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      startTimer, stopTimer
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphList);
