
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Courses List</Text>
       <View>
        
       </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    borderWidth:4,
    borderColor:'green',
    flex:1
  },
  header:{
    borderWidth:4,
    borderColor:'yellow',
    alignItems:'center'
  },
  headerText:{
    fontSize:26,
    fontWeight:'700'
  }

})