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

class ListScreenTow extends Component {
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

	renderFoodType = ({ item, index }) => {
		return (
			<Ripple onPress={() => this._handleNextScreen()} style={{ width: 250, height: 200, justifyContent: 'center', alignItems: 'center', marginLeft: index == 0 ? 15 : 0, marginRight: 15, marginBottom: 10, marginTop: 5, }}>
				<View style={{ height: '92%', width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, }}>
					<Image source={{ uri: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg' }} style={{ borderRadius: 15, height: '85%', width: '100%', resizeMode: 'stretch' }} />
					<Text style={{ height: '15%', textAlign: 'left', width: '100%', marginTop: 10, fontWeight: 'bold', fontSize: 15 }}>{item.title} Star Cafe {index}</Text>
				</View>
				<View style={{ height: '8%', width: '100%', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ color: '#a6a6b0', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>Cate Western Food * $$ </Text>
					<Icon type="AntDesign" name='star' style={{ color: '#e60000', marginRight: 5, fontSize: 15, fontWeight: 'bold', }} />
					<Text style={{ color: '#e60000', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>4.9 </Text>
				</View>
			</Ripple>
		)
	}

	renderList = ({ item, index }) => {
		return (
			<TouchableOpacity style={{ flex: 1, width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10, paddingLeft: 15, marginLeft: 10 }}>
				<View style={{  height: '100%', width: '25%', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
					<Image source={{ uri: 'https://i.insider.com/5c12707fa9054802da0ee156?width=1100&format=jpeg&auto=webp' }} style={{ borderRadius: 35, height: '100%', width: '100%', resizeMode: 'stretch' }} />
				</View>
				<View style={{ height: '100%', width: '80%', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10 }}>
					<Text style={{ textAlign: 'left', width: '100%', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>{item.title} Star Cafe {index}</Text>
					<Text style={{ width: '100%', color: '#a6a6b0', textAlign: 'left', fontWeight: '500', fontSize: 12 }}>Cate Western Food * $$ </Text>
					<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
						<Icon type="AntDesign" name='star' style={{ color: '#e60000', marginRight: 5, fontSize: 15, fontWeight: 'bold', }} />
						<Text style={{ color: '#e60000', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>4.9 </Text>
						<Text style={{ color: '#a6a6b0', textAlign: 'center', fontWeight: '500', fontSize: 12 }}>(124 ratings) </Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	renderSeparatorView = () => {
		return (
		  <View style={{
			  marginLeft: 10,
			  marginRight: 10,
			  height: 1, 
			  width: '88%',
			  backgroundColor: "#CEDCCE",
			}}
		  />
		);
	  };

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
				<View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10, }}>
					<Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 18, color: '#e60000' }}>
						Popular Choices
					</Text>
					<TouchableOpacity>
						<Text style={{ color: '#a6a6b0', textAlign: 'left', fontWeight: '500', fontSize: 12 }}>Show all</Text>
					</TouchableOpacity>

				</View>
				<View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
					<FlatList
						horizontal
						// pagingEnabled={true}
						showsHorizontalScrollIndicator={false}
						data={list}
						renderItem={item => this.renderFoodType(item)}
						keyExtractor={list => list.id}
					/>
				</View>
				<View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10, marginBottom: 5 }}>
					<Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 18, color: '#e60000' }}>
						New Restaurants
					</Text>
					<TouchableOpacity>
						<Text style={{ color: '#a6a6b0', textAlign: 'left', fontWeight: '500', fontSize: 12 }}>Show all</Text>
					</TouchableOpacity>

				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<FlatList
						style={{ paddingTop: 10 }}
						// pagingEnabled={true} 
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 10 }}
						ItemSeparatorComponent={this.renderSeparatorView}
						data={list}
						renderItem={item => this.renderList(item)}
						keyExtractor={list => list.id}
					/>
				</View>


			</View>
		)
	}
}

export default connect(null, null)(ListScreenTow)

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


