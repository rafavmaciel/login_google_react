import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
    text : {
        fontSize: 20,
        color: '#000',
    },
    container :{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },

    iconButton: {
        color: '#f5fffb',
        fontSize: 30,
        fontWeight: 'bold',
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
    Tasks: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 10,
        padding:0
    },
    deleteTask: {
        justifyContent: 'center',
        padding: 7,
        margin : 15,
        backgroundColor : '#f4511e',
        borderRadius : 50,
    },
    descriptionText: {
        width: '70%',
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor: '#F92e6a',
        paddingHorizontal: 18,
        paddingTop:10,
        borderRadius: 50,
        margin: 10,
        marginRight : 15,
        color: '#f5fffb',
        fontSize:18
    }, 

    descriptionTextAsDone: {
        width: '70%',
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor: '#f5f5f5cf',
        paddingHorizontal: 18,
        paddingTop:10,
        borderRadius: 50,
        margin: 10,
        marginRight : 15,
        color: '#696969',
        textDecorationLine: 'line-through',
        fontSize:18
    }, 
});


export default styles