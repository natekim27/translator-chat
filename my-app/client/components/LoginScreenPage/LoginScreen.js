import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const LoginScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState('');

    const IP_ADDRESS = "10.0.0.16";

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://' + IP_ADDRESS + ':5001/login', {email, password})
            const data = response.data;
            console.log("Logged In!");

        } catch (error) {
            setLoginError(error.response.data.message);
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            {loginError ? <Text style={{ color: 'red'}}>{loginError}</Text> : null}
            <Text onPress={() => navigation.navigate('Register')}>Register</Text>
        </View>
    );
};

// const styles = StyleSheet.create({

// });

export default LoginScreen;