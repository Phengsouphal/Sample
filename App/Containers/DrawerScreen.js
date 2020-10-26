import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native'
import { Images, Colors, Fonts } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Badge, Icon } from 'native-base'
import { each } from 'lodash'
 
import { Platform } from 'react-native'

class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenuData: [
                ],
            isNoServiceProvider: false,
            noServicePopup: false,
        }
    }
    _hanldePressSignIn = () => {
        
    }


    handlePressEachMenu = (item, index, statuButton) => {
        const { sideMenuData } = this.state
        
    }

    _handleMainLogo = () => {
        const { sideMenuData } = this.state
         

    }
    render() {
        let { sideMenuData, noServicePopup, isNoServiceProvider } = this.state
        
       
        
       
        return (
            <ScrollView style={{ flex: 1, backgroundColor: Colors.btnBackground }}>
                <TouchableOpacity style={{ flex: 1, marginTop: Platform.OS=='ios'? 0 : '10%' }} onPress={this._handleMainLogo}>
                    <Text style={{ fontSize: 20, color: Colors.white, fontWeight: '700', textAlign: 'center' }}>SWAP</Text>
                </TouchableOpacity>
                <View style={{ flex: 10 }}>
                    
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: Fonts.size.small, color: Colors.white, textAlign: 'center', paddingTop: 10 }}>Copyright ©2020</Text>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        // justifyContent: 'flex-end',
        justifyContent: 'center',
        // alignItems: 'center'
        width: '100%',
    },
    pictureText: {
        fontSize: Fonts.size.input,
        fontWeight: '500',
        marginLeft: 20,
        color: Colors.text_color
    },
    btnAddPicture: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textAddPic: {
        textAlign: 'center',
        fontSize: Fonts.size.medium + 2,
        fontWeight: '700'
    },
    btnContinue: {
        backgroundColor: Colors.btnBackground,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    contentOverlay: {
        backgroundColor: '#FFFFFF',
        height: '65%',
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
    
        currentScreen: state.currentScreen
    }
}
 


export default connect(mapStateToProps, null)(DrawerScreen)
