import React, { Component, Suspense } from 'react';
import './App.css';
import io from 'socket.io-client';
import Header from '../component/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Layout from '../hoc/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

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

  let routes = (
    <Switch>
      {/* <Route path="/auth" render={props => <Auth {...props} />} /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  )
  // return (
  //   <div>
  //     {/* <Header name="hi" /> */}
  //     <div>hello</div>
  //     <Button variant="contained" className={classes.button}>
  //       Default
  //     </Button>
  //   </div>
  // )
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default App;
export default withStyles(styles)(withRouter(App));
