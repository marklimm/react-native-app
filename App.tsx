import { StatusBar } from 'expo-status-bar'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { LinearGradient } from 'expo-linear-gradient'
import FirstScreen from './src/screens/FirstScreen'

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <LinearGradient colors={['#93A537', '#ffffff']} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContent}>
            <FirstScreen></FirstScreen>
          </View>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
  mainContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
})

export default App
