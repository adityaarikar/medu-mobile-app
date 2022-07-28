import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default Header = props => {
  if (props.withBack) {
    return (
      <View style={styles.titleView1}>
        <MaterialCommunityIcons
          style={{marginLeft: -20, flex: 1}}
          name="chevron-left"
          size={25}
          onPress={() => props.onPress.goBack()}
        />
        <Text style={[styles.titleText, {flex: 2}]}>{props.text}</Text>
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleView2: {
    margin: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
