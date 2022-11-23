import { View, Text } from 'react-native'
import React from 'react'
import {SIZES, FONTS, COLORS} from '../constants'
import { MaterialIcons } from '@expo/vector-icons'; 
const HeaderCalls = ({title, icon, justifyContent}) => {
  return (
    <View>
        <View style={{
            flexDirection: 'row',
            justifyContent: justifyContent,
            alignItems: 'center',
        }}>
            <View></View>
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.xl,
            }}>{title}</Text>
             {icon}
        </View>
    </View>
  )
}

export default HeaderCalls