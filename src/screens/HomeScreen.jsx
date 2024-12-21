import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { PostsContext } from '../contexts/postsContext'
import Post from '../components/Post'

export default function HomeScreen() {
    const { posts, dispatch } = useContext(PostsContext)
    // console.log('posts',posts)
    // Handle loading state
    if (!posts) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:"black" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    // Handle case when there are no posts
    if (posts.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:"black" }}>
                <Text>No posts available.</Text>
            </View>
        )
    }

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
