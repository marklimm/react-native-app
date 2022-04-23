import { useEffect } from 'react'
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../types/Navigation'

import { CATEGORIES, PLAYERS } from '../data/testData'
import { Player } from '../models/models'

export type CategoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Category'
>

const CategoryScreen = ({ route, navigation }: CategoryScreenProps) => {
  const categoryId = route.params.categoryId

  const category = CATEGORIES.find((category) => category.id === categoryId)
  const players = PLAYERS.filter((player) =>
    player.categories.includes(categoryId)
  )

  useEffect(() => {
    navigation.setOptions({ title: category?.name })
  }, [])

  const playerPressed = (playerId = -1) => {
    navigation.navigate('Player', { playerId })
  }

  const renderPlayer = ({ item }: ListRenderItemInfo<Player>) => {
    const player = item

    return (
      <Pressable onPress={playerPressed.bind(this, player.id)}>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          {player.imageUrl && (
            <Image
              source={{ uri: player.imageUrl }}
              style={{ flex: 1, height: 120, borderRadius: 10 }}
            />
          )}
          <View style={{ flex: 2, paddingLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {player.firstName} {player.lastName}
            </Text>
            {player.oneLiner && <Text>{player.oneLiner}</Text>}
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{}}>
        <Text style={styles.header}>{category?.name}</Text>
      </View>

      <View style={{ marginVertical: 15 }}>
        <Text>{category?.description}</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(player) => player.id.toString()}
        renderItem={renderPlayer}
      />
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

export default CategoryScreen
