import React, { useState } from 'react'
import { Pressable, Text, TextInput, View, Modal, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../global/styles'



const RegisterPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [correctPassword, setCorrectPassword] = useState(false)

  const handleNavigateBack = () => {
    navigation.navigate('Home')
  }

  const passwordConfirm = () => {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
    if (senhaRegex.test(password) && password === confirmPassword) {
      setCorrectPassword(true)
    } else {
      setCorrectPassword(false)
    }
  }

  const handleClickRegister = () => {
    setLoading(true)
    passwordConfirm()
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }


  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
        onRequestClose={handleNavigateBack}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require('../image/logo/firmby.png')}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <Text style={styles.modalText}>
              Faça seu Cadastro
            </Text>
            <Text style={styles.modalSubtitle}>
              Preencha os dados abaixo
            </Text>
            <TextInput
              style={styles.input}
              value={name}
              autoFocus={true}
              inputMode='text'
              placeholder='Digite seu nome'
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              style={styles.input}
              value={email}
              inputMode='email'
              placeholder='Digite seu email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              style={styles.input}
              value={password}
              placeholder='Digite sua senha'
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              placeholder='Confirme sua senha'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Text style={
              correctPassword
                ? styles.passwordCorrect
                : styles.passwordError
            }
            >
              Senha com 8 dígitos
            </Text>
            <Text style={
              correctPassword
                ? styles.passwordCorrect
                : styles.passwordError
            }
            >
              Senha com caracter especial
            </Text>
            <Text style={
              correctPassword
                ? styles.passwordCorrect
                : styles.passwordError
            }
            >
              Senha com letra maíuscula
            </Text>

            <TouchableOpacity
              style={[globalStyles.button, styles.buttonOpen]}
              onPress={handleClickRegister}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={globalStyles.defaultPressableText}>
                  Cadastrar
                </Text>
              )}
            </TouchableOpacity >
            <Pressable
              style={[globalStyles.button, globalStyles.outlinedPressable]}
              onPress={handleNavigateBack}
            >
              <Text style={globalStyles.outlinedPressableText}>
                Voltar
              </Text>
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
    shadowOpacity: 0.75,
    shadowRadius: 24,
    elevation: 5,
  },
  passwordError: {
    fontSize: 12,
    color: '#e51818'
  },
  passwordCorrect: {
    fontSize: 12,
    color: '#06b220'
  },
  buttonOpen: {
    marginTop: 8,
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    borderColor: '#2196F3',
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

export default RegisterPage