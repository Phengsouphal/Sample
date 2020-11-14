import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, PermissionsAndroid, Dimensions, Image, Platform, FlatList, TouchableOpacity } from 'react-native'
import { Images, Colors, Fonts } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Icon } from 'native-base';
import Ripple from 'react-native-material-ripple';
import {getDistance, getPreciseDistance} from 'geolib';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			version: '',
			progress_bar: 0,
			data: [
				{ title: 'Swipe', screenName: 'HomeSwipeScreen' },
				{ title: '', screenName: '' },
			],

			dataPolyLine: [
				{
					polyLines: [
						{ lat: 11.533172, long: 11.533172 },
						{ lat: 11.534475, long: 104.82007 },
						{ lat: 11.540404, long: 11.533172 },
						{ lat: 11.533172, long: 104.819169 },
						{ lat: 11.541329, long: 104.819984 },
						{ lat: 11.543558, long: 104.822602 },
					]
				},
				{
					polyLines: [
						{ lat: 11.370992, long: 105.009384 },
						{ lat: 11.40061, long: 105.001144 },
						{ lat: 11.414071, long: 105.009384 },
						{ lat: 11.416764, long: 105.042343 },
						{ lat: 11.462528, long: 105.039597 },
						{ lat: 11.455798, long: 104.991531 },
					]
				},
				{
					polyLines: [
						{ lat: 13.31745245513246, long: 103.8511462336156 },
						{ lat: 13.31730113461504, long: 103.8519698048814 },
						{ lat: 13.31731824752412, long: 103.8525900385697 },
						{ lat: 13.31733262395881, long: 105.042343 },
						{ lat: 13.31756478945309, long: 103.8536594850643 },
					]
				},
			]
		};
	}

	componentDidMount() {

		this.state.dataPolyLine.map((userData) => {
			var disdd = []
			userData.polyLines.map((each) => {
				var dis = getDistance(
					{latitude: 13.41745245514000, longitude: 103.8511462336200},
					{latitude: each.lat, longitude: each.long}
				  );
		
				  disdd.push(dis)
			});
			console.tron.log(disdd);
			const min = Math.min(...disdd)
			console.tron.log(min);

		});
	}

	_handleNextHomeScreen = (screenName) => {
		if(Actions.currentScene == 'HomeScreen') {
			console.tron.log(screenName)
			Actions.reset(screenName);
		}
	}
	renderView = ({ item, index }) => {
		return (
			<Ripple onPress={() => this._handleNextHomeScreen(item.screenName)} style={{
				flex: 1, backgroundColor: 'white', height: 150, margin: 20, justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,

				elevation: 5,
			}}>
				<Icon type={'Entypo'} name={'app-store'} style={{ color: '#2ad9b2', fontSize: 40, }} />
				<Text style={{ width: '100%', textAlign: 'center', color: '#a6a6b0', fontWeight: '700', }}>{item.title} </Text>
			</Ripple>
		)
	}


	render() {
		const { data } = this.state

		return (

			<View style={styles.container}>
				<FlatList
					style={{ paddingHorizontal: 20, paddingVertical: 10 }}
					numColumns={2}
					data={data}
					renderItem={this.renderView}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		)
	}
}

export default connect(null, null)(HomeScreen)

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'flex-start',
	},


})


