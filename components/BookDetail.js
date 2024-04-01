import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Stars from './Stars.js';

const BookDetail = ({ book, navigation }) => {
  
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
    }
  };

  return (
    <View style={styles.containerStyle}>
      <Pressable onPress={() => navigation.navigate('BookDescription', { book })}>
        <Image 
          source={getImageSource()} 
          style={styles.thumbnailStyle}
          key={book.title}
        />
        {book.isRated ? <Stars stars={book.stars} style={styles.starsStyle}/> : null}
        <Text style={styles.titleStyle}>{book.title}</Text>
        <Text style={styles.authorStyle}>{book.author}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    paddingLeft: 20,
  },
  thumbnailStyle: {
    width: 154,
    height: 220,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
    resizeMode: 'stretch',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20
  },
  authorStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    width: '100%',
    marginTop: 8
  },
  starsStyle: {
    flex: 1
  }
});

export default BookDetail;