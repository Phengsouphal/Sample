import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Colors, Images, ApplicationStyles, Metrics, Fonts } from '../Themes'

class HeaderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _handlePressTitle = () => {
        Actions.reset('HomeScreen');
    }

    handlePressBack = () => {
        Actions.pop();
    }

    openDrawer = () => {
        Actions.drawerOpen()
    }

    _handleBack = () => {
        Actions.pop()
    }

    handlePressSupport = () => {
        if(Actions.currentScene == 'HomeScreen') {
            Actions.SupportScreen()
        }
    }

    render() {
        const { data } = this.props.getHeader;
        var title = "";
        var screen = "";
        var statusLogo = true;
        var statusNotice = true;
        var statusHideAllIcone = false;
        var statusBackIcon = false;
        var statusSupport = true;
        var statusMenu = true;
        if (data) {
            let { titleHeader, statusHeader, screenName } = data
            title = titleHeader;
            screen = screenName;

            if (screenName == "ExistingAccountScreen" || screenName == 'ServiceProviderScreen' || screenName == 'AccountCreationScreen' 
            || screenName == 'SignInWithPhoneNumberScreen' || screenName == 'SignInCompleteScreen' || screenName=='UserTypesScreen') {
                statusNotice = false;
                statusMenu = false;
                statusSupport = false;
            }else if(screenName == 'SupportScreen' || screenName == 'PickupPointSelectionScreen' || screenName == 'EditProfilePickupPointSelectionScreen' ) {
                statusBackIcon = true;
                statusNotice = false;
                statusSupport = false;
            }
            if (!statusHeader) {
                return false;
            }
        }

        return (
            <View style={[ApplicationStyles.mainHeaderContainer, { paddingTop: Platform.OS == "android" ? 4 : 0 }]}>
                 <Text>Heser</Text>
            </View>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        getHeader: state.header
    }
}
export default connect(mapStateToProps, null)(HeaderScreen)
