import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Post({ post }) {
    return (
        <View>
            <Image source={{ uri: post.user?.profilePic }} style={{ width: 100, height: 100 }} />
            <Text style={{color:'black'}}>{post.content}</Text>
            {post?.postImgUrl && (
                <Image source={{ uri: post.postImgUrl }} style={{ width: 100, height: 100 }} />
            )  
        }      
        </View>
  )
}