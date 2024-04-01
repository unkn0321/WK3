import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BookDetail from './BookDetail.js';
import BookData from '../../assets/data/BookData.json';

const BookList = ({ navigation })  => {
  return(
    
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{BookData[0].title}</Text>
      <FlatList 
        horizontal={true}
        data={BookData[0].data}
        renderItem={({item}) => <BookDetail book={item}  navigation={navigation} />}
        keyExtractor={item => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
      <Text style={styles.titleStyle}>{BookData[1].title}</Text>
      <FlatList 
        horizontal={true}
        data={BookData[1].data}
        renderItem={({item}) => <BookDetail book={item}  navigation={navigation} />}
        keyExtractor={item => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    margintop: 88,
    height: 641
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 25,
    marginTop: 20,
    top: 8,
    height: 28
  }
});

export default BookList;