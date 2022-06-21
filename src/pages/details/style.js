import React from "react";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    textInput: {
        height: 40,
        marginLeft: 10,
        width: '80%',
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 30,
        padding: 12,
    },
    titleTask: {
        padding: 20,
        width: '80%',
        bottom: 30,
        marginBottom: 30,
        backgroundColor: '#F92e6a',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataTask: {
        padding: 20,
        width: '80%',
        bottom: 30,
        marginBottom: 30,
        backgroundColor: '#3d3d3d',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusCheckTask: {
        padding: 20,
        width: '80%',
        bottom: 30,
        marginBottom: 30,
        backgroundColor: '#81e502',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusPensdingTask: {
        padding: 20,
        width: '80%',
        bottom: 30,
        marginBottom: 30,
        backgroundColor: '#f4511e',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTask:{
        fontSize: 22,
        color: '#fff',
        padding: 10,
        textAlign: 'center',
    },
    textTaskConc:{
        fontSize: 15,
        color: '#fff',
        padding: 10,
    },
    textPendingTask:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    },

});


export default styles