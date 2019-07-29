import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Audio} from 'expo';

const listBackgroundColor ={

  1 :"#01CBC6",
  2 :"#99AAAB",
  3 :"#EEC213",
  4 :"#45CE30",
  5 :"#25CCF7",
  6 :"#2475B0",
  7 :"#E71C23",
  8 :"#4834DF",
  9 :"#2C3335",
  10 :"#2F363F"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')

}
export default class App extends React.Component {
  
  // function to play sound

  playSound = async number => {

    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then(async playbackStatus=>{
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })   
        .catch(error=>{
          console.log(error)
        })
    }
     catch (error) {
      console.log(error)
    }

  };


  render(){
  return (
    <ScrollView style={styles.container}>
     <View style={styles.gridContainer}>
      <Image
      style ={styles.logo}
      source = {require('./assets/logo.png')}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[1]},styles.item]}
        onPress={()=>{
          this.playSound("one")
        }}
        >
          <Text style={styles.itemText}>One</Text>
        </TouchableOpacity>

        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[2]},styles.item]}
        onPress={()=>{
          this.playSound("two")
        }}
        >
          <Text style={styles.itemText}>two</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[3]},styles.item]}
        onPress={()=>{
          this.playSound("three")
        }}
        >
          <Text style={styles.itemText}>three</Text>
        </TouchableOpacity>

        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[4]},styles.item]}
        onPress={()=>{
          this.playSound("four")
        }}
        >
          <Text style={styles.itemText}>four</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[5]},styles.item]}
        onPress={()=>{
          this.playSound("five")
        }}
        >
          <Text style={styles.itemText}>five</Text>
        </TouchableOpacity>

        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[6]},styles.item]}
        onPress={()=>{
          this.playSound("six")
        }}
        >
          <Text style={styles.itemText}>six</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[7]},styles.item]}
        onPress={()=>{
          this.playSound("seven")
        }}
        >
          <Text style={styles.itemText}>seven</Text>
        </TouchableOpacity>

        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[8]},styles.item]}
        onPress={()=>{
          this.playSound("eight")
        }}
        >
          <Text style={styles.itemText}>eight</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[9]},styles.item]}
        onPress={()=>{
          this.playSound("nine")
        }}
        >
          <Text style={styles.itemText}>nine</Text>
        </TouchableOpacity>

        <TouchableOpacity

        style={[{backgroundColor:listBackgroundColor[10]},styles.item]}
        onPress={()=>{
          this.playSound("ten")
        }}
        >
          <Text style={styles.itemText}>ten</Text>
        </TouchableOpacity>

      </View>



      

     </View>

    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  gridContainer:{
    flex:1,
    margin: 5
  },
  logo:{
    alignSelf:"center",
    marginTop:15
  },
  rowContainer:{
    flexDirection:"row",

  },
  item:{
      flex:1,
      height:110,
      alignItems:"center",
      justifyContent:"center",
      margin:2
  },
  itemText:{
    color:"#fff",
    fontSize: 20

  }
});
