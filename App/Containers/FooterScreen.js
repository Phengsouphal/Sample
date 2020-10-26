import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Colors, Images, ApplicationStyles, Fonts } from '../Themes'
import { Icon } from 'native-base';
import images from '../Themes/Images';
import Ripple from 'react-native-material-ripple';
class FooterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTabs: [
                { title: 'Home', iconName: 'home', iconType: 'AntDesign', status: true, screenName: 'HomeScreen' },
                { title: 'List', iconName: 'clipboard-list', iconType: 'FontAwesome5', status: false, screenName: 'ListScreen' },
                { title: 'Form', iconName: 'form', iconType: 'AntDesign', status: false, screenName: 'FormScreen' },
                { title: 'Card', iconName: 'creditcard', iconType: 'AntDesign', status: false, screenName: 'CardScreen' }
            ],



        };

    }

    _handlePressMenu = (screen_name) => {
        Actions.reset(screen_name);
    }

    render() {
        const { data } = this.props.getFooter
        const { listTabs } = this.state
        const { height } = Dimensions.get('window');

        return (
            <View style={[ApplicationStyles.mainFooterContainer, { paddingTop: Platform.OS == "ios" ? 4 : 0, marginBottom: Platform.OS === 'ios' && height >= 812 ? 30 : 0 }]}>
                {
                    listTabs.map((item, index) => {
                        var status = false
                        if ((data.screenName == 'HomeScreen' || data.screenName == 'HomeSwipeScreen') && item.screenName == 'HomeScreen') {
                            status = true
                        } else if ((data.screenName == 'ListScreen') && item.screenName == 'ListScreen') {
                            status = true
                        } else if ((data.screenName == 'FormScreen') && item.screenName == 'FormScreen') {
                            status = true
                        } else if ((data.screenName == 'CardScreen') && item.screenName == 'CardScreen') {
                            status = true
                        }

                        return (
                            <Ripple rippleDuration={600} onPress={() => this._handlePressMenu(item.screenName)} style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                                <Icon type={item.iconType} name={item.iconName} style={{ color: status ? '#2ad9b2' : '#a6a6b0', fontSize: status ? 20 : 15, }} />
                                <Text style={{ marginTop: 5, width: '100%', textAlign: 'center', fontSize: status ? 12 : 10, color: status ? '#2ad9b2' : '#a6a6b0', fontWeight: status ? '600' : 'normal' }}> {item.title}</Text>
                            </Ripple>
                        )
                    })
                }
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        getFooter: state.footer

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterScreen)
