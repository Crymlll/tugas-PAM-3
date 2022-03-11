import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import NavHeaderShort from '../assets/Nav/NavHeaderShort'
import NavBottom from '../assets/Nav/NavBottom'
import SearchResult from '../assets/Result/SearchResult'

const ResultPage = ({route, navigation}) =>{

    const { data } = route.params;

    return (
        <View>
          <NavHeaderShort navigation = {navigation} data = {data}/>
          <SearchResult navigation={navigation} data = {data}/>
          <NavBottom/>
        </View>
      )
}

export default ResultPage