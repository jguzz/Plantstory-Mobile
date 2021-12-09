import * as React from 'react';
import {StyleSheet, View, Text, Button, SafeAreaView} from 'react-native'

// Used for page naviagation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Containers
import Welcome from './components/welcome/Welcome';

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const MainFeed = ({ navigation, route }) => {
  return <Text>This is the {route.params.name}.</Text>;
};

const Login = ({ navigation, route }) => {
  return <Text>This is the {route.params.name}.</Text>;
};

const SignUp = ({ navigation, route }) => {
  return <Text>This is {route.params.name}.</Text>;
};

const App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Welcome}
            options={{ title: 'PlantStory' }}
          />
          <Stack.Screen name="MainFeed" component={MainFeed}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;