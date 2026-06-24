import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Image, Text } from 'react-native'

const Item = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.titulo}>{props.item.id}</Text>
            <Text style={styles.titulo}>{props.item.title}</Text>
        </View>
    )
}

export default function Home() {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getPostsAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await response.json()
            setPosts(posts)
        } catch (error) {
            alert('Falha ao carregar postagens. Tente novamente mais tarde.')
            setPosts([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPostsAPI()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList style={styles.lista} data={posts} renderItem={({ item }) => <Item item={item} />} keyExtractor={(item) => "#" + item.id}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    item: {
        backgroundColor: 'black'
    },
    img: {
        width: '100%',
        height: 250
    },
    titulo: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
        color: 'white'

    },
    lista: {
        flex: 1,
        marginTop: 44
    }
})