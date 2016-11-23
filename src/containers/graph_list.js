import React, { Component } from 'react';
import { connect } from 'react-redux';
import GraphItem from '../components/graph_item';

class GraphList extends Component {

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

export default connect(mapStateToProps)(GraphList);
