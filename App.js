import { StatusBar } from 'expo-status-bar';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllProducts } from './src/supabase/requests';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const result = await getAllProducts()
    setProducts(result)
  }


  useLayoutEffect(() => {
    getProducts()
  }, [])


  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
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
