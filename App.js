/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import Login from './src/Login';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
      limits: 0,
      warning: false,
      decelaration: 0,
      speedLimit: 0,
      lat: 0,
      long: 0
    }
  }

  getSpeedLimit(lat, long) {

    fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false`).then((res) => {
      res.json((data) => {
        console.log(data);
      })
    });
  }

  componentDidMount() {
    let options = {
      enableHighAccuracy: true, timeout: 1000, distanceFilter:5
    }

    function accidentDetected() {
      Alert.alert(
      'Accident Detected',
      ' ',
      [
        {text: 'SOS', onPress: () => console.log('Ask me later pressed')},
        {text: 'Ignore', onPress: () => console.log('Cancel Pressed')},
      ],
      { cancelable: false }
    )

    }

    function pos() {
      navigator.geolocation.getCurrentPosition((position) => {

      let { latitude, longitude, speed } = position.coords;

      if (latitude == this.state.lat || longitude == this.state.long) {
        setTimeout(function() {
          console.log('Stopped for this sec');
        }, 4000);
      }

      if (this.state.speed != 0 || speed != 0) {
          let decelaration = ((speed*18/5 - this.state.speed)/5);
          this.setState({ decelaration });
          if (decelaration < -15)  {
            accidentDetected();
          }
      }
      //this.getSpeedLimit(position.coords.latitude, position.coords.longitude);


      this.setState({speed: Math.round(speed * 18/5)});
      this.setState({lat: latitude, long: longitude});

      console.log(this.state);
      if ( speed * 18/5 > 100) {
        this.setState({ warning: true });
      } else {
        this.setState({ warning: false });
      }

      }, function(error) {
        console.log(error);
      }, {enableHighAccuracy: true, timeout: 500, distanceFilter:1} );
    }
    pos.bind(this);
    setInterval(pos.bind(this), 500);
    //this.getSpeedLimit(this.state.lan, this.state.long);
    //setInterval(this.getSpeedLimit(this.state.lan, this.state.long), 20000);
  }

  render() {
    return (
      <Login>
        { !!this.state.warning && <Text style={styles.warning}>speed warning sending</Text>}

        <Text style={styles.welcome}>Speed: {this.state.speed}</Text>
        <Text style={styles.welcome}>Accelaration: {this.state.decelaration}</Text>
      </Login>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  warning: {
    textAlign: 'center',
    color: '#ED1C24',
    fontSize: 50
  }
});
