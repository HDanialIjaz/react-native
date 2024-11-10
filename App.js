import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Log_in = () => {
  return (
    <View style={style.container}>
      <Text style={style.tittle}>Login</Text>
      <TextInput
        style={style.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={style.input}
        placeholder="Enter Passward"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>login</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 0,
  },
  tittle: {
    marginTop: 100,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  }
});
export default Log_in;
