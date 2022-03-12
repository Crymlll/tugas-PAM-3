import React from 'react'
import { View, Text, StyleSheet, Colors, Image } from "react-native"
import { Maskapai, Jadwal, Bandara } from '../../../db/data'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchResult = ({data}) => {
    let available = true

    var listJadwal = () => {

        var newJadwal = Jadwal.filter( (x) => {
            let checkBandaraK = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.keberangkatan.toLowerCase()
            })

            let checkBandaraT = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase()
            })

            try{
                return (
                    x.bandara_kode_keberangkatan.toLowerCase() == checkBandaraK[0].bandara_kode.toLowerCase() &&
                    x.bandara_kode_tujuan.toLowerCase() == checkBandaraT[0].bandara_kode.toLowerCase() &&
                    data.tanggal.length === 10
                )
            }
            catch(err){
                return available = false
            }

        })

        if(newJadwal.length>0){
            return newJadwal.map( (printJadwal, i ) => {

                let checkMaskapai = Maskapai.filter( (x) => {
                    return x.maskapai_id == printJadwal.maskapai_id
                })
                
    
                //fungsi kapital huruf pertama disetiap kata
                let capitalizeTheFirstLetterOfEachWord = (words) => {
                    let separateWord = words.toLowerCase().split(' ');
                    for (let i = 0; i < separateWord.length; i++) {
                       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                       separateWord[i].substring(1);
                    }
                    return separateWord.join(' ');
                }
    
                if(available == true){
                    return(
                        <View style={resultStyle.box} key={i}>
                            <View style={resultStyle.upperText}>
                                <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.keberangkatan)}</Text>
                                <Text style={resultStyle.text}> ------- </Text>
                                <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.tujuan)}</Text>
                            </View>
                            
                            <View style={resultStyle.bodyBox}>
                                <Image 
                                    style={resultStyle.Image}
                                    source={checkMaskapai[0].maskapai_logo}
                                ></Image>
                                <View style={resultStyle.underText}>
                                    <Text style={resultStyle.text}>{checkMaskapai[0].maskapai_nama}</Text>
                                    <Text style={resultStyle.textBlue}>{data.tanggal}</Text>
                                </View>
                            </View>
                            
                        </View>
                    )
                }
            })
        }else{
            return(
                <View style={resultStyle.boxNotAvail}>
                    <Text style={resultStyle.textNotAvail}>Maaf, jadwal penerbangan tidak tersedia</Text>
                    <MaterialCommunityIcons 
                        style={resultStyle.userIcon}
                        name="emoticon-sad-outline"
                        color={'#86b257'}
                    />
                </View>
            )
        }

        
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

const resultStyle = StyleSheet.create({
    notAvailable:{
        alignItems: 'center',
    }, 
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 10,
    },
    boxNotAvail:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        top: '100%',
        alignItems: 'center',
    },
    textNotAvail:{
        textAlign: 'center',
    },
    userIcon: {
        marginTop: 25,
        fontSize: 60,
        marginRight:20,
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    bodyBox:{
        marginTop: 10,
        alignContent: 'flex-start',
    },  
    Image:{
        width: null,
        resizeMode: 'contain',
        height: 50,
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
    },
    textBlue:{
        fontWeight: 'bold',
        color: 'blue',
    }
})

export default SearchResult