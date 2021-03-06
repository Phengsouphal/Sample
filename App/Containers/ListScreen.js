import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, PermissionsAndroid, Dimensions, Image, Platform, TextInput } from 'react-native'
import { Images, Colors, Fonts, Metrics } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Icon, Container, Content } from 'native-base'
import Ripple from 'react-native-material-ripple';
import colors from '../Themes/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			version: '',
			progress_bar: 0,
			phoneNumber: '',
			list: [
				{ title: 'Gift', image: Images.gift },
				{ title: 'Buger', image: Images.buger },
				{ title: 'Pizza', image: Images.pizza },
				{ title: 'Chicken', image: Images.chicken },
				{ title: 'Buger', image: Images.buger },
				{ title: 'Pizza', image: Images.pizza },
			]
		};
		this.intervalID = 0;
	}

	_handleNextScreen = () => {
		if (Actions.currentScene == 'ListScreen') {
			Actions.ListScreenTow();
		}
	}

	renderFoodType = ({ item, index }) => {
		return (
			<Ripple onPress={() => this._handleNextScreen()} style={{ width: 80, height: 100, justifyContent: 'center', alignItems: 'center', marginRight: index == this.state.list.length-1 ? 0 : 15, marginBottom: 10, marginTop: 5, }}>
				<View style={{ borderRadius: 10, width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.main }}>
					<Image source={item.image} style={{ height: 70, width: 70 }} />
				</View>
				<Text style={{ textAlign: 'center', width: '100%', marginTop: 5, fontWeight: '500', fontSize: 12 }}>{item.title}</Text>
			</Ripple>
		)
	}

	renderList = ({ item, index }) => {
		return (
			<TouchableOpacity style={{ flex: 1, width: '100%', height: 250, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, marginTop: index == 0 ? 0 : 10, }}>
				<View style={{ height: '92%', width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, }}>
					<Image source={{ uri: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg' }} style={{ borderRadius: 15, height: '85%', width: '100%', resizeMode: 'stretch' }} />
					<Text style={{ height: '15%', textAlign: 'left', width: '100%', marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>{item.title} Star Cafe</Text>
				</View>
				<View style={{ height: '8%', width: '100%', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
					<Icon type="AntDesign" name='star' style={{ color: '#e60000', marginRight: 5, fontSize: 15, fontWeight: 'bold', }} />
					<Text style={{ color: '#e60000', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>4.9 </Text>
					<Text style={{ color: '#a6a6b0', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>(124 ratings) </Text>
					<Text style={{ color: '#a6a6b0', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>Cate Western Food * $$ </Text>
				</View>
				<View style={{ opacity: 0.7, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 20, bottom: '30%', backgroundColor: 'white', borderRadius: 20 }}>
					<Text style={{ fontSize: 12, textAlign: 'center' }}>20 - 30 mins</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render() {

		const { list } = this.state
		return (

			<View style={styles.container}>
				<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 10 }}>
					<View style={{ height: 40, borderRadius: 20, paddingHorizontal: 10, width: '85%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
						<Icon type="FontAwesome" name='search' style={{ color: '#4D4646', marginLeft: 5, fontSize: 15, fontWeight: 'bold', }} />
						<TextInput
							// autoFocus
							style={[styles.input,]}
							onChangeText={value => { this.setState({ phoneNumber: value }) }}
							placeholder='Search'
						// placeholderTextColor={Colors.activeMainTextColor}
						// keyboardType='numeric'
						// maxLength={10}
						/>
					</View>
					<Ripple rippleDuration={600} style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'center' }} >
						<Icon type="Entypo" name={'list'} style={{ color: '#4D4646', fontSize: 25, marginRight: 5, }} />
					</Ripple>
				</View>
				<View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}>
					<FlatList
						horizontal
						// pagingEnabled={true}
						showsHorizontalScrollIndicator={false}
						data={list}
						renderItem={item => this.renderFoodType(item)}
						keyExtractor={list => list.id}
					/>
				</View>
				<View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
					<FlatList
						style={{ width: '100%', marginBottom: 20, paddingTop: 10 }}
						// pagingEnabled={true}
						contentContainerStyle={{ paddingBottom: 190 }}
						showsHorizontalScrollIndicator={false}
						data={list}
						renderItem={item => this.renderList(item)}
						keyExtractor={list => list.id}
					/>
				</View>


			</View>
		)
	}
}

export default connect(null, null)(ListScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'flex-start',
	},

	input: {
		color: Colors.activeMainTextColor,
		height: 40,
		padding: 0,
		paddingHorizontal: 5,
		width: '95%',
		paddingLeft: Metrics.baseMargin,
	},

})


