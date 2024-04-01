import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import filledStarImage from '../assets/icon_star_filled.png';
import emptyStarImage from '../assets/icon_star_empty.png';

const Stars = ({ stars }) => {
  return (
    <View style={styles.starsContainer}>
      {[...Array(5).keys()].map((index) => (
        <Image
          source={index < stars ? filledStarImage : emptyStarImage}
          style={styles.star}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  star: {
    marginRight: 4,
    width: 20,
    height: 20,
  },
});

export default Stars;
