import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const Card = ({ navigation, available = "Sim" }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Kit Notebook Tablet e Telefone</Text>
      </View>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }}
        alt=""
        height={230}
        borderRadius={8}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 300,
    padding: 8,
    marginBottom: 16,
    gap: 8,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16
  },
  cta: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 16,
    width: 180,
    backgroundColor:'rgba(255,255,255, 0.8)',
    borderRadius: 8
  },
  ctaText: {
    fontWeight: '600'
  }
})



export default Card