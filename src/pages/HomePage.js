import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import Card from '../components/Card'
import { getAllProducts, getProductByName } from '../supabase/requests';
import { Ionicons } from '@expo/vector-icons';
import { listProducts } from '../mocks/listProducts';



const listMenuItems = [
  {
    id: "call",
    icon: "call-outline",
    title: "Telefone",
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
  const [products, setProducts] = useState(listProducts)
  const [filter, setFilter] = useState("")

  const handleNavigate = (title) => {
    navigation.navigate(title)
  }


  const getProducts = async () => {
    // let result = await getAllProducts()
    // setProducts(result)
  }

  const handleChangeFilter = async (value) => {
    setFilter(value)
    let filtered = products.filter((item) => filter === item.commerce_name)
    console.log(filtered)
  }

  useEffect(() => {
    getProducts()
  })


  return (
    <ScrollView style={styles.home}>
      <StatusBar animated={true} />
      <Pressable style={styles.cardContainer}>
        <ScrollView horizontal='true'>
          <Card available='Sim' navigation={navigation} />
        </ScrollView>
      </Pressable>
      <View style={styles.filterBox}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <TextInput
          style={styles.input}
          placeholder='Buscar por...'
          value={filter}
          onChange={(e) => handleChangeFilter(e.target.value)}
        />
      </View>
      {products?.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image
            source={{
              uri: item?.product_image
            }}
            height={70}
            width={50}
            borderRadius={8}
          />
          <View style={styles.row}>
            <Text style={styles.title}>
              {item?.product_name}
            </Text>
            <Pressable style={styles.chip}>
              <Text style={styles.chipText}>
                {`Estoque: ${item?.available ? 'Disponível' : 'Não Disponível'}`}
              </Text>
            </Pressable>
            <Text style={[styles.subtitle, styles.subtitlePrevious]}>
              De: R${item?.lastPrice}
            </Text>
            <Text style={[styles.subtitle, styles.subtitleLast]}>
              Por: R${item?.price}
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
  input: {
    borderWidth: 0.3,
    borderRadius: 8,
    padding: 8,
    borderColor: '#CCC',
    backgroundColor: '#rgba(255,255,255,0.5)'
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
    gap: 4
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 8,
    borderWidth: 0.5,
    borderColor: '#CCC',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  filterBox: {
    gap: 8,
    padding: 8,
    borderBottomWidth: 0.3,
    borderColor: '#BBB'
  },
  title: {
    fontWeight: '600'
  },
  chip: {
    padding: 2,
    width: 145,
    backgroundColor: '#e7edef',
    borderRadius: 4
  },
  chipText : {
    fontSize: 10,
    marginLeft: 8,
    color: '#222'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 12
  },
  subtitlePrevious: {
    color: '#a5adb0',
    textDecorationLine: 'line-through'
  },
  subtitleLast: {
    color:'#06b220',
    fontWeight: '600'
  }
})



export default HomePage