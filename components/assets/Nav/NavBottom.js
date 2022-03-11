import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const NavBottom = () => {
    return (
        <View style={navStyle.copyright}>
            <Text style={navStyle.textCopyright}>Copyright Aulia Rahman Zulfi-119140110</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 850,
        left: 100,
    },
    textCopyright:{
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default NavBottom