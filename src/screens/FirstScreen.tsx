import { useState } from 'react'
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../utilities/colors'

const FirstScreen = () => {
  const [photoVisible, setPhotoVisible] = useState(true)
  const [inputText, setInputText] = useState('')

  const buttonClicked = () => {
    setPhotoVisible((visible) => !visible)
  }

  const onTextChanged = (text = '') => {
    setInputText(text)
  }

  return (
    <>
      <ScrollView>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontFamily: 'open-sans-bold',
          }}
        >
          Open up App.tsx to start working on your app! Test 36747
        </Text>

        <Pressable
          style={({ pressed }) => {
            const regularStyles = {
              backgroundColor: Colors.TEAL,
              padding: 7,
              borderRadius: 5,

              elevation: 10,
              margin: 20,
            }

            //  if the Pressable is currently being pressed, decrease the opacity
            return [regularStyles, pressed ? styles.pressedButton : {}]
          }}
          onPress={buttonClicked}
          android_ripple={{ color: '#ff0000' }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Ionicons
              name="camera"
              size={24}
              color={Colors.WHITE}
              style={{ marginRight: 5 }}
            />

            <Text
              style={{ fontSize: 20, color: Colors.WHITE, textAlign: 'center' }}
            >
              Toggle photo
            </Text>
          </View>
        </Pressable>

        <TextInput
          keyboardType="number-pad"
          autoCapitalize="none"
          maxLength={2}
          placeholder="Type text here"
          onChangeText={onTextChanged}
          style={styles.textInput}
          value={inputText}
        />

        <Text style={{ padding: 10, fontFamily: 'open-sans' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Text>

        {/* width: 640, */}
        {photoVisible && (
          <View style={{ height: 525 }}>
            <Image
              source={{
                uri: 'https://cbsnews1.cbsistatic.com/hub/i/r/2017/07/06/77b697b7-5fd9-431c-9929-6d92785a6b5f/thumbnail/640x425/b355cfa0d518a9a03ef46f67a5b8d603/screen-shot-2017-07-06-at-11-20-24-am.png',
              }}
              style={{ flex: 1 }}
            />
          </View>
        )}

        <Text>stuff below photo</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.5,
  },
  textInput: {
    height: 45,
    width: 70,
    fontSize: 20,
    borderBottomColor: '#aa0000',
    borderBottomWidth: 2,
    marginVertical: 5,
  },
})

export default FirstScreen
