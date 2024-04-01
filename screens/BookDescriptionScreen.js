import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import Stars from '../components/Stars';

const BookDescriptionScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getImageSource = () => {
    switch (book.id) {
      case 1:
        return require('../assets/img_book_fashinopolis.png');
      case 2:
        return require('../assets/img_book_chanel.png');
      case 3:
        return require('../assets/img_book_calligraphy.png');
      case 4:
        return require('../assets/img_book_ysl.png');
      case 5:
        return require('../assets/img_book_tbos.png');
      case 6:
        return require('../assets/img_book_stitchedup.png');
      default:
        return null;
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Back Button */}
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icon_back.png')} style={styles.backIcon} />
        </Pressable>
        {/* Bookmark Button */}
        <Pressable onPress={toggleBookmark} style={styles.bookmarkButton}>
          <Image source={isBookmarked ? require('../assets/icon_bookmark_actived.png') : require('../assets/icon_bookmark.png')} style={styles.bookmarkIcon} />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={getImageSource()}
            style={styles.image}
          />
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          {book.isRated && (
            <View style={styles.starContainer}>
              <Stars stars={book.stars} />
              <Text style={styles.starRating}>{book.stars}.0/5.0</Text>
            </View>
          )}
          <Text style={styles.text}>{book.description}</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Buy Now For $49.99</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 210,
    height: 300,
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 5,
  },
  author: {
    fontSize: 15,
    fontWeight: '300',
    color: "#131313",
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starRating: {
    fontSize: 15,
    fontWeight: '300',
    color: "#131313",
    marginLeft: 5,
  },
  text: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
  bookmarkIcon: {
    top: 18,
    width: 24,
    height: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default BookDescriptionScreen;