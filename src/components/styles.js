import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    button: {
        backgroundColor: "#f4511e",
        width: "50%",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 7,
        margin: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 19,
    },
    calendarIcon: {
        width:85,
        height: 85,
        position: "absolute",
        left: 200,
        top: 40,
        right: 0,
        //bottom: 30,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        paddingLeft: 15,
        paddingTop: 10,
    },
    areaCalendar: {
        width: "100%",
        flexDirection: "row",
    },
    textCalendar: {

        fontSize: 20,
        marginTop: 50,
        color: "#222222",
        marginLeft: 10,
    }

});
