import React, {createContext, useState} from 'react';

const UserContext = createContext({name: '', auth: false});
import {GoogleSignin,statusCodes,} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '199906004019-mufl01heq4tdg71mdfs7kvar99b3spks.apps.googleusercontent.com',
});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    uid: '',
    name: '',
    profilePhoto: '',
    auth: true,
  });

  const isSignedIn =() => {
    if(user.auth === true){
      return true;
    }
    else{
      return false;
    }
  }
  const login = (uid, name, profilePhoto) => {
    setUser(user => ({
      uid: uid,
      name: name,
      profilePhoto: profilePhoto,
      auth: true,
    }));
    console.log(user);
  };

  // Logout updates the user data to default
  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(user => ({
        name: '',
        auth: false,
      }));
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{user, login, logout, isSignedIn}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
