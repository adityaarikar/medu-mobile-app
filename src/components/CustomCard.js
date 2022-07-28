import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomCard = props => {
  return (
    <View style={{...styles.cardContainer, ...props.style}}>
      {props.children}
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
});
