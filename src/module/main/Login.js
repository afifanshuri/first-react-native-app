import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import MainScreenStyle from './MainStyle';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import auth from '@react-native-firebase/auth';

const Login = () => {
const navigation = useNavigation();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [response, setResponse] = useState({});

return (
    <SafeAreaView style={[MainScreenStyle.header, { flex: 1 }]}>
        <Title title="Login" textAlign="center" fontSize={30}></Title>
        <InputField
            label="Email"
            inputMode="email"
            labelStyle={{ marginBottom: 5, fontSize: 16 }}
            onChangeText={setEmail}
            inputStyle={{
                width: '100%',
                height: 50,
                padding: 10,
                borderWidth: 0.5,
                borderColor: 'black',
                fontSize: 16,
                borderRadius: 5,
            }}
        />
        <InputField
            label="Password"
            inputMode="password"
            labelStyle={{ marginBottom: 5, fontSize: 16 }}
            inputStyle={{
                width: '100%',
                height: 50,
                padding: 10,
                borderWidth: 0.5,
                borderColor: 'black',
                fontSize: 16,
                borderRadius: 5,
            }}
            onChangeText={setPassword}
        />
        <Text>
            {response.message ? response.message : ''}
        </Text>
        <Button
            title="Login"
            onPress={async () => {
                const result = await loginUser(email, password);
                setResponse(result);
                if (result.state === 'success') {
                    setTimeout(() => {
                        navigation.navigate(Routes.Home);
                    }, 2000);
                }
            }}
            buttonStyle={{ backgroundColor: '#007bff', margin: 10 }}
            textStyle={{ color: 'white' }}
        />
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Register)} style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text>Don't have an account? Click here</Text>
        </TouchableOpacity>
    </SafeAreaView>
);
};

export const loginUser = async (email, password) => {
    try{
        let user = await auth().signInWithEmailAndPassword(email, password);
        return { state: 'success', message: 'Login successful'};
    } catch(error){
        return { state: 'error', message: error.message };
    }
}

export default Login;
