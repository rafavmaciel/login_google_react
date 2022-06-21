import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity ,ScrollView} from "react-native";
import styles from "./style";

export default function Details({ navigation, route }) {
    const [task, setTask] = useState(route.params);
    return (
        <View style={styles.container}>
            <TouchableOpacity style= {styles.titleTask}>
                <Text style= {styles.textTask} > Tarefa: {task.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.dataTask}>
                <Text style= {styles.textTaskConc} >Data de criação: {task.date}</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {task.status ? styles.statusCheckTask: styles.statusPensdingTask}>
                <Text style= {task.status ? styles.textTaskConc: styles.textPendingTask} >Status: {task.status ? "Concluida" : "Pendente"    }</Text>
            </TouchableOpacity>
        </View>
    );
}
