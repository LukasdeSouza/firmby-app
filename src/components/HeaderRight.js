import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
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
    id: "person",
    icon: "person-circle-outline",
    title: "Login"
  }
]

const IconButtonHeaderRight = () => {
  const [openModal, setOpenModal] = useState(false)

  const navigation = useNavigation()

  const handleNavigate = (title) => {
    navigation.navigate(title)
  }

  const onPressMenu = () => {
    setOpenModal(!openModal)
  }

  return (
    <View>
      <Pressable
        style={styles.iconButton}
        onPress={onPressMenu}
      >
        <Ionicons name='menu' size={32} />
      </Pressable>
      <Modal
        animationType='fade'
        transparent={true}
        visible={openModal}
        onRequestClose={onPressMenu}
      >
        <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
          <View style={styles.boxModal}>
            {listMenuItems.map((item) => (
              <Pressable
                key={item.id}
                style={styles.menuItem}
                onPress={() => handleNavigate(item.title)}
              >
                <Ionicons name={item.icon} size={18} />
                <Text>{item.title}</Text>
              </Pressable>
            ))}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  )
}

const styles = StyleSheet.create({
  boxModal: {
    position: 'absolute',
    right: 15,
    top: 45,
    width: 150,
    height: 120,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
    elevation: 2,
    gap: 16
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 12
  },
  iconButton: {
    height: 30
  }
})

export default IconButtonHeaderRight