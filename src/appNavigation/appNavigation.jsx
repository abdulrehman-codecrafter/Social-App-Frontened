import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'

export default function AppNavigation() {
    const Stack= createNativeStackNavigator()
    return (
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                {/* <Stack.Screen name="About" component={About} /> */}
            </Stack.Navigator>
        
    )
}