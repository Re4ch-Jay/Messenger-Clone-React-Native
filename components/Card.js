import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({startIcon, title, color}) => {

  return (
   
    <View style={{padding: SIZES.m}}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: SIZES.m,
            width: '100%',
            backgroundColor: "#fff", 
            borderRadius: SIZES.s,
            justifyContent: 'space-between',
        }}>
            <View style={{
              backgroundColor: color,
              borderRadius: 50,
              padding: SIZES.xxs,
            }}>{startIcon}</View>
            <Text>{title}</Text>
            <MaterialIcons name='navigate-next' size={24} color={COLORS.secondary} />
        </View>
    </View>

  )
}

export default Card

export const GroupCard = ({iconOne, iconTwo, iconThree, textOne, textTwo, textThree, onPress}) => {
    
  return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: "#fff",
        paddingHorizontal: SIZES.m,
        paddingBottom: SIZES.m,
        marginVertical: SIZES.m
        
    }}>
          <View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.row}>
                        <MaterialIcons name={iconOne} color={COLORS.primary} size={24} />
                        <Text style={styles.text} >{textOne}</Text>
                    </View>
                </TouchableOpacity>
              <View style={styles.divider} />

              <TouchableOpacity> 
                <View style={styles.row}>
                <MaterialCommunityIcons name={iconTwo} size={24} color="black" />
                    <Text style={styles.text} >{textTwo}</Text>
                </View>
              </TouchableOpacity> 
              
              <View style={styles.divider} />

              <TouchableOpacity>
                <View style={styles.row}>
                <MaterialCommunityIcons name={iconThree} size={24} color="black" />
                    <Text style={styles.text}>{textThree}</Text>
                </View>
              </TouchableOpacity>
          </View>
      </View>
  )
}



const styles = StyleSheet.create({
  divider: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.secondary,
      paddingBottom: SIZES.m,
      opacity: 0.3,
  },
  text: {
      fontFamily: FONTS.regular,
      paddingLeft: SIZES.s - 8,
  },
  row: {
      paddingTop: SIZES.s,
      flexDirection: 'row',
      justifyContent: "flex-start",
      alignItems: 'center'
  }
})