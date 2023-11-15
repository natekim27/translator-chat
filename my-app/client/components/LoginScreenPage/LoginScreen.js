import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const LoginScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState('');

    // REMEMBER THIS IS THE WIFIS IP ADDRESS OF THE COMP TESTING WITH
    // PC IP ADDRESS
    // const IP_ADDRESS = "10.0.0.16";

    // PC IP ADDRESS
    const IP_ADDRESS = '172.20.10.4'

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://' + IP_ADDRESS + ':5001/login', {email, password});
            console.log(response.data);

            setLoginError('');
            setEmail('');
            setPassword('');
            navigation.navigate("Chat");

        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                setLoginError(error.response.data.message);
            } else {
                // Handle network errors or other cases where response is not available
                setLoginError('An error occurred. Please try again.');
            }
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