import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showGraphs, selectApp, selectPool, selectInstance, clearGraphs } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      app: '',
      pool: '',
      instance: '',
      clearDisabled: true
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onSelectAppChange = this.onSelectAppChange.bind(this);
    this.onSelectPoolChange = this.onSelectPoolChange.bind(this);
    this.onSelectInstanceChange = this.onSelectInstanceChange.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderSelect (type, onChangeCallback, data) {
    return (
      <select
        value={this.state[type]}
        onChange={onChangeCallback}
        className="form-control" >
        <option value="">Select {type}</option>
        { data.map((value)=> <option key={value} value={value}>{value}</option>) }
      </select>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.setState({
      clearDisabled: false
    });
    this.props.showGraphs(this.state);
  }

  onClearClick(event) {
    event.preventDefault();

    this.setState({
      app: '',
      pool: '',
      instance: '',
      clearDisabled: true
    });
    this.props.clearGraphs();
  }

  onSelectAppChange(event) {
    let app = event.target.value;
    this.setState({
      app: app,
      pool: '',
      instance: ''
    });

    this.props.selectApp(app);
  }

  onSelectPoolChange(event) {
    let pool = event.target.value;
    this.setState({pool: pool, instance: ''});

    this.props.selectPool({app:this.state.app, pool:pool});
  }

  onSelectInstanceChange(event) {
    let instance =  event.target.value;
    this.setState({instance: instance});

    this.props.selectInstance(instance);
  }

  render() {
    return (
      <div className="jumbotron">
        <form name="select-monitor" className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="form-group col-md-2">
            {this.renderSelect('app', this.onSelectAppChange, this.props.apps)}
          </div>
          <div className="form-group col-md-2">
            {this.renderSelect('pool', this.onSelectPoolChange, this.props.pools)}
          </div>
          <div className="form-group col-md-2">
            {this.renderSelect('instance', this.onSelectInstanceChange, this.props.instances)}
          </div>
          <div className="form-group col-md-3 float-right">
            <button type="submit" className="btn btn-default pull-xs-right">Submit</button> &nbsp;
            <button
              type="button"
              onClick={this.onClearClick}
              disabled={this.state.clearDisabled}
              className="btn btn-warning pull-xs-right">Clear</button>
          </div>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    apps: state.apps,
    pools: state.pools || [],
    machines: state.machines || [],
    instances: state.instances || []
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      showGraphs, selectApp, selectPool, selectInstance, clearGraphs
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
