import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

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
    borderRadius: 50,
    backgroundColor: constants.primaryColor,
  },
});
