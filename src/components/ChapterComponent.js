import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomCard from './CustomCard';

const ChapterComponent = props => {
  const navigation = props.navigation;

  const goToChapter = (topics, name) => {
    return navigation.navigate('Topic', {topics, name});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={props.chapters}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => goToChapter(item.topics, item.chapterName)}>
            <CustomCard style={styles.card}>
              <Text style={styles.title}>{item.chapterName}</Text>
            </CustomCard>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.cId}
      />
    </SafeAreaView>
  );
};

export default ChapterComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    marginVertical: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
});
