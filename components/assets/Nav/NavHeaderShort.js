import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const NavHeader = ({data, navigation}) => {
    return (
        <View style={navStyle.menu}>
            <View style={navStyle.Icon}>
                <Ionicons
                    style={navStyle.menuIcon}
                    name="arrow-back"
                    color={'#fff'}
                    onPress={() => navigation.goBack()}
                />
                <Text style={navStyle.textHead}>Hiling.id</Text>
                <FontAwesome 
                    style={navStyle.userIcon}
                    name="user"
                    color={'#fff'}
                />
            </View>
            <View style={navStyle.text}>
                
                <Text style={navStyle.textHasil}>Hasil Pencarian Penerbangan</Text>
                <Text style={navStyle.textTanggal}>{data.tanggal}</Text>
            </View>
        </View>
        
    )
}

const navStyle = StyleSheet.create({
    Icon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        backgroundColor: '#86b257',
        height: 150,
    },
    text:{
        alignItems: 'center'
    }, 
    textHead: {
        marginTop: 30,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold'
    },
    textHasil:{
        fontSize: 15,
        color: "white",
    },
    textTanggal:{
        fontSize: 15,
        color: "white",
    },
    menuIcon: {
        marginTop: 25,
        fontSize: 40,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 25,
        fontSize: 40,
        marginRight:20,
    },
})

export default NavHeader