import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
function Cau1b() {
    return ( 
        <View style={styles.background2}>
            <View style={styles.img1}>
                <Image style={styles.img2} source={{ uri: 'https://cdn.pixabay.com/photo/2023/06/05/09/12/security-8041759_1280.png' }} />
            </View>
        
            <Text style={styles.text1}>FORGET
            <br />PASSWORD</Text>
            
            <Text style={styles.text2}>Provide your account's email for which you 
            <br /> want to reset your password</Text>

            <View style={styles.setbutton2}>
                <TouchableOpacity style={styles.button3}>
                <Image style={styles.img3} source={{ uri: 'https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg' }} />
                    <Text style={styles.text3}>Email</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.setbutton}>
                <TouchableOpacity style={styles.button2}>   
                    <Text style={styles.text3}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
export default FirstScreen
//export default Cau1a
//export default Cau1b

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
    img1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
    },
    img2: {
        width: '100px',
        height: '100px',
    },
    img3: {
        width: '50px',
        height: '50px',
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50px',
        marginLeft: '50px',
        marginRight: '50px'
    },
    setbutton2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
    },
    button: {
        backgroundColor: '#efba26',
        width: '45%',
        padding: '10px',
    },
    button2: {
        backgroundColor: '#efba26',
        width: '100%',
        padding: '10px',
        marginTop:'50px',
        justifyContent: 'center',
        display: 'flex',
    },
    button3: {
        width: '75%',
        height: 50,
        backgroundColor: '#c4c4c4',
        display: 'flex',
        flexDirection: 'row',
    },
    
})
