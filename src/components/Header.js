import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import constants from '../constants';

export default Header = props => {
  if (props.withBack) {
    return (
      <View style={styles.titleView1}>
        <MaterialCommunityIcons
          style={{flex: 1}}
          name="chevron-left"
          size={25}
          color={'black'}
          onPress={() => props.onPress.goBack()}
        />
        <Text style={{...styles.titleText, flex: 1}}>{props.text}</Text>
        <View style={{flex: 1}}></View>
      </View>
    );
  } else {
    return (
      <View style={styles.titleView2}>
        <Text style={styles.titleText}>{props.text}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  titleView1: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'red',
    shadowRadius: 3,
    elevation: 5,
  },
  titleView2: {
    margin: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontFamily: constants.primaryFont,
  },
});
