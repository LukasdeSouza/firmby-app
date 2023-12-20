import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import { getAllProducts } from '../supabase/requests';
import { Ionicons } from '@expo/vector-icons';



const listMenuItems = [
  {
    id: "call",
    icon: "call-outline",
    title: "Telefone"
  },
  {
    id: "location",
    icon: "location-outline",
    title: "Endereço"
  },
  {
    id: "person",
    icon: "person-circle-outline",
    title: "Login"
  }
]



const HomePage = ({ navigation }) => {
  const [products, setProducts] = useState([])

  const handleNavigate = (title) => {
    navigation.navigate(title)
  }

  const arr = Array.from({ length: 1 })

  const getProducts = async () => {
    let result = await getAllProducts()
    setProducts(result)
  }

  useEffect(() => {
    getProducts()
  })


  return (
    <ScrollView style={styles.home}>
      <StatusBar animated={true} />
      <View style={styles.actionButtons}>
        {listMenuItems.map((item) => (
          <Pressable
            key={item.id}
            style={styles.button}
            onPress={() => handleNavigate(item.title)}
          >
            <Ionicons name={item.icon} size={18} />
            <Text>
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.cardContainer}>
        <ScrollView horizontal='true'>
          {arr?.map((i, index) => (
            <Card key={index} available='Sim' navigation={navigation} />
          ))}
        </ScrollView>
      </Pressable>
      <Text style={styles.title}>Lista de Produtos</Text>
      {products?.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image
            source={{
              uri: item?.commerce_image
            }}
            height={50}
            width={50}
            borderRadius={8}
          />
          <View style={styles.row}>
            <Text style={styles.title}>
              {item?.commerce_name}
            </Text>
            <Text style={styles.subtitle}>
              Disponível: {'Sim'}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContet: 'center',
    marginTop: 16,
    padding: 8
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    gap: 32
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    minWidth: 90,
    padding: 12,
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: '#BBB'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16
  },
  row: {
    padding: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    padding: 8,
    marginTop: 8,
    borderWidth: 0.5,
    borderColor: '#CCC',
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600'
  },
  subtitle: {
    fontWeight: '400'
  }
})



export default HomePage