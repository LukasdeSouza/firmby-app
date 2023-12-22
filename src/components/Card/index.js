import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { listCarouselProducts } from '../../mocks/listCarouselProducts'
import { Ionicons } from '@expo/vector-icons'



const Card = () => {
  const [productIndex, setProductIndex] = useState(0)
  const product = listCarouselProducts[productIndex]

  const swapToLeft = () => {
    if (productIndex > 1) {
      setProductIndex(productIndex - 1)
    } else {
      setProductIndex(2)
    }
  }
  const swapToRight = () => {
    if (productIndex < listCarouselProducts.length - 1) {
      setProductIndex(productIndex + 1)
    } else {
      setProductIndex(0)
    }
  }

  return (
    <View style={styles.card}>
      <Pressable style={[styles.arrow, styles.arrowLeft]}>
        <Ionicons
          name='arrow-back-circle-outline'
          size={32}
          color={'#EEE'}
          onPress={swapToLeft}
        />
      </Pressable>
      <Pressable style={[styles.arrow, styles.arrowRight]}>
        <Ionicons
          name='arrow-forward-circle-outline'
          size={32}
          color={'#EEE'}
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
        height={250}
        alt={product.product_name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
    gap: 8
  },
  arrow: {
    position: 'absolute',
    bottom: '40%',
    zIndex: 1
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
  }
})



export default Card