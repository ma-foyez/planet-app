import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/Text'
import { spacing } from './../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ title = "THE PLANETS", backBtn = false }) {

    const navigation = useNavigation();

    return (
        <View style={style.container}>

            {
                backBtn && (
                    <Pressable style={{ marginRight: spacing[4] }} onPress={() => { navigation.goBack() }}>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                )
            }
            <Text preset='h2'>{title.toUpperCase()}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.3,
        borderBottomColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
    }
})