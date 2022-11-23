import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'; 

const Card = ({startIcon, title, color}) => {
  return (
   
    <View style={{padding: SIZES.m}}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: SIZES.m,
            width: '100%',
            backgroundColor: "#fff", 
            borderRadius: SIZES.s,
            justifyContent: 'space-between',
        }}>
            <View style={{
              backgroundColor: color,
              borderRadius: 50,
              padding: SIZES.xxs,
            }}>{startIcon}</View>
            <Text>{title}</Text>
            <MaterialIcons name='navigate-next' size={24} color={COLORS.secondary} />
        </View>
    </View>

  )
}

export default Card