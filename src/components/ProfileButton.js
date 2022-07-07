import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import UserContext from '../context/UserContext';
import ModalDropdown from 'react-native-modal-dropdown';


export default function ProfileButton(props) {
  const {state, dispatch } = useContext(UserContext);  

  function handleLogout() {
    dispatch({type: 'LOGOUT'});
  }

  async function getSelecao(id) {
    if (id == 0) {
      return handleLogout();
    } else {
      return 'Selecionar';
    }
  }

  return (
    <ModalDropdown options={['logout', 'option 2']} 
    dropdownStyle ={{borderRadius:10 }}
    onSelect={index => getSelecao(index)}>
      <Image source={{uri: state.profilePhoto}} style={styles.profile} />
    </ModalDropdown>
  );
}
