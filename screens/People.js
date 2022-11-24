import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {SIZES, FONTS, COLORS, assets, chatData} from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
import HeaderCalls from '../components/HeaderCalls'
import ImageComp from '../components/ImageComp'
const People = ({route, navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, margin: SIZES.l}}>
      <HeaderCalls title="People" justifyContent="space-between" icon={<MaterialIcons name="book" size={24} color={COLORS.primary} />} />

      <FlatList 
        data={chatData}
        keyExtractor={item  => item.id}
        ListHeaderComponent={<HeaderList/>}
        renderItem={({item}) => (
          <View style={{
            flexDirection: "column",
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('chat', item)}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <ImageComp image={item.image} height={50} width={50}  marginVertical={SIZES.s}/>
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

const HeaderList = () => {
  return (
    <>
      <Text style={{color: COLORS.secondary, paddingVertical: SIZES.xs}}>Chats in your Communities</Text>
      <View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image resizeMode='contain' source={assets.story01} style={{width: 50, height: 50, borderRadius: 50, marginVertical: SIZES.s}} />
              <View>
                <Text style={{marginLeft: SIZES.s}}>Coding</Text>
                <Text style={{marginLeft: SIZES.s, color: COLORS.secondary}}>Explore</Text>
              </View>
          </View>

        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image resizeMode='contain' source={assets.story04} style={{width: 50, height: 50, borderRadius: 50, marginVertical: SIZES.s}} />
            <View>
              <Text style={{marginLeft: SIZES.s}}>Gaming</Text>
              <Text style={{marginLeft: SIZES.s, color: COLORS.secondary}}>Explore</Text>
            </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image resizeMode='contain' source={assets.story05} style={{width: 50, height: 50, borderRadius: 50, marginVertical: SIZES.s}} />
            <View>
              <Text style={{marginLeft: SIZES.s}}>Music</Text>
              <Text style={{marginLeft: SIZES.s, color: COLORS.secondary}}>Explore</Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{color: COLORS.secondary, paddingVertical: SIZES.xs}}>Active Now (130)</Text>
        <Text style={{color: COLORS.primary, paddingVertical: SIZES.xs}}>See All</Text>
      </View>
    </>
  )
}
