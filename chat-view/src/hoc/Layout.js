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
      height: '100vh'
  },
  left: {
      flex: 3,
      backgroundColor: 'red'
  },
  right: {
      flex: 1,
    //   backgroundColor: 'blue'
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
                <main className={classes.left}>{props.children}</main>
                <div className={classes.right}>
                    <Friends></Friends>
                </div>
            </div>
        </Aux>
    );
}

export default withStyles(styles)(Layout);
