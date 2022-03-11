import React from 'react'
import {View, Text} from 'react-native'
import NavHeader from '../assets/Nav/NavHeader'
import FormSearch from '../assets/Form/FormSearch'
import NavBottom from '../assets/Nav/NavBottom'

const SearchPage = ({navigation}) =>{
    return (
        <View>
          <NavHeader/>
          <FormSearch navigation={navigation}/>
          <NavBottom/>
        </View>
      )
}

export default SearchPage