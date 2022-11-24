import {Keyboard, SafeAreaView, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import HeaderChat from '../components/HeaderChat'
import ActiveFriends from '../components/ActiveFriends'
import {SIZES, FONTS} from '../constants'
import { FlatList } from 'react-native-gesture-handler'
import {chatData} from '../constants'
import { useNavigation } from '@react-navigation/native'
import ImageComp from '../components/ImageComp'
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

                <ImageComp image={item.image} width={60} height={60} />
              
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