import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/Text'
import PlanetHeader from './../components/PlanetHeader';
import { colors } from '../theme/colors';

export default function Home() {
    return (
        <View style={style.container}>
            <PlanetHeader />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    }
})