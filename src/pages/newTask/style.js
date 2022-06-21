import React from "react";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        marginLeft: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    textInput: {
        height: 60,
        marginLeft: 10,
        width: '80%',
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 30,
        padding: 12,
        marginBottom: 10,
        marginEnd: 20,
        backgroundColor: '#fff',
        fontSize: 20,

    },
    bottonNewTask: {
        width:60,
        height:60,
        position: 'absolute',
        bottom: 30,
        left:20,
        backgroundColor: '#F92e6a',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottonNewTask:{
        fontSize: 10,
        color: '#fff',
    },
});


export default styles