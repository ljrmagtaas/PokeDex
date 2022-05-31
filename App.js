import React from 'react';
import { Text, View, TextInput, Image, Button, StatusBar, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const onPress = () => null;
 

  return (
    <View style = {styles.foundation}>
      <View style={styles.headerContainer}>
        
        <Image 
        style = {{
          width: 220,
          height: 100,
          marginTop: 15,
          marginBottom: 10
        
        }}
        source = {require("./img/logo.png")}/>
  
          
          <View style = {styles.searchContainer}>
            <TextInput title = 'search' style = {styles.inputStyle}/>
            <TouchableOpacity style = {styles.searchButton}>
              <Image source = {require("./img/search.png")} style = {{width: 40, height: 40, marginHorizontal: 15}}/>
  
            </TouchableOpacity>
          </View>
  
        </View>
    <ScrollView style = {styles.mainContainer}>

      

      <View style = {styles.pokemonContainer}>
        <Text> NO DATA YET</Text>
        <View style={styles.pokemonThumbnailsContainer}>
          
          <View style = {styles.pokemonCard}>
            <View style = {styles.pokemonDesc}>
              <View style = {styles.pokemonNumber}>
                <Text style = {{fontWeight: 'bold', marginLeft: 9, fontSize: 14}}>#001</Text>
              </View>
              <Text style = {{fontSize: 30, color: 'white'}}>Bulbasaur</Text>
              <View style = {styles.pokemonType}>
                <Text style = {{fontWeight: 'bold',  fontSize: 14, textAlign: 'center'}}>Grass</Text>
              </View>
            </View>
            <View style = {styles.pokemonPic}>
              <Image source = { require("./img/001.png")} 
              style = {{
                width: 160,
                height: 150}}/>
            </View>
          </View>

        </View>

        <Button title = "Load More" color = '#2966ff'/>

      </View>

      
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  foundation: {
    backgroundColor: '#f05c5b',
    flex: 1
  },

  mainContainer:{
    backgroundColor: '#f05c5b',
  },
  headerContainer:{
   padding: 20,
   alignItems: 'center'
  },
  searchContainer:{
    backgroundColor:'white',
    flexDirection: 'row',
    paddingLeft: 10
    
  },
  inputStyle:{
    flex: 1
  },
  searchButton:{
    backgroundColor: "#4f4e4e",
    justifyContent: 'center',
    alignItems:'flex-end',
  },
  pokemonContainer:{
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'column'
  },
  pokemonThumbnailsContainer:{
    width: '100%',
    height: 150,
    marginBottom: 15,
    flexDirection: 'column'

  },
  pokemonPic:{
    alignItems: 'flex-end', 
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
    paddingRight: 15

  },
  pokemonDesc:{
    flex: 1,
    marginLeft: 20,
    marginTop: 18,
  },
  pokemonNumber:{
    backgroundColor: 'white',
    borderRadius:5,
    width: 50,
    paddingVertical: 2
  },
  pokemonType:{
    backgroundColor: '#93fd7e',
    width: 85,
    borderRadius: 20,
    marginTop: 1
  },
  pokemonCard:{
    backgroundColor:'#b4d6a9',
    height: '80%',
    borderRadius: 30,
    flexDirection: 'row'
  }
})


