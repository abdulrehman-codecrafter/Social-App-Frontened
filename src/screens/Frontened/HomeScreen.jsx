import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { PostsContext } from '../../contexts/postsContext'
import Post from '../../components/Post'

export default function HomeScreen() {
    const { posts} = useContext(PostsContext)
    
    return (
        <>
        <Text style={{color:"black"}}>Home Screen</Text>
        <FlatList
            data={posts}
            keyExtractor={post => post._id.toString()}
            renderItem={({ item }) => <Post post={item} />}
        />
        </>
    )
}
