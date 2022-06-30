import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/Text'
import PlanetHeader from './../components/PlanetHeader';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <PlanetHeader backBtn={true} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    list: {
        padding: spacing[4],
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: spacing[4]
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    itemName: {
        textTransform: "uppercase",
        marginLeft: spacing[4]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5
    }

})