import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "../../config/firebase";
import styles from "./style";

export default function Task({ route, navigation }) {
    const userId = route.params.userId;
    const database = firebase.firestore();
    const [task, setTask] = useState([]);

    function deleteTask(id) {
        database.collection("Users").doc(userId).collection("Tasks").doc(id).delete();
    }

    function markAsdone (id, status) {
        database.collection("Users").doc(userId).collection("Tasks").doc(id).update({
            status: status? false : true
        })
    }

    function renderizarListaTasks(item) {
        return (
            <View style={styles.Tasks}>
                <TouchableOpacity
                    style={styles.deleteTask}
                    onPress={() => {
                        deleteTask(item.id);
                    }}
                >
                    <FontAwesome5 name="trash-alt" size={20} color="#f5fffb" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteTask} onPress={() => markAsdone(item.id, item.status) }>
                    <FontAwesome5 name="check" size={20} color="#f5fffb" />
                </TouchableOpacity>

                <Text
                    style={item.status? styles.descriptionTextAsDone: styles.descriptionText}
                    onPress={() => {
                        navigation.navigate("Details", {
                            id: item.id,
                            description: item.description,
                            date: item.date,
                            status: item.status,
                        });
                    }}
                >
                    {item.description}
                </Text>
            </View>
        );
    }

    useEffect(() => {
        database
            .collection("Users").doc(userId).collection("Tasks")           
            .orderBy("createdAt", "desc")
            .onSnapshot((query) => {
                const list = [];
                query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setTask(list);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return renderizarListaTasks(item);
                }}
            />
            <TouchableOpacity
                style={styles.bottonNewTask}
                onPress={() => navigation.navigate("NewTask", {userId: userId})}
            >
                <Text styles={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
