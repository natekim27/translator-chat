import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PhoneInput from "react-native-phone-number-input";
import axios from 'axios';
import { isValidEmail, isValidPassword, isValidPhoneNumber } from './CredentialValidation';

const RegisterScreen = ( { navigation } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [language, setLanguage] = useState('English');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [registerError, setRegisterError] = useState('');

    
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Korean'];
    const IP_ADDRESS = "10.0.0.16";

    
    const handleRegister = async (e) => {
        // Implement registration logic
        e.preventDefault();

        let isValid = true;

        if (!isValidEmail(email)) {
            setEmailError("Invalid email address");
            isValid = false;
        } else {
            setEmailError("");
        }

        const passwordValidation = isValidPassword(password);
        if (!passwordValidation.isValid) {
            setPasswordError(passwordValidation.message);
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (!isValidPhoneNumber(phoneNumber)) {
            setPhoneNumberError("Invalid email address");
            isValid = false;
        } else {
            setPhoneNumberError("");
        }

        if (isValid) {
            try {
                const response = await axios.post("http://" + IP_ADDRESS + ":5001/register", {email, password, phoneNumber, language});
                const data = response.data;
                console.log(data);
        
                navigation.goBack();
            } catch (error) {
                setRegisterError(error.response.data.message);
            }
            
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
            {emailError ? <Text style={{ color: 'red'}}>{emailError}</Text> : null}

            <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
            {passwordError ? <Text style={{ color: 'red'}}>{passwordError}</Text> : null}

            <PhoneInput 
                defaultCode='US'
                onChangeText={(phoneNumber) => {
                    setPhoneNumber(phoneNumber);
                }}
            />
            {phoneNumberError ? <Text style={{ color: 'red'}}>{phoneNumberError}</Text> : null}

            <Picker
                selectedValue={language}
                onValueChange={(itemValue, itemIndex) =>
                    setLanguage(itemValue)}
                >
                {languages.map((lang, index) => (
                    <Picker.Item key={index} label={lang} value={lang} />
                ))}
            </Picker>

            <Button title="Register" onPress={handleRegister} />
            {registerError ? <Text style={{ color: 'red'}}>{registerError}</Text> : null}

        </View>
    );
};

export default RegisterScreen;