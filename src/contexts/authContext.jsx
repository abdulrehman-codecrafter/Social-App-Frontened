import { View, Text } from 'react-native'
import React, { createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
}