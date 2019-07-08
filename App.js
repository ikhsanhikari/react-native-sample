import React from "react";
import { View, Text , Button} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Friends from "./src/friends";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Details"
          onPress={() =>
            this.props.navigation.navigate('Details')
          }
        />
        <Button
          title="Friend"
          onPress={() =>
            this.props.navigation.navigate('Friend')
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
      
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    
  },
  Details:{
    screen: DetailsScreen
  },
  Friend:{
    screen: Friends
  }
});

export default createAppContainer(AppNavigator);

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// class Hikari extends Component {
//   render(){
//     return (
//       <View style={{alignItems: 'center', top: 100}}>
//         <Text>
//             Hikari Function {this.props.test}
//         </Text>
//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting />
//         <Hikari test='Test Content'/>
//       </View>
//     );
//   }
// }