import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native' 
import { View } from 'react-native-animatable'
import { Colors, Fonts } from '../Themes';
import Ripple from 'react-native-material-ripple';

export default class Button extends Component {
	static propTypes = {
		text: PropTypes.string,
		onPress: PropTypes.func,
		styles: PropTypes.object,
		color: PropTypes.string,
		haveIcon: PropTypes.bool,
		iconName: PropTypes.string,
		backgroundColor: PropTypes.string,
		fontType: PropTypes.string,
	}

	render () {
		const { color, text, iconName, haveIcon, backgroundColor,fontType } = this.props
		return (
			<Ripple rippleColor='#FFFFFF' rippleDuration={800} style={[styles.button,  {backgroundColor:backgroundColor}, this.props.styles,]} onPress={this.props.onPress}>
				<View style={styles.container}>
					{haveIcon ? 
						<View style={{width: 40, height: 30, justifyContent: 'center', alignItems: 'center',}}>
							<Image source={iconName} style={{width:  30 , height: 25,  margin: 5, resizeMode: 'contain' }} />
						</View> 
					: null}
					<Text style={[styles.text, {fontFamily:fontType, color: color, marginLeft: haveIcon ? 5 : 0}]}>{text && text.toUpperCase()}</Text>
				</View>
			</Ripple>
		)
	}
}

const styles = StyleSheet.create({
text: {
    textAlign:'center',
    fontSize: Fonts.size.medium,
    // fontWeight: 'bold',
  },
  
  button: {
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:45,
    borderRadius: 30,
  },

  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
	height:  30,
    borderRadius: 30,
	
  }
})