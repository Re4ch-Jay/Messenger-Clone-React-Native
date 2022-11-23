import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import {chatData} from '../constants'
import HeaderCalls from '../components/HeaderCalls'
import {SIZES, FONTS, COLORS, assets} from '../constants'
import { MaterialIcons } from '@expo/vector-icons'; 
const Calls = ({route, navigation}) => {

  const handleAlert = (name) => {
    Alert.alert(`Contact ${name}`, "Do you want to call " + name, [
      {text: "OKAY",  onPress: () => console.log('Call')},
      {text: "CANCEL",  onPress: () => console.log('Call')}
    ]) 
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      margin: SIZES.l
    }}>
    
      <HeaderCalls title="Calls" justifyContent="space-between" icon={<MaterialIcons name="add" size={24} color={COLORS.primary} />} />
      <FlatList 
        data={chatData}
        renderItem={({item}) => (
          <View style={{
            flexDirection: "column",
          }}>
            <TouchableOpacity onPress={() => handleAlert(item.name)}>
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
                  
                  <Text>{item.name}</Text>
                  <Text>Incomming Call - Sunday</Text>
                </View>
                <View style={{marginRight: SIZES.xl * 4}}></View>
                <TouchableOpacity onPress={() => navigation.navigate('profile', item)}>
                  <MaterialIcons name="info" size={24} color={COLORS.gray} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.2, opacity: 0.4}} />
          </View>
        )}
      />
      
    </SafeAreaView>
  )
}

export default Calls