import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../global/styles'

const LocalizationPage = () => {
  return (
    <View>
      <Text style={globalStyles.pageTitle}>Nosso Endereço</Text>
      <View style={styles.containerRow}>
        <View style={styles.containerText}>
          <Text>
            Estamos situados na Rua **********, número *****, no bairro ********** *****, em Uberlândia - MG.
          </Text>
          <Text style={[styles.fontMd, globalStyles.fontBold]}>
            Atendemos as seguintes regiões:
          </Text>
          <Text style={globalStyles.fontSemiBold}>
            - Laranjeiras, São Jorge, Seringueira, Aurora, Granada, Jardim Botânico es Santa Luzia
          </Text>
        </View>
        <Image source={require('../image/call.png')} style={{ width: 200, height: 200, borderRadius: 24 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerRow: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  containerText: {
    width: 200,
    gap: 16
  },
  fontMd: {
    fontSize: 16
  }
})

export default LocalizationPage