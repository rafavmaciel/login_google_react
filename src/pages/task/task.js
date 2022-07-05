import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import UserContext from '../../context/UserContext';

export default function Task({route, navigation}) {
  const userId = route.params.user.uid
    ? route.params.user.uid
    : route.params.user;
  const database = firestore();
  const [task, setTask] = useState([]);
  const {isSignedIn, user } = useContext(UserContext);  
  

  function deleteTask(id) {
    database
      .collection('Users')
      .doc(userId)
      .collection('Tasks')
      .doc(id)
      .delete();
  }

  function markAsdone(id, status) {
    database
      .collection('Users')
      .doc(userId)
      .collection('Tasks')
      .doc(id)
      .update({
        status: status ? false : true,
      });
  }

  function renderizarListaTasks(item) {
    return (
      <View style={styles.Tasks}>
        <TouchableOpacity
          style={styles.deleteTask}
          onPress={() => {
            deleteTask(item.id);
          }}>
          <Icon name="delete" size={25} color="#f5fffb" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteTask}
          onPress={() => markAsdone(item.id, item.status)}>
          <Icon name="done-outline" size={25} color="#f5fffb" />
        </TouchableOpacity>

        <Text
          style={
            item.status ? styles.descriptionTextAsDone : styles.descriptionText
          }
          onPress={() => {
            navigation.navigate('Details', {
              id: item.id,
              description: item.description,
              date: item.date,
              status: item.status,
            });
          }}>
          {item.description}
        </Text>
      </View>
    );
  }

  useEffect(() => {

    //let {user } = useContext(UserContext);  
    if(user.isSignedIn === false){
      console.log('Não logado');
      navigation.navigate('Login');
    }
    database
      .collection('Users')
      .doc(userId)
      .collection('Tasks')
      .orderBy('createdAt', 'desc')
      .onSnapshot(query => {
        const list = [];
        query.forEach(doc => {
          list.push({...doc.data(), id: doc.id});
        });
        setTask(list);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({item}) => {
          return renderizarListaTasks(item);
        }}
      />
      <TouchableOpacity
        style={styles.bottonNewTask}
        onPress={() => navigation.navigate('NewTask', {userId: userId})}>
        <AntIcon name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  // return(
  //     <View>
  //         <Text> tela de tarefas </Text>
  //     </View>
  // )
}
