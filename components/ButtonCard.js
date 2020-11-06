import React from "react";
import { Button, TouchableOpacity,ImageBackground,Text,StyleSheet,Dimensions } from "react-native"
const ButtonCard = ({title,image}) => {

    return (
        <TouchableOpacity>
            {/* 함수처럼 비구조 할당 방식으로 풀어 헤쳐 넘겨 받은 값을 변수로써 바로 사용가능합니다 */}
            <ImageBackground  source={{uri:image}} resizeMode="cover" style={styles.scrollList} >
                {/* JSX에서 속성값으로가 아닌 변수 자체에 담긴 값을 사용하려면 {}안에 변수를 둬야 합니다 */}
                <Text style={styles.scrollListHighlight}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default ButtonCard;


const styles = StyleSheet.create({
  
    scrollList: {
      width:Dimensions.get("window").width / 3,
      height:Dimensions.get("window").height / 5
    },
    scrollListHighlight : {
      flex:1,
      textAlign:'right',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color:'#fff',
      fontWeight:'700',
    },
  })