import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";


export const Focus = ({addSubject}) => {

    const [subject, setSubject] = useState(null);

    return(

        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} onChangeText={setSubject} label="What would you like to focus on?"/>
                <View style={styles.button}>
                    <RoundedButton onPress={() => addSubject(subject)} title="+" size={50}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },

    button: {
        justifyContent: 'center',
    },

    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'top',
        flexDirection: 'row',
    }
})
