import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BookDetail from '../components/BookDetail';
import bookData from "../json_file/BookData.json";
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const Home = () => {
  const navigation = useNavigation(); 

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.sectionTitleStyle}>{item.title}</Text>
        <FlatList
          data={item.data}
          horizontal={item.horizontal}
          renderItem={({ item: book }) => (
            <BookDetail book={book} navigation={navigation} /> 
          )}
          keyExtractor={(book) => book.id.toString()}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={bookData}
          renderItem={renderItem}
          keyExtractor={(section) => section.title}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    marginTop: 15,
    paddingLeft: 20,
  },
  thumbnail: {
    width: 154,
    height: 220,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
  },
  author: {
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    marginTop: 8,
  },
  sectionTitleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 35,
    top: 8,
    left: 20,
  },
});

export default Home;