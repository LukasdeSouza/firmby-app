import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ActivityIndicator, Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { adminUser } from '../mocks/user'
import { Link } from '@react-navigation/native'
import { globalStyles } from '../global/styles'



const LoginPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    setLoading(true)
    if (user === adminUser.userName && password === adminUser.password) {
      localStorage.setItem('@userLogged-firmby', true)
      navigation.navigate('Home')
    } else {
      Alert.alert('Usuário ou Senha Incorretos')
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

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
              Entre com seu email cadastrado e senha
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

            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={handleLogin}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.textStyle}>Login</Text>
              )}
            </TouchableOpacity >

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleNavigateBack}
            >
              <Text style={styles.textStyleBack}>Voltar</Text>
            </Pressable>
            <Link style={globalStyles.link} to={'/Cadastro'}>
              Não possui cadastro? Clique Aqui
            </Link>
            <Link style={globalStyles.copyright} to={'/Cadastro'}>
              Developed by Firmby
            </Link>
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
    gap: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    width: 300,
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
    color: '#FFF',
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