import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleLogin = () => {
        // Implement logic
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate('Register')}>Register</Text>
        </View>
    );
};

export default LoginScreen;