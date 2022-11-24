import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import {SIZES, COLORS, assets} from '../constants'
import { ScrollView } from 'react-native-gesture-handler';
import {chatData} from '../constants'
import { useNavigation } from '@react-navigation/native';
import ImageComp from './ImageComp';

const ActiveFriends = () => {
    const navigation = useNavigation()
    console.log(navigation)
  return (
    <View>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
    <View style={{
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    }}> 
        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                borderRadius: 100,
                backgroundColor: COLORS.gray,
                padding: SIZES.s,
                marginRight: SIZES.m,
            }}>
                <MaterialIcons name="video-call" size={30} color="black" />
            </View>
            <Text style={{fontSize: SIZES.xs, marginRight: SIZES.m}}>Create Call</Text>
        </View>
    
        {chatData.map(item => (
            <View key={item.id} style={{flexDirection: 'row' }}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('chat', item)}>
                            <ImageComp image={item.image} height={60} width={60} />
                        </TouchableOpacity>
                        <Text style={{marginRight: SIZES.m}}>{item.name}</Text>
                    </View>
            </View>
        ))}
    </View>
    </ScrollView>
    </View>
  )
}

export default ActiveFriends
