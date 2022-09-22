import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text/Text'
import PlanetHeader from './../components/PlanetHeader';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [planetData, setPlanetData] = useState(PLANET_LIST);
    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter((planet) => {
            const planetName = planet.name.toLowerCase();
            const inputText = text.toLowerCase();
            return planetName.indexOf(inputText) > -1;
        });
        setPlanetData(filteredList);
    }

    return (

        <View style={styles.container}>
            <PlanetHeader />

            <TextInput
                placeholder='Type the planet name...'
                placeholderTextColor={colors.white}
                autoCorrect={false} style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />

            {
                planetData.length > 0 ?
                    <FlatList
                        data={planetData}
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
                    /> :
                    <Text preset='small' style={{margin: spacing[4], textAlign: 'center'}}>No Matching Records Found!</Text>
            }

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
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        margin: spacing[4]
    }

})