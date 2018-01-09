import React from 'react';
import { connect } from 'react-redux';
import  { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom'
import Employees from '../jsx/components/DataGrid.jsx';

import database from 'firebase-database';

class App extends React.Component {

  constructor(props){
    super(props);


    if (props.state) {
      this.state = props.state;
    } else {
      this.state = {
        employees: []
      }
    }
  }

  getAllEmployees = () => {
    database.getAllEmployees().on('value',(snap) => {
      this.setState({
        employees: snap.val()
      });
    });
  }

  componentDidMount(){
    this.getAllEmployees();
  }
  // Loads all employees

  render() {
    return(
        <Switch>
          <Route path="/">
            <Employees data={this.state.employees}/>
          </Route>
        </Switch>
    );
  };
};

const mapStateToProps = state =>
{
    return {

    }
};


export default withRouter(connect(mapStateToProps)(App));
