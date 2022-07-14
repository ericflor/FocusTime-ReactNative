import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";


export const FocusHistory = ({history}) => {

    if(!history || !history.length) return <View style={styles.container}><Text style={styles.item}>You haven't focused on anything yet!</Text></View>

    const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Things you've focused on:
            </Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: spacing.md,
        flex: 1
    }, 

    title: {
        color: 'white',
        fontSize: fontSizes.md,
        fontWeight: 'bold',
    }, 

    item: {
        fontSize: fontSizes.md,
        color: 'white',
        paddingTop: spacing.sm,
    }
})