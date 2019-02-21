import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import Nav from '../component/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  return (
    <div>
      <Nav name="hi" />
      <div>hello</div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    </div>
  )
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
// export default App;
export default withStyles(styles)(App);
