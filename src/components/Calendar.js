import React, { useState } from "react";
import { View, TouchableOpacity,Text } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Calendar(props) {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const onCancel = () => {
        // You should close the modal in here
        setShowDatePicker(false);
    };

    const onConfirm = ({ date, dateString }) => {
        // You should close the modal in here
        setShowDatePicker(false);

        // The parameter 'date' is a Date object so that you can use any Date prototype method.
        props.getDate(dateString);
    };

    return (
        <View>
            <DatePicker isVisible={showDatePicker} mode={"single"} onCancel={onCancel} onConfirm={onConfirm} />
            <TouchableOpacity title={"Calenário"} style={styles.button} onPress={openDatePicker} />
            <View style={styles.areaCalendar}>
                <Text style={styles.textCalendar}>Selecione a data :</Text>
            </View>
            <FontAwesome5
                name="calendar"
                size={60}
                color="#222222"
                style={styles.calendarIcon}
                onPress={openDatePicker}
            />
        </View>
    );
}
