import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import GraphList from '../containers/graph_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>MonoThor <small>god style</small></h2>
        <SearchBar />
        <GraphList />
      </div>
    );
  }
}
