import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CATEGORIES } from '../data/testData'
import { Category } from '../models/models'
import Color from '../utilities/Color'

import { NavigationProp } from '../types/Navigation'

const tileColorSchemes = [
  { color: Color.WHITE, backgroundColor: 'rgba(168, 50, 50, 0.8)' },
  { color: Color.WHITE, backgroundColor: 'rgba(168, 149, 50, 0.8)' },
  { color: Color.WHITE, backgroundColor: 'rgba(98, 168, 50, 0.8)' },
  { color: Color.WHITE, backgroundColor: 'rgba(50, 168, 160, 0.8)' },
  { color: Color.WHITE, backgroundColor: 'rgba(50, 104, 168, 0.8)' },
]

const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const renderCategoryTile = ({
    item,
    index,
  }: ListRenderItemInfo<Category>) => {
    const category = item

    const pressHandler = () => {
      navigation.navigate('Category', { categoryId: category.id })
    }

    return (
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.gridItem,
          {
            backgroundColor: tileColorSchemes[index].backgroundColor,
          },
          pressed ? { opacity: 0.8 } : null,
        ]}
        android_ripple={{ color: '#ccc' }}
      >
        <Text style={[styles.text, { color: tileColorSchemes[index].color }]}>
          {category.name}
        </Text>
      </Pressable>
    )
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderCategoryTile}
      />

      <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
        <Pressable
          onPress={() => navigation.navigate('TutorialScreen')}
          style={{
            backgroundColor: 'rgba(50, 168, 160, 0.6)',
            borderRadius: 4,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Tutorial screen
          </Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 8,
    flex: 1,
    height: 150,

    justifyContent: 'center',
    alignItems: 'center',

    margin: 16,
    padding: 10,

    elevation: 1, //  add a shadow on android
  },
  text: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
})

export default CategoriesScreen
