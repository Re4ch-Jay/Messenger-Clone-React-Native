import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { FONTS, SIZES, assets } from '../constants'
import Card from '../components/Card'
import { FlatList } from 'react-native-gesture-handler'
import { settingComp } from '../constants'

const Settings = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'column',
      margin: SIZES.l
    }}>
      <FocusedStatusBar/>
      <Text style={{
        marginVertical: SIZES.xl,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xl,
        textAlign: 'center'
      }}>Settings</Text>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image 
        source={assets.person01} 
        resizeMode='contain' 
        style={{width: 100, height: 100}} />
        <Text style={{
        marginVertical: SIZES.xl,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xl * 1.2,
        textAlign: 'center'
      }}>Reach</Text>
      </View>

      <FlatList
        data={settingComp}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card startIcon={item.startIcon} title={item.title} color={item.color}/>
        )}
      />

    </SafeAreaView>
  )
}

export default Settings