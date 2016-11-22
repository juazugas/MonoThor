import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      app: '', 
      pool: '',
      instance: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSelectAppChange = this.onSelectAppChange.bind(this);
    this.onSelectPoolChange = this.onSelectPoolChange.bind(this);
    this.onSelectInstanceChange = this.onSelectInstanceChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  onSelectAppChange(event) {
    this.setState({app: event.target.value});
  }

  onSelectPoolChange(event) {
    this.setState({pool: event.target.value});
  }

  onSelectInstanceChange(event) {
    this.setState({instance: event.target.value});
  }

  render() {
    return (
      <div className="well">
        <form name="select-monitor" className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <select 
                value={this.state.app}
                onChange={this.onSelectAppChange}
                className="form-control">
              <option value="">Select App</option>
              <option value="app1">App1</option>
              <option value="app2">App2</option>
            </select>
            <select 
              value={this.state.pool}
              onChange={this.onSelectPoolChange}
              className="form-control" >
              <option value="">Select Pool</option>
              <option value="1">Pool #1</option>
              <option value="2">Pool #2</option>
            </select>
            <select 
              value={this.state.instance}
              onChange={this.onSelectInstanceChange}
              className="form-control" >
              <option value="">Select Instance</option>
              <option value="inst01">Instance #01</option>
              <option value="inst02">Instance #02</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }

}
