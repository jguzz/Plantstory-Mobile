/*  ==== WELCOME ====
* The welcome page when the application is first open if not signed in.
* Navigation tabs for main feed, login, create an account.
*/
//Imports
import React from "react";
import {ImageBackground, Image, Button, StyleSheet} from 'react-native'

//==IMG== Photo of monstera plant used for background of welcome screen
import monsteraBackground from './images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg';

const Welcome = ({ navigation }) => {
    return (
      <>
        <ImageBackground source={monsteraBackground} resizeMode="cover" style={styles.image}>
        {/* <Image source={require('./images/gilles-lambert-mSK5nNsAsLY-unsplash.jpg')} style={styles.img}/> */}
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
        </ImageBackground>
      </>
    );
  };

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });


export default Welcome;