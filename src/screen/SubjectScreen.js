import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubjectComponents from './../components/SubjectComponent';

const SubjectScreen = ({navigation}) => {
  return (
    <View style={styles.mainScreenContainer}>
      <Header text="Subjects" withBack={false} />
      <SubjectComponents navigation={navigation} />
    </View>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
