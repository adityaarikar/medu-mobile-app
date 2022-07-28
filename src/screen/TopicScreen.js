import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopicComponent from '../components/TopicComponent';

const TopicScreen = props => {
  return (
    <View style={styles.mainScreenContainer}>
      <Header
        text={props.route.params.name}
        withBack={true}
        onPress={props.navigation}
      />
      <TopicComponent
        navigation={props.navigation}
        topics={props.route.params.topics}
      />
    </View>
  );
};

export default TopicScreen;

const styles = StyleSheet.create({});
