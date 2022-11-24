import {Keyboard, Image, SafeAreaView, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import HeaderChat from '../components/HeaderChat'
import ActiveFriends from '../components/ActiveFriends'
import {SIZES, FONTS, COLORS, assets} from '../constants'
import { FlatList } from 'react-native-gesture-handler'
import {chatData} from '../constants'
import { useNavigation } from '@react-navigation/native'

const Chats = () => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={{
      flex: 1,
      margin: SIZES.l
    }}>
      
      <FocusedStatusBar/>
      <HeaderChat/>
        <FlatList 
        ListHeaderComponent={<ActiveFriends/>}
        data={chatData} 
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('chat', item)}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              marginVertical: SIZES.m
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
                <View style={{width: 60, height: 60}}>
                <Image source={item.image} style={{
                  width: '100%',
                  height: '100%'
                }} />
                <Image
                    source={assets.badge}
                    resizeMode="contain"
                    style={{
                      position: "absolute",
                      width: 15,
                      height: 15,
                      bottom: 0,
                      right: 0,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{
                    paddingHorizontal: SIZES.m,
                    fontFamily: FONTS.semiBold,
                    letterSpacing: 1
                  }}>{item.name}</Text>
                  <Text 
                    style={{
                      paddingHorizontal: SIZES.m,
                      fontSize: SIZES.s,
                      fontFamily: FONTS.regular,
                      opacity: 0.5
                    }}
                  >You: {item.message}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        /> 
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Chats