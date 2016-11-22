import React, { Component } from 'react';
import GraphItem from '../components/graph_item';

export default class GraphList extends Component {

  renderGraphItems () {
    this.props.graphs.map( (graph) => {
      return <GraphItem graph={graph} />;
    });
  }

  render() {
    if (!this.props.graphs) {
      return <div className="container">Select the app to monitor</div>;
    }

    return (
      <div className="container">
        {this.renderGraphItems()}
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    graphs: state.graphs
  }
}
