import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES, FONTS } from "../constants";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Profile = ({route, navigation}) => {
    const {name, image} = route.params;
    console.log(route)
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column', margin: SIZES.l}}>
        <FocusedStatusBar />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back-sharp" size={24} color={COLORS.primary} style={{paddingRight: SIZES.m}} />
        </TouchableOpacity>
        <View style={{flexDirection: "column", alignItems: 'center', marginTop: SIZES.l}}>
            <Image source={image} />
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.xl,
                padding: SIZES.l
            }}>{name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{
                    backgroundColor: COLORS.gray,
                    padding: SIZES.xxs / 2,
                    borderRadius: SIZES.m,
                    marginRight: SIZES.s,
                }}>
                    <MaterialIcons name='facebook' size={24} color={COLORS.dark} />
                </View>
                <View style={{
                    backgroundColor: COLORS.gray,
                    padding: SIZES.xxs / 2,
                    borderRadius: SIZES.m,
    
                }}>
                    <MaterialIcons name='notifications' size={24} color={COLORS.dark} />
                </View>
            </View>
        </View>

        <ScrollView style={{flex: 1, marginTop: SIZES.xl * 2}}>        
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: "#fff",
            padding: SIZES.m,
            
        }}>
            <View>
                <View style={styles.row}>
                    <MaterialIcons name='circle' color={COLORS.primary} size={24} />
                    <Text style={styles.text} >Theme</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.row}>
                <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.text} >Quick reaction</Text>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.row}>
                <MaterialCommunityIcons name="alphabetical-variant" size={24} color="black" />
                    <Text style={styles.text}>Nicknames</Text>
                </View>
            </View>
        </View>

        
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: "#fff",
            padding: SIZES.m,
            marginTop: SIZES.xl * 2
        }}>
            <View>
                <View style={styles.row}>
                    <MaterialIcons name='circle' color={COLORS.primary} size={24} />
                    <Text style={styles.text} >Theme</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.row}>
                <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.text} >Quick reaction</Text>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.row}>
                <MaterialCommunityIcons name="alphabetical-variant" size={24} color="black" />
                    <Text style={styles.text}>Nicknames</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <MaterialIcons name='circle' color={COLORS.primary} size={24} />
                    <Text style={styles.text} >Theme</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.row}>
                <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.text} >Quick reaction</Text>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.row}>
                <MaterialCommunityIcons name="alphabetical-variant" size={24} color="black" />
                    <Text style={styles.text}>Nicknames</Text>
                </View>
            </View>
        </View>

        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: "#fff",
            padding: SIZES.m,
            marginTop: SIZES.xl * 2
        }}>
            <View>
                <View style={styles.row}>
                    <MaterialIcons name='circle' color={COLORS.primary} size={24} />
                    <Text style={styles.text} >Theme</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.row}>
                <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.text} >Quick reaction</Text>
                </View>
                
                <View style={styles.divider} />

                <View style={styles.row}>
                <MaterialCommunityIcons name="alphabetical-variant" size={24} color="black" />
                    <Text style={styles.text}>Nicknames</Text>
                </View>


            </View>
        </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Profile


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