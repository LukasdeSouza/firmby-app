import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const listMenuItems = [
  {
    id: "call",
    icon: "call-outline",
    title: "Fale Conosco"
  },
  {
    id: "location",
    icon: "location-outline",
    title: "Localização"
  },
  {
    id: "add-product",
    icon: "add-circle-outline",
    title: "Cadastrar Produto"
  },
  {
    id: "person",
    icon: "person-circle-outline",
    title: "Login"
  },
  {
    id: "logout",
    icon: "log-out-outline",
    title: "Sair"
  }
]

const IconButtonHeaderRight = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View >
      <Pressable style={styles.iconButton} onPress={openModal}>
        <Ionicons name='menu' size={32} color={'#777'}/>
      </Pressable>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        backdropOpacity={0.3}
      >
        <View style={styles.boxModal}>
          {listMenuItems.map((item) => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.title)}
            >
              <Ionicons name={item.icon} size={20} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>

  )
}

const styles = StyleSheet.create({
  boxModal: {
    position: 'absolute',
    // left: 0,
    top: 30,
    width: 150,
    height: 220,
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
    elevation: 2,
    gap: 16
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontWeight: '600',
  },
  iconButton: {
    marginRight: 8
  }
})

export default IconButtonHeaderRight