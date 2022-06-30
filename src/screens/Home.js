import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/Text'
import PlanetHeader from './../components/PlanetHeader';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <PlanetHeader />
            <FlatList
                data={PLANET_LIST}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate("Details", { planet: item })
                        }} style={styles.item} >
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={[styles.circle, { backgroundColor: item.color }]}></View>
                                <Text preset='h4' style={styles.itemName}>{item.name}</Text>
                            </View>
                            <AntDesign name="right" size={18} color="white" />
                        </Pressable>
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            />
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