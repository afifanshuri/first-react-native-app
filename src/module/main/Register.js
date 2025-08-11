import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import MainScreenStyle from './MainStyle';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { registerUser } from '../../../api/user';
import { Routes } from '../../navigation/Routes';

const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState({});

  return (
    <SafeAreaView style={[MainScreenStyle.header, { flex: 1 }]}>
      <BackButton onPress={() => navigation.goBack()}></BackButton>
      <Title title="Register" textAlign="center" fontSize={30}></Title>
      <InputField
        label="First Name"
        inputMode="text"
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
        onChangeText={setFirstName}
      />
      <InputField
        label="Last Name"
        inputMode="text"
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
        onChangeText={setLastName}
      />
      <InputField
        label="Email"
        inputMode="email"
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
        onChangeText={setEmail}
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
      <Text style={{ marginVertical: 10, textAlign: 'center',color:'black' }}>{response.message}</Text>
      <Button
        title="Register"
        onPress={async () => {
          const result = await registerUser({ firstName, lastName, email, password });
          setResponse(result);
          console.log(result.state);
          if (result.state === 'success') {
            setTimeout(() => {
              navigation.goBack();
            }, 3000);
          }
        }}
        buttonStyle={{ backgroundColor: '#007bff', margin: 10 }}
        textStyle={{ color: 'white' }}
      />
    </SafeAreaView>
  );
};

export default Register;
