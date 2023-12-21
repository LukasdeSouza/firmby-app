import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-web'

const LoginPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  const handleNavigateBack = () => {
    setModalVisible(false);
    navigation.navigate('Home')
  }


  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleNavigateBack}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Faça Login</Text>
            <Text style={styles.modalSubtitle}>
              Login de usuário administrador
            </Text>
            <TextInput
              style={styles.input}
              value={user}
              autoFocus={true}
              inputMode='email'
              placeholder='renatocariani@gmail.com'
              onChange={(e) => setUser(e.target.value)}
            />
            <TextInput
              style={styles.input}
              value={password}
              inputMode='numeric'
              placeholder='*******'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Pressable
              style={[styles.button, styles.buttonOpen]}
            // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Entrar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleNavigateBack}
            >
              <Text style={styles.textStyleBack}>Voltar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    gap: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    height: 340,
    width: 270,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    width: '100%'
  },
  buttonOpen: {
    marginTop: 8,
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    background: 'transparent',
    borderWidth: 0.5,
    borderColor: '#2196F3',
    elevation: 0,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleBack: {
    color: '#2196F3',
    textAlign: 'center'
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  modalSubtitle: {
    fontSize: 12,
    color: "#bbb",
    textAlign: 'center',
    marginBottom: 15,

  },
  input: {
    height: 45,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12
  }
})

export default LoginPage