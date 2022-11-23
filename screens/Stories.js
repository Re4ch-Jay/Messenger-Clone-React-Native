import { View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { chatData, COLORS, SIZES } from '../constants'
import HeaderCalls from '../components/HeaderCalls'

const Stories = () => {
  return (
    <SafeAreaView style={{flex: 1, margin: SIZES.l}}>
      <HeaderCalls title="Stories" justifyContent='center' />
      <ScrollView>
      <View style={{
        flexDirection: "row", 
        alignItems:'center', 
        justifyContent: "space-around",
        flexWrap: 'wrap',
      }}>
          
          {chatData.map(item => (
            <TouchableOpacity key={item.id} style={{marginVertical: SIZES.xs}}>
              <Image source={item.story} style={{backgroundColor: COLORS.secondary, width: 150, height: 200, borderRadius: SIZES.s}} />
            </TouchableOpacity>
          ))} 
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stories
