import React, { Component, Suspense, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../hoc/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Chatroom from './Chatrroom';
import axios from 'axios';

// const socket = require('socket.io-client')('http://localhost:8080');
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const App = (props) => {
  const { classes } = props;

  // useEffect(() => {
  //   axios.get('http://localhost:8080/test').then(
  //     (s) => console.log(s)
  //   )
  // }, []);

  let routes = (
    <Switch>
      {/* <Route path="/auth" render={props => <Auth {...props} />} /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/chatroom" exact component={Chatroom} />
      <Redirect to="/chatroom" />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  )
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default App;
export default withStyles(styles)(withRouter(App));
