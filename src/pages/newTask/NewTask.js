import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import Calendar from "../../components/Calendar";

export default function NewTask({ route, navigation }) {
    const userId = route.params.userId;
    const [description, setDescription] = useState("");
    const database = firebase.firestore();
    const [date, setDate] = useState("");

    function getDate(dateTime) {
        setDate(dateTime);
    }

    function formatDate() {
        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = dia.length == 1 ? "0" + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = mes.length == 1 ? "0" + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    function addTask() {
        // cria uma coleção Users com doc(objetos) com o id do usuario e dentro deles uma coleção Tasks
        let tarefa = database
            .collection("Users")
            .doc(userId)
            .collection("Tasks")
            .add({
                description: description,
                date: date,
                status: false,
                createdAt: formatDate(),
                updatedAt: formatDate(),
            })
            .then(() => {
                navigation.navigate("Task", { userId: userId });
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicinonar nova tarefa</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ex: Lavar o carro"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity
                style={styles.bottonNewTask}
                onPress={() => {
                    addTask();
                }}
            >
                <FontAwesome5 name="plus" size={20} color="#fff" />
            </TouchableOpacity>
            <Calendar style={styles.calendar} getDate={getDate} />
        </View>
    );
}
