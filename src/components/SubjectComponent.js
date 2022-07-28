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
import Data from './../Data';
import CustomCard from './CustomCard';

const SubjectComponent = props => {
  const navigation = props.navigation;

  const goToChapter = (chapters, name) => {
    return navigation.navigate('Chapter', {chapters, name});
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => goToChapter(item.chapters, item.name)}>
            <CustomCard style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
            </CustomCard>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.sId}
      />
    </SafeAreaView>
  );
};

export default SubjectComponent;

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
