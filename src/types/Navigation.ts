import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CategoryId } from '../models/models'

/**
 * The screens that are part of the Native Stack navigation
 */
export type RootStackParamList = {
  Categories: undefined
  Category: { categoryId: CategoryId }
  Player: { playerId: number }
  TutorialScreen: undefined
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>
