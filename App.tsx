import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from './src/utilities/colors'

const App = () => {
  const [photoVisible, setPhotoVisible] = useState(true)

  const buttonClicked = () => {
    setPhotoVisible((visible) => !visible)
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#888', fontSize: 18 }}>
        Open up App.tsx to start working on your app! Test 123
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.TEAL,
          padding: 7,
          borderRadius: 5,
          marginVertical: 10,
        }}
        onPress={buttonClicked}
      >
        <Text style={{ fontSize: 20, color: Colors.WHITE }}>Toggle photo</Text>
      </TouchableOpacity>

      {photoVisible && (
        <Image
          source={{
            uri: 'https://cbsnews1.cbsistatic.com/hub/i/r/2017/07/06/77b697b7-5fd9-431c-9929-6d92785a6b5f/thumbnail/640x425/b355cfa0d518a9a03ef46f67a5b8d603/screen-shot-2017-07-06-at-11-20-24-am.png',
          }}
          style={{ width: 640, height: 425 }}
        />
      )}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
