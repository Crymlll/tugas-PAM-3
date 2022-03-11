import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const NavHeader = () => {
    return (
        <View style={navStyle.menu}>
            <Entypo
                style={navStyle.menuIcon}
                name="menu"
                color={'#fff'}
            />
            
            <Text style={navStyle.text}>Hiling.id</Text>
            
            <FontAwesome 
                style={navStyle.userIcon}
                name="user"
                color={'#fff'}
            />
        </View>
    )
}

const navStyle = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: '#86b257',
        justifyContent: 'space-between',
        height: 500,
    },
    text: {
        marginTop: 100,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold'
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