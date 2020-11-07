import React from "react";
import {View,Text,StyleSheet} from "react-native"

export default History = () => {
    return (<View style={styles.readyContainer}><Text style={styles.readyText}>히스토리 페이지입니다...</Text></View>)
}

const styles = StyleSheet.create({
    //준비화면 스타일
    readyContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    readyText: {
      color:'#fff'
    }
  });