import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/Text'
import { spacing } from './../theme/spacing';
import { colors } from '../theme/colors';

export default function PlanetHeader() {
    return (
        <View style={style.container}>
            <Text preset='h2'>THE PLANETS</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.3,
        borderBottomColor: colors.white,
    }
})