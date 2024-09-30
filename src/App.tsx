//ex mobile dev
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ProductListScreen from './Screens/ProductListScreen/ProductListScreen';
import OrderListScreen from './Screens/OrderListScreen/OrderListScreen';
import Loader from './Screens/Loader/Loader';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Product List</Text>
      </View>
      <Loader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
    backgroundColor: '#E6E6E6',
  },
});

export default App;
