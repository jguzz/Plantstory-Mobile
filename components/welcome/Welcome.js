/*  ==== WELCOME ====
* The welcome page when the application is first open if not signed in.
* Navigation tabs for main feed, login, create an account.
*/
//Imports
import React from "react";
import {ImageBackground, Button, StyleSheet,Text, TouchableOpacity} from 'react-native'

//==IMG== Photo of monstera plant used for background of welcome screen
import monsteraBackground from './images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg';

const Welcome = ({ navigation }) => {

  const welcomeTitle = "Welcome to PlantStory";
  const welcomeBody = "A social media plantfrom aimed at sharing the growth of your plants with the world!";
    return (
      <>
        <ImageBackground source={monsteraBackground} resizeMode="cover" style={styles.image}>
        {/* <Image source={require('./images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg')} style={styles.img}/> */}
        <Text style={styles.title}>{welcomeTitle}</Text>
        <Text style={styles.body}>{welcomeBody}</Text>
        <>
          <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('MainFeed', { name: 'Main Feed' })
          }
          >
            <Text style={styles.buttonText}>Main Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Login', { name: 'Login' })
          }
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Sign Up', { name: 'Create Account' })
          }
          >
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
        </>
        </ImageBackground>
      </>
    );
  };

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
    title: {
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 10,
    },
    body: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      paddingBottom: 20
    },
    button: {
      alignItems: "center",
      backgroundColor: "rgba(239, 239, 239, 0.7)",
      padding: 10,
      margin: 20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      opacity: 5,
    },
    buttonText: {
      fontSize: 20,
    }
    
  });


export default Welcome;