import React, { Component } from 'react';

export default class GraphItem extends Component {

  render() {
    return (
      <div className="thumbnail">
        <img className="img-thumbnail img-responsive" />
        <div class="caption">
        	<h4>app-instance</h4>
        	<p>machine (pool)</p>
        </div>
      </div>
    );
  }

}
