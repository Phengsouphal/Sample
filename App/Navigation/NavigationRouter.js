import React, { Component } from 'react';
import { Router, Scene, Drawer, Stack } from 'react-native-router-flux';
import HeaderActions from '../Redux/HeaderRedux';
import FooterActions from '../Redux/FooterRedux';

import { connect } from 'react-redux'

import DrawerScreen from '../Containers/DrawerScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import HomeScreen from '../Containers/HomeScreen'
import HomeSwipeScreen from '../Containers/HomeSwipeScreen'

import CardScreen from '../Containers/CardScreen'


import ListScreen from '../Containers/ListScreen'

import FormScreen from '../Containers/FormScreen'

class NavigationRouter extends Component {

    onEnter = (statusFooter, statusHeader, titleHeader, screenName) => {
        this.props.setFooter({ statusFooter: statusFooter, screenName: screenName })
        this.props.setHeader({ statusHeader: statusHeader, titleHeader: titleHeader, screenName: screenName })
    }

    render() {
        return (
            <Router>
                <Drawer contentComponent={DrawerScreen}>
                    <Scene key="root">
                        <Scene onEnter={() => this.onEnter(false, false, '', 'WelcomeScreen')} initial={true} key="WelcomeScreen" panHandlers={null} component={WelcomeScreen} hideNavBar={true} />
                        <Scene onEnter={() => this.onEnter(true, true, '', 'HomeScreen')} initial={true} key="HomeScreen"  component={HomeScreen} hideNavBar={true} />
                        <Scene onEnter={() => this.onEnter(true, true, '', 'HomeSwipeScreen')} key="HomeSwipeScreen"  component={HomeSwipeScreen} hideNavBar={true} />

                        <Scene onEnter={() => this.onEnter(true, true, '', 'CardScreen')} key="CardScreen"  component={CardScreen} hideNavBar={true} />
                        <Scene onEnter={() => this.onEnter(true, true, '', 'ListScreen')}  key="ListScreen"  component={ListScreen} hideNavBar={true} />
                        <Scene onEnter={() => this.onEnter(true, true, '', 'FormScreen')}  key="FormScreen"  component={FormScreen} hideNavBar={true} />

                    </Scene>
                </Drawer>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFooter: (statusFooter) => dispatch(FooterActions.setFooterRequest(statusFooter)),
        setHeader: (data) => dispatch(HeaderActions.setHeaderRequest(data)),
    }
}

export default connect(null, mapDispatchToProps)(NavigationRouter)
