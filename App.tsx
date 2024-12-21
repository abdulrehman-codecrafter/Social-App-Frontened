import React from 'react'
import PostContextProvider from './src/contexts/postsContext'
import MainNavigator from './src/naviagtions/MainNavigator'

export default function App() {
  return (
    <PostContextProvider>
      <MainNavigator />
    </PostContextProvider>
  )
}