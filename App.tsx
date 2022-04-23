import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { LinearGradient } from 'expo-linear-gradient'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './src/screens/CategoriesScreen'
import TutorialScreen from './src/screens/TutorialScreen'
import CategoryScreen from './src/screens/CategoryScreen'

import PlayerScreen from './src/screens/PlayerScreen'

const RootStack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer theme={MyTheme}>
        <LinearGradient
          colors={['#93A537', '#ffffff']}
          style={styles.container}
        >
          <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.backgroundImage}
          >
            <RootStack.Navigator initialRouteName="Categories">
              <RootStack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: 'NBA categories' }}
              />
              <RootStack.Screen name="Category" component={CategoryScreen} />

              <RootStack.Screen name="Player" component={PlayerScreen} />

              <RootStack.Screen
                name="TutorialScreen"
                component={TutorialScreen}
                options={{ title: 'Tutorial' }}
              />
            </RootStack.Navigator>
          </ImageBackground>
        </LinearGradient>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
})

export default App
