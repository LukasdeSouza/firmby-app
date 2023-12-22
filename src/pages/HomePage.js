import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Card from '../components/Card'
import Modal from 'react-native-modal';
import { getAllProducts, getProductByName } from '../supabase/requests';
import { Ionicons } from '@expo/vector-icons';
import { listProducts } from '../mocks/listProducts';
import { globalStyles } from '../global/styles';



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
  const [productIndex, setProductIndex] = useState(null)
  const [filter, setFilter] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (index) => {
    setProductIndex(index)
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
  }

  useEffect(() => {
    getProducts()
  })


  return (
    <ScrollView style={styles.home}>
      {/* <StatusBar animated={true} /> */}
      <Pressable style={styles.cardContainer}>
        <ScrollView>
          <Card />
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
      {products?.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => openModal(index)}
        >
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
        </TouchableOpacity>
      ))}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        backdropOpacity={0.3}
      >
        <View style={styles.modal}>
          <Pressable style={styles.modalHeader}>
            <Text style={styles.storeName}>
              Loja - Cadeiras Store
            </Text>
            <TouchableOpacity onPress={closeModal}>
              <Ionicons name='close-sharp' size={18} />
            </TouchableOpacity>
          </Pressable>

          <Text style={styles.title}>
            {products[productIndex]?.product_name}
          </Text>
          <Image
            source={{ uri: products[productIndex]?.product_image }}
            height={300}
          />
          <View>
            <Text style={styles.modalPrice}>
              R$ {products[productIndex]?.price}
            </Text>
            <Text style={styles.subtitleLast}>
              em até 5x de R$ {products[productIndex]?.price / 5}
            </Text>
            <Text>
              Somente Retirada no Local
            </Text>
          </View>
          <View style={styles.modalFooter}>
            <Pressable style={[globalStyles.button, globalStyles.defaultPressable]}>
              <Ionicons
                name='cart-outline'
                size={16}
                color={'#FFF'}
              />
              <Text style={globalStyles.defaultPressableText}>
                Comprar
              </Text>
            </Pressable>
            <Pressable
              style={[globalStyles.button, globalStyles.outlinedPressable]}
              onPress={closeModal}
            >
              <Ionicons
                name='arrow-back'
                size={16}
                color={'#222'}
              />
              <Text style={globalStyles.outlinedPressableText}>
                Voltar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  flexCenter: {
    display: 'flex',
    justifyContet: 'center',
  },
  home: {
    display: 'flex',
    justifyContet: 'center',
    marginTop: 16,
    padding: 8
  },
  input: {
    borderWidth: 0.3,
    borderRadius: 8,
    padding: 8,
    borderColor: '#CCC',
    backgroundColor: '#rgba(255,255,255,0.5)'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  storeName: {
    fontSize: 12,
    // color: '#464346,'
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  chip: {
    padding: 2,
    backgroundColor: '#e7edef',
    borderRadius: 4
  },
  chipText: {
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
    color: '#06b220',
    fontWeight: '600'
  },
  modal: {
    flex: 0.8,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    gap: 4
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalPrice: {
    fontSize: 20,
  },
  modalFooter: {
    marginTop: 8,
    gap: 8,
  }

})



export default HomePage