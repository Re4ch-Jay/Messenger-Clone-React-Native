import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { COLORS, SIZES, FONTS } from "../constants";
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import ImageComp from '../components/ImageComp';

const Chat = ({route, navigation}) => {

  const {message, name, image} = route.params;
  console.log(route)

  return (
    <SafeAreaView style={{flex: 1 , margin: SIZES.l}}>
      <ChatHeader name={name} image={image} navigation={navigation}/>
      <ScrollView>
        <View style={{flex: 1}}>
          <MessageComp message={message} image={image} flexStart={'flex-start'} />
          <MessageComp message={"What are you doing"} image={image} flexStart={'flex-start'} />
          <MessageComp message={"Hiii"} image={{}} flexStart={'flex-end'} />
          <MessageComp message={"Im reading....."} image={{}} flexStart={'flex-end'} />
          <MessageComp message={message} image={image} flexStart={'flex-start'} />
          <MessageComp message={"Eat rice yet"} image={image} flexStart={'flex-start'} /> 
          <MessageComp message={"Im reading....."} image={{}} flexStart={'flex-end'} />
          <MessageComp message={message} image={image} flexStart={'flex-start'} />
          <MessageComp message={"What are you doing"} image={image} flexStart={'flex-start'} />
          <MessageComp message={"Hiii"} image={{}} flexStart={'flex-end'} />
          <MessageComp message={"hahaha"} image={{}} flexStart={'flex-end'} />
          <MessageComp message={message} image={image} flexStart={'flex-start'} />
          <MessageComp message={"What are you doing"} image={image} flexStart={'flex-start'} />
          <MessageComp message={"Ohh this app is real good"} image={{}} flexStart={'flex-end'} />
        </View>
      </ScrollView>
      <SendMessage />
    </SafeAreaView>
  )
}

export default Chat


const ChatHeader = ({name, image, navigation}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back-sharp" size={24} color={COLORS.primary} style={{paddingRight: SIZES.m}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("profile", {image, name})} style={{flexDirection: 'row', alignItems: 'center'}}>
            <ImageComp image={image} height={48} width={48} />
            <View style={{paddingHorizontal: SIZES.m - 5}}>
              <Text style={{fontFamily: FONTS.medium}}>{name}</Text>
              <Text style={{fontFamily: FONTS.light, color: COLORS.secondary}}>Active now</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
        <MaterialIcons name="call" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.m}} />
        <Ionicons name="md-videocam" size={24} color={COLORS.primary} />
      </View>
    </View>
  )
}

const MessageComp = ({message, image, flexStart}) => {
  return (
    <View style={{ marginTop: SIZES.l}}> 
      <View style={{
        flexDirection: 'row',
        justifyContent: flexStart,
        alignItems: 'center',
      }}>
        <Image source={image} style={{height: 40, width: 40, marginRight: SIZES.m}} />
        <View style={{ backgroundColor: '#fff', borderRadius: SIZES.xl * 3, padding: SIZES.xs, width: "50%"}}>
            <Text style={{textAlign: 'center', fontSize: SIZES.s}}>{message}</Text>
        </View>
      </View>
    </View>
  )
}

const SendMessage = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: SIZES.xl}}>
      <MaterialIcons name="send" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.s}} />
      <MaterialIcons name="camera-alt" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.s}} />
      <MaterialIcons name="image" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.s}} />
      <MaterialIcons name="keyboard-voice" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.s}} />
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.l,
        width: 130,
        paddingHorizontal: SIZES.xxs,
        paddingVertical: SIZES.xxs / 4,
      }}>
        
        <TextInput placeholder="Aa" />
        <MaterialIcons name="face" size={24} color={COLORS.secondary} />
      </View>
      <AntDesign name="like1" size={24} color={COLORS.primary} style={{paddingHorizontal: SIZES.s}}  />
    </View>
  )
}