import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/appNavigation/appNavigation'
import { NavigationContainer } from '@react-navigation/native'
import PostContextProvider from './src/contexts/postsContext'

export default function App() {
  return (
    <PostContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PostContextProvider>
  )
}