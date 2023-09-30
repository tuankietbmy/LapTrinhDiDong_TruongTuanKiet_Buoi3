import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';


function FirstScreen() {
  return ( 
      <View style={styles.background1}>

        <View style={styles.circle2}>
          <View style={styles.circle}></View>
        </View>

          <Text style={styles.text1}>GROW
          <br /> YOUR BUSINESS</Text>

          <Text style={styles.text2}>We will help you to grow your business using 
          <br /> online server</Text>
          
          <View style={styles.setbutton}>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.text3}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.text3}>SIGNUP</Text>
              </TouchableOpacity>
          </View>
      </View>
   );
}

function Cau1a() {
    return ( 
        <View style={styles.background2}>

          <View style={styles.circle2}>
            <View style={styles.circle}></View>
          </View>

            <Text style={styles.text1}>GROW
            <br /> YOUR BUSINESS</Text>

            <Text style={styles.text2}>We will help you to grow your business using 
            <br /> online server</Text>
            
            <View style={styles.setbutton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text4}>HOW WE WORK</Text>
        </View>
     );
}

export default FirstScreen

const styles = StyleSheet.create({
     background1: {
        backgroundColor: '#51c5ff',
        width: '100%',
        height: '100%',
    },
    background2: {
        backgroundImage: 'linear-gradient(#cefffe 85%, #51c5ff 100%)',
        width: '100%',
        height: '100%',
    },
    circle2: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
      width: 150,
      height: 150,
      borderColor: 'black', /* Màu viền */
      borderWidth: 10, /* Độ dày của viền */
      borderRadius: 75,
    },
    text1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        marginTop: '50px',
    
    },
    text2: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: '15px',
        marginTop: '50px',
    },
    text3: {
      fontWeight: 800,
      fontSize: '25px',
      textAlign: 'center',   
    },
    text4: {
      fontSize: '25px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    setbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50px',
        marginLeft: '50px',
        marginRight: '50px'
    },
    button: {
        backgroundColor: '#efba26',
        width: '45%',
        padding: '10px',
    },
    
})