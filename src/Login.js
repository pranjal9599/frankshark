import React, { Component } from 'react';
import { View, Text, Image, Animated, StyleSheet, 
			Dimensions, ImageBackground,Alert,
			StatusBar } from 'react-native';
import Button from './common/Button.js';
import bg from './gmail.png';


const { height, width } = Dimensions.get('window');

export default class Login extends Component {
	constructor(props) {
		super(props);
	}
	login() {
		Alert.alert('lLERT');
		// var provider = new firebase.auth.GoogleAuthProvider();

		// Alert.alert(provider.stringify());

		// firebase.auth().signInWithPopup(provider).then(function(result) {
		//   // This gives you a Google Access Token. You can use it to access the Google API.
		//   Alert.alert(111);
		//   var token = result.credential.accessToken;
		//   // The signed-in user info.
		//   var user = result.user;
		//   Alert.alert(user.stringify);
		//   // ...
		// }).catch(function(error) {
		//   // Handle Errors here.
		//   var errorCode = error.code;
		//   var errorMessage = error.message;
		//   // The email of the user's account used.
		//   var email = error.email;
		//   // The firebase.auth.AuthCredential type that was used.
		//   var credential = error.credential;
		//   // ...
		// });

		Alert.alert(firebase.name);
	  	var database = firebase.database();


	}
	render() {
		return (
			<View style={styles.container}>
			   <StatusBar
			     backgroundColor={'transparent'}
			     barStyle="light-content"
			     translucent={true}
			   />
				<Image source={{ uri: 'https://source.unsplash.com/random'}}  style={styles.bg}/>

				<View style={styles.content}>
					<Text style={ styles.title }>Travel Safe</Text>
					{this.props.children}
				</View>


			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	bg: {
		resizeMode: Image.resizeMode.cover,
		height: height,
		width: width
	},
	content: {
		zIndex: 100,
		position: 'absolute',
		width: width,
		height: height,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: 30
	},
	title: {
		color: '#fff',
		fontSize: 70,
		fontWeight: '700',
		fontFamily: 'cursive',
		textAlign: 'center'
	}
})