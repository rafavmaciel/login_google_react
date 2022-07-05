import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import UserContext from '../context/UserContext';
import ModalDropdown from 'react-native-modal-dropdown';


export default function ProfileButton(props) {
  const {user, logout } = useContext(UserContext);  

  async function getSelecao(id) {
    if (id == 0) {
      await logout();
    } else {
      return 'Selecionar';
    }
  }

  return (
    <ModalDropdown options={['opção 1', 'option 2']} 
    dropdownStyle ={{borderRadius:10 }}
    onSelect={index => getSelecao(index)}>
      <Image source={{uri: user.profilePhoto}} style={styles.profile} />
    </ModalDropdown>
  );
}
