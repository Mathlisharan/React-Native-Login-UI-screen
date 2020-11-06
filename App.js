import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Please Login</Text>

      <TextInput placeholder="username" placeholderTextColor="white" style={styles.input}></TextInput>
      <TextInput placeholder="password" placeholderTextColor="white" secureTextEntry style={styles.input}></TextInput>
      
      <TouchableOpacity style={styles.pwd}>
        <Text style={styles.pwd1}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.login}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register}>Register Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  txt: {
    width:140,
    height:140,
    alignSelf:'center',
    top:'20%',
    fontWeight:'bold',
    fontSize:20,
    padding:10,
    color:'white',
  },
  input: {
    
    marginVertical:15,
    borderBottomWidth:1,
    top:'15%',
    width:'80%',
    alignSelf:'center',
    borderRadius:0,
    color:'white',
    padding:5,
    fontSize:18,
  },
  pwd: {
    marginTop:'35%',
    alignSelf:'center',
  },
  pwd1: {
    color:'white',
  },
  login: {
    alignSelf:'center',
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:'10%',
   },
  register: {
    alignSelf:'center',
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:'5%',
  },
});
