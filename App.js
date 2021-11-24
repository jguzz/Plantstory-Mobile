import React from "react";
import {View, Text} from 'react-native'

const App = () => {

  state = {
    // ==== Seeded through the backend api ====
    users: [],
    plants: [],
    stories: [],
    collections: [],
    likes: [],
    posts: [],
    comments: [],
    // ==== Auth/User data ====
    username: "",
    password: "",
    currentUser: {},
    currentAvatar: null,
    userStories: [],
    userCollections: [],
    userPosts: [],
    // sign up
    name: '',
    email: '',
    passwordConfirm: '',

    // ==== Create ====
    // Collection
    collectionName: "",
    collectionDescription: "",
    // Story
    plantNickname: "",
    acquiredOn: '03/21/1997',
    commonName: "",
    latinName: "",
    collectionID: '',
    // Post
    photo: {},
    caption: "",
    storyId: '',
    // Comment
    commentPostId: null,
    comment: '',
    // Search
    searchTerm: '',
    //Stepper
    activeStep: 0,
  };
  
  return (
    <View>
      <Text>
        Plant Story
      </Text>
    </View>
  )
}

export default App;