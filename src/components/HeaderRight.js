import React, { useState } from 'react'
import { BackHandler, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { closeApp } from '../global/functions';

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
  // {
  //   id: "add-product",
  //   icon: "add-circle-outline",
  //   title: "Cadastrar Produto"
  // },
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

  const handleClickMenuItem = (title) => {
    if (title === "Sair") {
      setModalVisible(false)
      closeApp()
    } else {
      navigation.navigate(title)
    }
  }


  return (
    <View >
      <Pressable style={styles.iconButton} onPress={openModal}>
        <Ionicons name='menu' size={32} color={'#777'} />
      </Pressable>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        backdropOpacity={0.2}
      >
        <View style={styles.boxModal}>
          {listMenuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleClickMenuItem(item.title)}
            >
              <Ionicons
                name={item.icon}
                size={20}
                color={item.title === "Sair" && 'red'}
              />
              <Text style={item.title === "Sair" && styles.logout}>
                {item.title}
              </Text>
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
    top: 30,
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
    gap: 8,
  },
  title: {
    fontWeight: '600',
  },
  logout: {
    color: 'red'
  },
  iconButton: {
    marginRight: 8
  }
})

export default IconButtonHeaderRight