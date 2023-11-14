import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegisterScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [language, setLanguage] = useState('');

    const handleRegister = async (e) => {
        // Implement registration logic
        e.preventDefault();

        const response = await axios.post("http://" + IP_ADDRESS + ":5001/register", {email, password, phoneNumber, language});
        const data = response.data;
        console.log(data);

        navigation.goBack();
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
            <TextInput placeholder="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
            <TextInput placeholder="Preferred Language" onChangeText={setLanguage} value={language} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;