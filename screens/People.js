import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {SIZES, FONTS, COLORS, assets, chatData} from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
import HeaderCalls from '../components/HeaderCalls'
const People = ({route, navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, margin: SIZES.l}}>
      <HeaderCalls title="People" justifyContent="space-between" icon={<MaterialIcons name="book" size={24} color={COLORS.primary} />} />
      <FlatList 
        data={chatData}
        renderItem={({item}) => (
          <View style={{
            flexDirection: "column",
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('chat', item)}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{ width: 50, height: 50, marginVertical: SIZES.s }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                  />
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
                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start'
                }}>
                  <Text style={{marginRight: SIZES.xl * 5}}>{item.name}</Text>
                  <Text style={{marginRight: SIZES.xl * 5}}>Active Now</Text>
                </View>
                <View style={{marginRight: SIZES.xl * 4}}></View>
  
              </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.2, opacity: 0.4}} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default People