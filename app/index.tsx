import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import { styles } from './styles'

const main = () => {
  useEffect(()=>{
    setTimeout(()=>{
      router.replace('/main')
    },1500)
  },[])
  return (
    <SafeAreaView style={{
      justifyContent: 'center',
      alignItems: 'center',
      // flex: 1,
      height: '80%'
    }}>
      <View>
        <Text style={{...styles.mainText,fontSize: 40,fontWeight: '700'}}>Todo App</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </SafeAreaView>
  )
}

export default main