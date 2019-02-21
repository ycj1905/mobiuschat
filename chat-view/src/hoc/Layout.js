import React from 'react';
import Aux from './Aux';
import Header from '../component/Header';

const Layout = (props) => {
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
            <main>{props.children}</main>
        </Aux>
    );
}

export default Layout;