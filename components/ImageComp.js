import { View, Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'

const ImageComp = ({image, height, width, marginVertical}) => {
  return (
    <View style={{ width: height, height: width, marginVertical: marginVertical }}>
          <Image
            source={image}
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
  )
}

export default ImageComp