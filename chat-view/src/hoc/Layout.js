import React from 'react';
import Aux from './Aux';
import Header from '../component/Header';
import Friends from '../component/Friends';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  main: {
      display: 'flex',
  },
  left: {
      flex: 1,
      backgroundColor: 'red'
  },
  right: {
      flex: 2,
      backgroundColor: 'blue'
  }
});


const Layout = (props) => {
    const { classes } = props;
    
    return (
        <Aux>
            {/* <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}
            /> */}
            <Header></Header>
            <div className={classes.main}>
                <div className={classes.right}>
                    <Friends></Friends>
                </div>            
                <main className={classes.left}>{props.children}</main>
            </div>
        </Aux>
    );
}

export default withStyles(styles)(Layout);
