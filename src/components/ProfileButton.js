import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image,Text} from 'react-native';
import styles from './styles';
import UserContext from '../context/UserContext';
import { TooltipMenu } from 'react-native-tooltip-menu';

export default function ProfileButton(props) {
  const {user} = useContext(UserContext);
  console.log('profile' + user.profilePhoto);
  return (
    <TooltipMenu
      items={[
        {
          label: 'Label #1',
          onPress: () => {}
        },
        {
          label: 'Label #2',
          onPress: () => {console.log('Label #2 pressed')}
        },
      ]}
    >
      <Image source={{uri: user.profilePhoto}} style={styles.profile} />
    </TooltipMenu>
  );
}
