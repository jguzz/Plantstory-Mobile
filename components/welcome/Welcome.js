/*  ==== WELCOME ====
* The welcome page when the application is first open if not signed in.
* Navigation tabs for main feed, login, create an account.
*/
//Imports
import React from "react";
import {ImageBackground, Button, StyleSheet,Text} from 'react-native'

//==IMG== Photo of monstera plant used for background of welcome screen
import monsteraBackground from './images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg';

const Welcome = ({ navigation }) => {

  const welcomeTitle = "Welcome";
  const welcomeBody = "A social media plantfrom aimed at sharing the growth of your plants with the world!";
    return (
      <>
        <ImageBackground source={monsteraBackground} resizeMode="cover" style={styles.image}>
        {/* <Image source={require('./images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg')} style={styles.img}/> */}
        <Text style={styles.title}>{welcomeTitle}</Text>
        <Text style={styles.body}>{welcomeBody}</Text>
        <>
          <Button
          title="Go to Main Feed"
          onPress={() =>
            navigation.navigate('MainFeed', { name: 'Main Feed' })
          }
          />
          <Button
          title="Login"
          onPress={() =>
            navigation.navigate('Login', { name: 'Login' })
          }
          />
          <Button
          title="Create An Account"
          onPress={() =>
            navigation.navigate('Sign Up', { name: 'Create Account' })
          }
          />
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
    },
    body: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      paddingBottom: 20
    }
  });


export default Welcome;