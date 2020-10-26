import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, PermissionsAndroid, Dimensions, Image, Platform } from 'react-native'
import { Images, Colors, Fonts } from '../Themes' 
import { Actions } from 'react-native-router-flux' 
import { connect } from 'react-redux' 
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			version: '',
			progress_bar: 0,

		};

		this.intervalID = 0;

	} 
	render() {
	 
		 
		return (

			<View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center'  }}>
			 
				 
					<Text>asdfasdfasdfasfdasfasdfasf</Text>
			 
			</View>
		)
	}
}
 
export default connect(null, null)(WelcomeScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'

	},
	imageView: {
		// flex: 1,
		alignItems: 'center',

		justifyContent: 'space-around',
		backgroundColor: 'green'
	},
	viewTextVersion: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 40
	},
	text: {
		textAlign: 'center',
		fontSize: Fonts.size.h1,
		color: Colors.main_text,
		fontFamily: Fonts.type.robotBold
	},
	versionText: {
		fontSize: Fonts.size.medium,
		color: Colors.main_text,
		fontFamily: Fonts.type.robotRegular
	}
})


