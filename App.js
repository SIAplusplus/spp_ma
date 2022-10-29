import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/login';
import Routes from './src/navigation/Routes';
import Main from './src/components/main';

export default function App() {
  return (
    <Main></Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
