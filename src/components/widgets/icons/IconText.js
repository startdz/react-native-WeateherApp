import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
  const { container, textTheme } = styles
  return (
    <View style={container}>
      <Feather name={iconName} color={iconColor} size={50} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText
