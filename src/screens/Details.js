import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/Text'
import PlanetHeader from './../components/PlanetHeader';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    console.log('planet', planet)
    return (
        <View style={styles.container}>
            <PlanetHeader backBtn={true} title={planet.name} />
            <ScrollView>
                <View style={styles.imageView}>

                    <View style={[styles.circle, { backgroundColor: planet.color }]}></View>
                </View>
                <View style={styles.detailsView}>
                    <Text preset='h1' style={styles.name}>{planet.name}</Text>
                    <Text style={styles.description}>{planet.description}</Text>
                    <Pressable style={styles.source}>

                        <Text>Source : </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: spacing[5] }}>
                    <View style={styles.detailsInfo}>
                        <Text style={{color: colors.grey, textTransform: 'uppercase'}}>Rotation Time</Text>
                        <Text preset='h2' style={{textTransform: 'uppercase'}}>{planet.rotationTime} days </Text>
                    </View>
                    <View style={styles.detailsInfo}>
                        <Text style={{color: colors.grey, textTransform: 'uppercase'}}>Revolution Time</Text>
                        <Text preset='h2' style={{textTransform: 'uppercase'}}>{planet.revolutionTime} </Text>
                    </View>
                    <View style={styles.detailsInfo}>
                        <Text style={{color: colors.grey, textTransform: 'uppercase'}}>Radius</Text>
                        <Text preset='h2' style={{textTransform: 'uppercase'}}>{planet.radius} km </Text>
                    </View>
                    <View style={styles.detailsInfo}>
                        <Text style={{color: colors.grey, textTransform: 'uppercase'}}>average temp</Text>
                        <Text preset='h2' style={{textTransform: 'uppercase'}}> {planet.avgTemp} </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    imageView: {
        marginTop: spacing[8],
        justifyContent: 'center',
        alignItems: 'center',

    },
    circle: {
        height: 120,
        width: 120,
        borderRadius: 100
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: 'center'
    },
    name: {
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: spacing[4]
    },
    description: {
        textAlign: 'center',
        marginTop: spacing[5],
        lineHeight: 21
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing[5]
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    detailsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.white,
        borderWidth: 0.5,
        margin: spacing[2],
        padding: spacing[2],
        borderRadius: 5,
        textTransform: 'uppercase'
    }

})