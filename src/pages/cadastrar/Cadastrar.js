import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Animated, Keyboard } from "react-native";
import firebase from "../../config/firebase";
import styles from "./styles";

export default function App({ navigation }) {
    // estados do cadastro
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //função do cadastro
    async function cadastrar() {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((value) => {
                navigation.navigate("Task", {userId: value.user.uid}) ;
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="text"
                textContentType="username"
                autoCapitalize="none"
                autoCompleteType="username"
                autoCorrect={false}
                onChangeText={(text) => setUsername(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                //keyboardType="visible-password"
                textContentType="password"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Text>{email}</Text>
            <Text>{password}</Text>

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => cadastrar()}>
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.registerText}>Voltar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
