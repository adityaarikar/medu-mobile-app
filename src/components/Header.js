import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import constants from '../constants';
import {AuthContext} from '../../navigation/AuthProvider';

export default Header = props => {

  const {user, logout} = useContext(AuthContext);

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
        <View style={{marginRight: 14}}>
        <MaterialCommunityIcons
              name="logout"
              size={25}
              backgroundColor="#fff"
              color="#000"
              onPress={() => logout()}
            />
        </View>
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
    marginLeft: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {width: 5, height: 2},
    shadowColor: 'grey',
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
  titleView2: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'grey',
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
    color: '#000',
  },
  titleText: {
    fontSize: 25,
    fontFamily: constants.boldFont,
    color: '#000',
  },
});
