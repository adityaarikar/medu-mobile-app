import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChapterComponent from '../components/ChapterComponent';

const ChapterScreen = props => {
  return (
    <View style={styles.mainScreenContainer}>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
      />
      <ChapterComponent
        navigation={props.navigation}
        chapters={props.route.params.chapters}
      />
    </View>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({});
