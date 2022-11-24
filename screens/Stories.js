import { View, ScrollView, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native'
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
              <View>
                
                <Image 
                source={item.story} 
                resizeMode='cover'
                style={{
                  backgroundColor: COLORS.secondary, 
                  width: 150, height: 200, 
                  borderRadius: SIZES.s}} />
                <Image source={item.image} resizeMode='contain'
                 style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  width: 40,
                  height: 40,
                 }} />
                 <Text style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  color: '#fff'
                 }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            
          ))} 
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stories
