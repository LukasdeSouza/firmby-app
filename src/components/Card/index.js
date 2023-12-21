import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { listProducts } from '../../mocks/listProducts'
import { Ionicons } from '@expo/vector-icons'



const Card = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1)
  const product = listProducts[randomNumber]

  const swapToLeft = () => {
    if (randomNumber > 1) {
      randomMore = randomNumber - 1
      setRandomNumber(randomMore)
    } else {
      return
    }
  }
  const swapToRight = () => {
    if (randomNumber < listProducts.length) {
      randomMinus = randomNumber + 1
      setRandomNumber(randomMinus)
    } else {
      return
    }
  }



  return (
    <View style={styles.card}>
      <Pressable style={[styles.arrow, styles.arrowLeft]}>
        <Ionicons
          name='arrow-back-circle'
          size={32}
          color={'lightgrey'}
          onPress={swapToLeft}
        />
      </Pressable>
      <Pressable style={[styles.arrow, styles.arrowRight]}>
        <Ionicons
          name='arrow-forward-circle'
          size={32}
          color={'lightgrey'}
          onPress={swapToRight}
        />
      </Pressable>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          {product.product_name}
        </Text>
        <TouchableOpacity>
          <Text>🎄</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: product.product_image
        }}
        alt={product.product_name}
        height={230}
        borderRadius={32}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    gap: 8,
  },
  arrow: {
    position: 'absolute',
    bottom: '40%',
    zIndex: 1

  },
  arrowLeft: {
    left: 1
  },
  arrowRight: {
    right: 1,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 18
  },
  cta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 180,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 8
  },
  ctaText: {
    fontWeight: '600'
  }
})



export default Card