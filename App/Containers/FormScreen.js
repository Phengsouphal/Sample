import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, TextInput, Dimensions, Image, Platform } from 'react-native'
import { Images, Colors, Fonts, Metrics } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Button from '../Components/Button';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class FormScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			phone: '',
			password: '',
			email: ''
		};
	}

	handleLogin = () => {

	}

	render() {
		const { username } = this.state
		return (
			<ScrollView style={{ backgroundColor: '#f2f2f2', }}>
				<View style={[styles.container, { paddingHorizontal: 30, }]}>


					<Text style={{ marginTop: 30, width: '100%', textAlign: 'left', color: '#e60000', fontWeight: 'bold', fontSize: 24, lineHeight: 25, }}>Create your  {"\n"}account</Text>
					<View style={{ marginTop: 30, width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
						<TextInput
							style={[styles.input,]}
							onChangeText={value => { this.setState({ username: value }) }}
							placeholder='Usernamne'
						/>
						<TextInput
							style={[styles.input, { marginTop: 20 }]}
							onChangeText={value => { this.setState({ username: value }) }}
							placeholder='Email'
						/>
						<TextInput
							style={[styles.input, { marginTop: 20 }]}
							onChangeText={value => { this.setState({ username: value }) }}
							placeholder='Password'
						/>
						<TextInput
							style={[styles.input, { marginTop: 20 }]}
							onChangeText={value => { this.setState({ username: value }) }}
							placeholder='Phone'
						/>
					</View>
					<View style={{ marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
						<Button text='Log in' backgroundColor={'#e60000'} color={'white'} onPress={this.handleLogin} />
					</View>
					<Text style={{ marginTop: 20, textAlign: 'center', width: '100%', fontSize: 12, lineHeight: 20 }}>
						By clicking Sign up you agree to the our Terms and Conditions
					</Text>

					<View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', }}>
						<Text style={{ marginRight: 10, }}>Already have an account?</Text>
						<TouchableOpacity>
							<Text style={{ fontWeight: 'bold', color: '#e60000' }}>Log in</Text>
						</TouchableOpacity>
					</View>

				</View>
			</ScrollView>
		)
	}
}

export default connect(null, null)(FormScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	input: {
		color: Colors.activeMainTextColor,
		backgroundColor: 'white',
		height: 45,
		padding: 0,
		paddingLeft: 20,
		paddingRight: 5,
		borderRadius: 30,
		width: '100%',
	},
})


