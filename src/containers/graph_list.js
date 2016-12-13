import React, { Component } from 'react';
import { connect } from 'react-redux';
import GraphItem from '../components/graph_item';

class GraphList extends Component {

  renderGraphItems () {
    return this.props.graphs.map( (graph) => {
      return (
        <div className="col-md-4" key={graph.machine}>
          <GraphItem graph={graph} />
        </div>
      );
    });
  }

  render() {
    if (!this.props.graphs) {
      return <div className="container">Select the app to monitor</div>;
    }

    return (
      <div className="container">
        <div className="row">
          {this.renderGraphItems()}
        </div>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    graphs: state.graphs
  }
}

export default connect(mapStateToProps)(GraphList);
