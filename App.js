import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Alert,TextInput,TouchableOpacity} from 'react-native';
import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import ProductStackNav from './src/navigation/stack.navigation';
// import { CounterProvider } from './app/Components/globalState';

import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <ProductStackNav/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    padding: 16

  }
});
