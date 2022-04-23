import { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { PLAYERS } from '../data/testData'

import { RootStackParamList } from '../types/Navigation'

export type PlayerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>

const PlayerScreen = ({ route, navigation }: PlayerScreenProps) => {
  const playerId = route.params.playerId

  const player = PLAYERS.find((player) => player.id === playerId)

  const playerFullName = `${player?.firstName} ${player?.lastName}`

  useEffect(() => {
    navigation.setOptions({ title: playerFullName })
  }, [])

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{}}>
        <Text style={styles.header}>{playerFullName}</Text>
      </View>

      <ScrollView>
        {player?.imageUrl && (
          <Image
            source={{ uri: player?.imageUrl }}
            style={{ flex: 1, height: 450, borderRadius: 10 }}
          />
        )}

        <View style={{ marginVertical: 15 }}>
          <Text>{player?.careerBio}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

export default PlayerScreen
