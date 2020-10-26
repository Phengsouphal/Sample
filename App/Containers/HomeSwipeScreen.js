import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, PermissionsAndroid, Dimensions, Image, Platform, FlatList, TouchableOpacity } from 'react-native'
import { Images, Colors, Fonts } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Icon } from 'native-base';
import Ripple from 'react-native-material-ripple';
import { getDistance, getPreciseDistance } from 'geolib';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Swiper from 'react-native-swiper'
import colors from '../Themes/Colors';

class HomeSwipeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			version: '',
			progress_bar: 0,
			data: [
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },
				{ title: '', screenName: '' },

			],

			images: [
				Images.image1, Images.image2, Images.image3, Images.image4
			],
		}
	}

	componentDidMount() {

	}

	_handleNextHomeScreen = () => {


	}

	renderView = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => this._handleNextHomeScreen()} style={{
				width: '30%', backgroundColor: 'white', height: 125, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#a6a6b0',
			}}>
				<View style={{width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center'}}>

				</View>
				<Text style={{textAlignVertical: 'center', height: '30%', width: '100%', textAlign: 'center', color: '#a6a6b0', fontWeight: '700', }}> Home {index} </Text>

			</TouchableOpacity>
		)
	}


	render() {
		const { images, data } = this.state
		return (
			<View style={styles.container}>
				<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
					<Swiper activeDotColor={colors.background}>
						{
							images.map((item, index) => {
								console.tron.log(item)
								return (
									<View style={styles.slide1}>
										<Image
											style={[styles.stretch,]}
											source={item} />
									</View>
								)
							})
						}
					</Swiper>
				</View>
				<View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap', paddingHorizontal: 10, marginTop: 10, }}>
					<FlatList
						columnWrapperStyle={{justifyContent:'space-between', }}
						numColumns={3}
						data={data}
						renderItem={this.renderView}
						keyExtractor={(item, index) => index.toString()}

					/>
					{/* {
						data.map((item, index) => {
							return (
								<TouchableOpacity onPress={() => this._handleNextHomeScreen()} style={{
									width: '30%', backgroundColor: 'white', height: 150, margin: 5, justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#a6a6b0',
								}}>
									<View style={{width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center'}}>

									</View>
									<Text style={{ height: '30%', width: '100%', textAlign: 'center', color: '#a6a6b0', fontWeight: '700', }}> Home {index} </Text>

								</TouchableOpacity>
							)
						})
					} */}
				</View>

			</View>
		)
	}
}

export default connect(null, null)(HomeSwipeScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'flex-start',
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	stretch: {
		width: '100%',
		height: '100%',
	},
	wrapper: {
		borderRadius: 20
	}

})


