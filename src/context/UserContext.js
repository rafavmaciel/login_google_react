import React, {createContext, useState, useReducer} from 'react';

import {GoogleSignin,statusCodes,} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
  '199906004019-mufl01heq4tdg71mdfs7kvar99b3spks.apps.googleusercontent.com',
});

const initialEstate = {
  uid: '',
  name: '',
  profilePhoto: '',
  auth: true
}

const UserContext = createContext({});

export const UserProvider = ({children}) => {
  
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          ...action.payload
        }
      case 'LOGOUT':
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
        return {
          ...state,
          ...initialEstate
        }
      default:
        return state;
    }
  }

  // const isSignedIn =() => {
  //   if(user.auth === true){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  // const login = (uid, name, profilePhoto) => {
  //   setUser(user => ({
  //     uid: uid,
  //     name: name,
  //     profilePhoto: profilePhoto,
  //     auth: true,
  //   }));
  //   console.log(user);
  // };

  // // Logout updates the user data to default
  // const logout = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     setUser(user => ({
  //       name: '',
  //       auth: false,
  //     }));
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, initialEstate);
  return (
    <UserContext.Provider value={{state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
