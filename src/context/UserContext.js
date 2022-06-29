import React, {createContext, useState} from 'react';

const UserContext = createContext({name: '', auth: false});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    uid: '',
    name: '',
    profilePhoto: '',
    auth: true,
  });

  const login = (uid, name, profilePhoto) => {
      setUser((user) => ({
          uid: uid,
          name: name,
          profilePhoto: profilePhoto,
          auth: true,
        }));
    console.log(user)
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(user => ({
      name: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
