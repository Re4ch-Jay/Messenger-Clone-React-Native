import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { GroupCard } from '../components/Card'
import HeaderCalls from '../components/HeaderCalls'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1, margin: SIZES.l}}>
      <HeaderCalls title="All Chats" justifyContent='center' />
      <ScrollView>
        <GroupCard onPress={() => navigation.goBack()} iconOne='chat' iconTwo="office-building" iconThree='archive'
        textOne='Chats' textTwo='Makretplace' textThree='Archive'
        />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 3,
        }} >
          <Text style={{color: COLORS.secondary}}>Communities</Text>
          <Text style={{color: COLORS.primary}}>Manage</Text>
        </View>
        <GroupCard iconOne="people" textOne='Friends' iconTwo="group" textTwo='Group' iconThree="office-building" textThree='Communities' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Menu