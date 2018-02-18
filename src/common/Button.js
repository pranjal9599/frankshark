import React, { Component } from 'react';
import { View ,Text, TouchableNativeFeedback, StyleSheet, Image } from 'react-native';
import gmail from './../gmail.png';

export default class Button extends Component {
	render() {
		return (
			<View>
			 <TouchableNativeFeedback
        onPress={this.props.onPressButton}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{ backgroundColor: 'rgba(255,255,255,0.9)',
      					paddingTop:20,
      					paddingBottom: 20,
      					paddingLeft: 40,
      					paddingRight: 40,
      					borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
      		 			display: 'flex', flexDirection: 'row' }}>
        <Image source={gmail} style={{ width: 32, height: 32}}/>
        <Text style={{fontSize: 18, marginLeft: 25}}>Login With Google</Text>
      </View>
    </TouchableNativeFeedback>
			</View>
		)
	}
}
