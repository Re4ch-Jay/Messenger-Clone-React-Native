import { View, Text, TextInput, TouchableOpacity,  } from 'react-native'
import React from 'react'
import {SIZES, FONTS, COLORS} from '../constants'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const HeaderChat = () => {
    const navigation = useNavigation()
  return (
    <View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <MaterialIcons name="menu" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.xl,

            }}>Chats</Text>
            <Feather name="edit" size={24} color={COLORS.primary} />

        </View>
        <View style={{
            width: "100%",
            marginVertical: SIZES.m,
            padding: SIZES.xxs,
            backgroundColor: COLORS.gray,
            borderRadius: SIZES.xxs,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <MaterialIcons name="search" size={24} color={COLORS.secondary} />
            <TextInput placeholder='Search' style={{ flex: 1 }} />
        </View>
    </View>
  )
}

export default HeaderChat